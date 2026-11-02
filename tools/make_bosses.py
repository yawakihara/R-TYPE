"""各ステージの専用ボス8体を制作し、関節付きGLBと編集用Blenderを出力する。

既存requiem-assets.blendは材質とパック済み画像の読み取りだけに使用する。
実行: blender --background --python tools/make_bosses.py
任意のBOSS_PREVIEW環境変数をPNG絶対パスにすると、一覧の確認画像も出力する。
"""
import bpy
import math
import os
import random
import json
import numpy as np
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
random.seed(8819)
TAU = math.tau
CURRENT = None
ROOTS = []
PARTS = {}
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)


def loc(point):
    """ゲームのXYZ座標をBlenderのX,-Z,Y座標に変換して返す。"""
    return Vector((point[0], -point[2], point[1]))


def material(name, color, metal=0.0, rough=.4, glow=None, power=0):
    """RGB・金属度・粗さ・任意の発光からPBR材質を返す。"""
    result = bpy.data.materials.new(name)
    result.use_nodes = True
    # 日本語UIでは既定ノードの表示名も変わるため、型を指定して一組だけ作る。
    result.node_tree.nodes.clear()
    shader = result.node_tree.nodes.new('ShaderNodeBsdfPrincipled')
    shader.name = 'Principled BSDF'
    output = result.node_tree.nodes.new('ShaderNodeOutputMaterial')
    output.is_active_output = True
    result.node_tree.links.new(shader.outputs['BSDF'], output.inputs['Surface'])
    shader.inputs['Base Color'].default_value = (*color, 1)
    shader.inputs['Metallic'].default_value = metal
    shader.inputs['Roughness'].default_value = rough
    if glow:
        shader.inputs['Emission Color'].default_value = (*glow, 1)
        shader.inputs['Emission Strength'].default_value = power
    return result


# 既存の筋繊維・骨・金属の傷を再利用する。オブジェクトは読み込まない。
with bpy.data.libraries.load(os.path.join(ROOT, 'art', 'requiem-assets.blend'), link=False) as (source, target):
    target.materials = list(source.materials)
M = {}
for key, name in {
    'bone': 'Calcified exoskeleton', 'flesh': 'Alien muscular tissue',
    'tendon': 'Tendon', 'dark': 'Carbon underframe', 'steel': 'Alien gunmetal',
    'edge': 'Titanium edges', 'ceramic': 'Pearl ceramic | aerospace',
    'red': 'Vermilion markings', 'blue': 'Ion emitters', 'orange': 'Force plasma',
    'green': 'Toxic bioluminescence', 'eye': 'Hostile optic', 'violet': 'Neural energy',
}.items():
    M[key] = bpy.data.materials.get(name)
    if M[key] is None:
        raise RuntimeError('必要な既存材質がありません: ' + name)


def worn_metal(key, name, color, rough=.33):
    """小傷・腐食斑の色画像と既存法線を持つ金属材質を作り辞書へ登録する。"""
    mat = material(name, color, .83, rough)
    size = 512
    rng = np.random.default_rng(sum(ord(c) for c in key))
    yy, xx = np.mgrid[0:size, 0:size].astype(np.float32)
    grain = rng.random((size, size)).astype(np.float32)
    stain = .85 + .11 * np.sin(xx*.051 + np.sin(yy*.027)*3) + .035*grain
    scratches = (grain > .996).astype(np.float32)
    brushed = .97 + .03*np.sin(xx*2.7)
    rgba = np.ones((size, size, 4), dtype=np.float32)
    for i, component in enumerate(color):
        rgba[:, :, i] = np.clip(component * stain * brushed + scratches*.16, 0, 1)
    image = bpy.data.images.new('BOSS_' + key + '_worn_albedo', width=size, height=size)
    image.pixels.foreach_set(rgba.ravel())
    image.pack()
    tree = mat.node_tree
    shader = tree.nodes.get('Principled BSDF')
    tex = tree.nodes.new('ShaderNodeTexImage')
    tex.image = image
    tree.links.new(tex.outputs['Color'], shader.inputs['Base Color'])
    reference = next((n.image for n in M['ceramic'].node_tree.nodes if n.type == 'TEX_IMAGE' and n.image and 'normal' in n.image.name), None)
    if reference:
        texn = tree.nodes.new('ShaderNodeTexImage')
        texn.image = reference
        normal = tree.nodes.new('ShaderNodeNormalMap')
        normal.inputs['Strength'].default_value = .55
        tree.links.new(texn.outputs['Color'], normal.inputs['Color'])
        tree.links.new(normal.outputs['Normal'], shader.inputs['Normal'])
    M[key] = mat


worn_metal('armor', 'BOSS | bruised cobalt titanium', (.14,.24,.31))
worn_metal('brass', 'BOSS | ancient electrum', (.43,.27,.085), .29)
worn_metal('hazard', 'BOSS | furnace ochre', (.63,.25,.025), .42)
worn_metal('ivory', 'BOSS | nacre armature', (.58,.62,.52), .3)
M['wet'] = material('BOSS | wet ventricular muscle', (.20,.012,.025), .12,.25)
M['vein'] = material('BOSS | dark venous walls', (.035,.047,.09), .22,.3)
M['cyan'] = material('BOSS | ice neural fibre', (.025,.16,.21), .3,.24,(.12,.75,1),3.5)
M['amber'] = material('BOSS | reactor amber', (.4,.13,.008), .3,.23,(1,.31,.025),3.5)


def root(name):
    """原点にボスのルートを作り、現在の親として返す。"""
    global CURRENT
    obj = bpy.data.objects.new(name, None)
    bpy.context.collection.objects.link(obj)
    obj.empty_display_type = 'PLAIN_AXES'
    obj.empty_display_size = .5
    ROOTS.append(obj)
    PARTS[name] = []
    CURRENT = obj
    return obj


def group(owner, suffix, pivot=(0,0,0)):
    """ルート下に名前付き関節を作る。pivotはゲーム座標の回転支点。"""
    global CURRENT
    obj = bpy.data.objects.new(owner.name + '__' + suffix, None)
    bpy.context.collection.objects.link(obj)
    obj.parent = owner
    obj.location = loc(pivot)
    obj.empty_display_type = 'SPHERE'
    obj.empty_display_size = .13
    PARTS[owner.name].append(obj)
    CURRENT = obj
    bpy.context.view_layer.update()
    return obj


def finish(obj, name, mat, smooth=True):
    """材質・親・法線を割り当て、世界位置を保ったまま関節へ所属させる。"""
    obj.name = CURRENT.name + '__' + name
    obj.data.materials.append(M[mat])
    obj.parent = CURRENT
    obj.matrix_parent_inverse = CURRENT.matrix_world.inverted()
    for polygon in obj.data.polygons:
        polygon.use_smooth = smooth
    if not obj.data.uv_layers:
        uv = obj.data.uv_layers.new(name='SurfaceUV')
        for polygon in obj.data.polygons:
            for loop_index in polygon.loop_indices:
                co = obj.data.vertices[obj.data.loops[loop_index].vertex_index].co
                uv.data[loop_index].uv = (co.x*.35 + .5, co.z*.35 + .5)
    return obj


def mesh(name, verts, faces, mat, smooth=True):
    """ゲーム座標の頂点・面からUV付きメッシュを作り返す。"""
    data = bpy.data.meshes.new(name)
    data.from_pydata([loc(v) for v in verts], [], faces)
    data.update()
    obj = bpy.data.objects.new(name, data)
    bpy.context.collection.objects.link(obj)
    return finish(obj, name, mat, smooth)


def box(name, p, dimensions, mat, bevel=.04):
    """面取りを持つ寸法指定の装甲・機械ブロックを返す。"""
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc(p))
    obj = bpy.context.object
    obj.scale = (dimensions[0], dimensions[2], dimensions[1])
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if bevel:
        mod = obj.modifiers.new('CNC edge radii', 'BEVEL')
        mod.width = bevel
        mod.segments = 2
    return finish(obj, name, mat, False)


def ellipsoid(name, p, radii, mat, segments=24):
    """指定半径の楕円体を作る。補助関節・眼球・筋肉膨隆に使用する。"""
    bpy.ops.mesh.primitive_uv_sphere_add(segments=segments, ring_count=12, location=loc(p))
    obj = bpy.context.object
    obj.scale = (radii[0], radii[2], radii[1])
    return finish(obj, name, mat)


def cylinder(name, a, b, radius, mat, tip=None, sides=16):
    """2点間の円柱または円錐を作る。tip省略時は等径とする。"""
    aa, bb = loc(a), loc(b)
    delta = bb-aa
    bpy.ops.mesh.primitive_cone_add(vertices=sides, radius1=radius, radius2=radius if tip is None else tip, depth=delta.length, location=(aa+bb)/2)
    obj = bpy.context.object
    obj.rotation_euler = delta.to_track_quat('Z', 'Y').to_euler()
    return finish(obj, name, mat)


def torus(name, p, radius, thickness, mat, axis='Z', scale=None):
    """ゲーム座標軸を法線とする環を作る。scaleは環の楕円変形。"""
    bpy.ops.mesh.primitive_torus_add(major_radius=radius, minor_radius=thickness, major_segments=32, minor_segments=8, location=loc(p))
    obj = bpy.context.object
    if axis == 'X':
        obj.rotation_euler[1] = math.pi/2
    elif axis == 'Z':
        obj.rotation_euler[0] = math.pi/2
    if scale:
        obj.scale = scale
    return finish(obj, name, mat)


def prism(name, points, z, depth, mat, bevel=.035):
    """XY輪郭を指定深度へ押し出して角を面取りした板金を返す。"""
    n = len(points)
    vertices = [(x,y,z-depth/2) for x,y in points] + [(x,y,z+depth/2) for x,y in points]
    faces = [tuple(reversed(range(n))), tuple(range(n,n*2))]
    faces += [(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
    obj = mesh(name, vertices, faces, mat, False)
    if bevel:
        mod = obj.modifiers.new('Forged edge bevel', 'BEVEL')
        mod.width = bevel
        mod.segments = 2
    return obj


def loft(name, sections, mat, sides=20, corrugation=0):
    """X方向の断面(x,中心Y,中心Z,Y半径,Z半径)を繋ぎ、有機的な殻を返す。"""
    vertices, faces = [], []
    for j, (x,y,z,ry,rz) in enumerate(sections):
        for i in range(sides):
            angle = TAU*i/sides
            ridge = 1 + corrugation*math.cos(angle*5 + j*.8)
            vertices.append((x, y+math.cos(angle)*ry*ridge, z+math.sin(angle)*rz*ridge))
    for j in range(len(sections)-1):
        for i in range(sides):
            k = j*sides+i
            faces.append((k,j*sides+(i+1)%sides,(j+1)*sides+(i+1)%sides,k+sides))
    faces += [tuple(reversed(range(sides))), tuple((len(sections)-1)*sides+i for i in range(sides))]
    return mesh(name, vertices, faces, mat)


def catmull(points, samples=5):
    """点列をCatmull-Rom補間し、滑らかな経路と補間パラメーターを返す。"""
    p = [Vector(v) for v in points]
    extended = [p[0]] + p + [p[-1]]
    result = []
    for i in range(len(p)-1):
        p0,p1,p2,p3 = extended[i:i+4]
        for j in range(samples):
            t = j/samples
            co = .5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t)
            result.append((co, i+t))
    result.append((p[-1],len(p)-1))
    return result


def tendon(name, points, radii, mat, sides=10, samples=5):
    """曲線に沿う可変径の筋・血管・骨・配管を作る。radiiは各制御点半径。"""
    path = catmull(points, samples)
    verts, faces = [], []
    previous = Vector((0,0,1))
    for j, (co, u) in enumerate(path):
        tangent = path[min(j+1,len(path)-1)][0] - path[max(j-1,0)][0]
        tangent.normalize()
        reference = previous
        if abs(tangent.dot(reference)) > .95:
            reference = Vector((0,1,0))
        side = tangent.cross(reference).normalized()
        up = side.cross(tangent).normalized()
        previous = up
        i = min(int(u),len(radii)-2)
        a = u-i
        radius = radii[i]*(1-a)+radii[i+1]*a
        for k in range(sides):
            angle = TAU*k/sides
            verts.append(tuple(co+(side*math.cos(angle)+up*math.sin(angle))*radius))
    for j in range(len(path)-1):
        for k in range(sides):
            faces.append((j*sides+k,j*sides+(k+1)%sides,(j+1)*sides+(k+1)%sides,(j+1)*sides+k))
    faces += [tuple(reversed(range(sides))),tuple((len(path)-1)*sides+i for i in range(sides))]
    return mesh(name, verts, faces, mat)


def bolts(name, points, radius=.065, mat='edge', depth=.1):
    """前面位置の点列へ六角ボルトを作り、統合後に同材質でまとめる。"""
    for i, (x,y,z) in enumerate(points):
        cylinder(name+str(i), (x,y,z-depth/2), (x,y,z+depth/2), radius, mat, sides=6)


def iris(name, p, radius, mat='eye'):
    """凹んだ装甲ソケットと発光レンズを前面Z向きに作る。"""
    x,y,z = p
    torus(name+'_socket', (x,y,z), radius, radius*.24, 'dark')
    ellipsoid(name+'_lens', (x,y,z+.025), (radius*.78,radius*.78,radius*.33), mat,20)
    cylinder(name+'_slit', (x,y-radius*.48,z+radius*.31), (x,y+radius*.48,z+radius*.31), radius*.075, 'dark', sides=6)


def build_doorkeeper():
    """上下装甲が展開する、城門状の重装ボスを制作する。"""
    owner = root('boss_doorkeeper')
    group(owner,'body')
    prism('rear_keel', [(1.0,-2.6),(2.1,-2.9),(3.0,-2.1),(3.1,2.1),(2.1,2.9),(1.0,2.6)], -.35,.95,'dark')
    box('spine', (2.25,0,.35),(.9,4.9,.9),'armor',.12)
    for y in [-2.0,-1.0,0,1.0,2.0]:
        box('spine_seam', (2.25,y,.85),(.96,.075,.06),'edge',.015)
        bolts('spine_rivets',[(1.94,y,.91),(2.54,y,.91)])
    for y in [-.65,.65]:
        cylinder('exposed_conduit',(-1.75,y,-.25),(1.8,y,-.25),.18,'brass')
        cylinder('luminous_seal',(-1.7,y,-.02),(1.6,y,-.02),.065,'blue')
    torus('core_recess', (-1.45,0,.15), .71,.17,'edge')
    for sign,suffix in [(1,'shell_top'),(-1,'shell_bottom')]:
        group(owner,suffix,(1.25,sign*1.15,0))
        outline = [(-2.75,sign*.85),(-2.7,sign*2.5),(-1.8,sign*3.15),(1.5,sign*3.0),(2.25,sign*2.3),(1.6,sign*1.05),(-.6,sign*.64)]
        prism('gate_armor',outline,.3,.8,'armor',.09)
        prism('ceramic_facing',[(-2.6,sign*1.12),(-2.55,sign*2.32),(-1.65,sign*2.83),(.85,sign*2.7),(1.36,sign*1.45),(-.9,sign*.95)],.79,.18,'ceramic',.06)
        for i in range(5):
            x=-2.25+i*.62
            prism('segmented_rib',[(x,sign*1.12),(x+.16,sign*1.17),(x+.47,sign*2.63),(x+.29,sign*2.69)],.93,.16,'edge')
        box('caution_panel',(-1.62,sign*2.12,1.03),(.72,.24,.1),'red')
        bolts('armour_fasteners',[(x,sign*y,1.0) for x,y in [(-2.37,1.38),(-2.16,2.36),(.81,2.4),(1.04,1.56)]],.08)
        cylinder('hinge',(1.25,sign*1.15,-.5),(1.25,sign*1.15,1.05),.26,'brass')
        torus('hinge_collar',(1.25,sign*1.15,1.02),.28,.065,'edge')
    for sign,suffix in [(1,'cannon_top'),(-1,'cannon_bottom')]:
        group(owner,suffix,(.5,sign*2.0,.42))
        box('gun_mount',(.1,sign*2.0,.45),(1.3,.72,.7),'dark')
        cylinder('barrel_sleeve',(-2.95,sign*2.0,.65),(.65,sign*2.0,.65),.26,'steel')
        for x in [-2.75,-2.15,-1.55,-.95]:
            torus('barrel_band',(x,sign*2.0,.65),.28,.055,'edge',axis='X')
        cylinder('muzzle_dark',(-3.03,sign*2.0,.65),(-2.97,sign*2.0,.65),.205,'dark')
        torus('muzzle_lip',(-3.03,sign*2.0,.65),.225,.065,'brass',axis='X')
        cylinder('ion_rail',(-2.7,sign*2.0,.94),(-.4,sign*2.0,.94),.05,'blue')
    return owner


def build_gorgon():
    """赤い筋繊維、複眼、肋骨、上下の牙顎を持つ捕食獣を制作する。"""
    owner = root('boss_gorgon')
    group(owner,'body')
    loft('muscular_neck',[(-.4,0,-.3,.95,.7),(.3,0,-.3,1.5,1.0),(1.4,0,-.4,1.85,1.2),(2.45,.15,-.45,1.25,.85),(3.05,.2,-.45,.15,.2)],'flesh',24,.045)
    for i in range(6):
        x=.25+i*.47
        tendon('thoracic_rib',[(x,1.58,-.1),(x-.3,1.12,.8),(x-.38,.05,1.0),(x-.12,-1.45,.45)], [.15,.15,.12,.045], 'bone',10)
        tendon('muscle_bundle',[(x,1.2,-.05),(x-.2,.8,.9),(x-.4,-.65,.9),(x-.12,-1.5,.05)],[.16,.2,.16,.08],'tendon',8)
    for sign in [-1,1]:
        tendon('rear_barb',[(1.8,sign*1.1,-.5),(2.9,sign*1.8,-.7),(2.65,sign*2.6,-.55)],[.32,.20,.012],'bone')
        tendon('neck_tendon',[(2.6,sign*.4,-.2),(1.0,sign*1.7,.3),(-1.0,sign*1.25,.45)],[.26,.28,.09],'tendon')
    for sign,suffix in [(1,'jaw_top'),(-1,'jaw_bottom')]:
        group(owner,suffix,(1.15,sign*.7,0))
        loft('jaw_muscle',[(-3.0,sign*.89,.06,.12,.17),(-2.45,sign*1.05,.03,.35,.55),(-1.6,sign*1.38,-.04,.62,.85),(-.4,sign*1.43,-.08,.84,1.0),(1.3,sign*.8,-.08,.67,.78)],'flesh',24,.06)
        prism('mandible_bone',[(-3.1,sign*.86),(-2.63,sign*1.50),(-1.2,sign*2.2),(.8,sign*1.84),(1.6,sign*.85),(.55,sign*.66),(-1.4,sign*.82)],.37,.3,'bone',.09)
        for i in range(6):
            x=-2.65+i*.52
            y=sign*(.88+.17*math.sin(i*.53))
            tendon('curved_fang',[(x,y,.5),(x-.15,y-sign*.45,.59),(x-.31,y-sign*(.66 if i%2 else .83),.64)],[.145,.085,.008],'bone',10)
        tendon('jaw_ridge',[(-2.7,sign*1.52,.30),(-1.3,sign*2.05,.61),(.3,sign*1.94,.7),(1.0,sign*1.22,.7)],[.1,.14,.15,.07],'tendon')
        for i in range(4):
            x=-1.7+i*.63
            y=sign*(1.65+.13*math.sin(i))
            iris('compound_eye',(x,y,.91),.17+(i%2)*.065,'green' if sign<0 else 'eye')
        tendon('outer_horn',[(.4,sign*1.5,-.4),(1.6,sign*2.55,-.3),(.5,sign*3.15,-.13),(-.2,sign*2.9,.1)],[.31,.25,.12,.006],'bone')
    return owner


def build_colossus():
    """10単位幅の戦艦、長砲身、独立砲台、炉心、冷却フィンを制作する。"""
    owner = root('boss_colossus')
    group(owner,'body')
    loft('dreadnought_hull',[(-3.1,.12,-.15,.32,.48),(-1.6,.15,-.15,.93,.85),(.4,.08,-.15,1.1,1.15),(3.3,0,-.1,.9,1.2),(4.6,0,-.1,.68,.88)],'dark',12)
    prism('upper_hull',[(-2.9,.5),(-1.4,1.12),(2.9,1.28),(4.7,.62),(4.7,.12),(-2.75,.12)],.45,.75,'armor',.09)
    prism('lower_hull',[(-2.9,-.5),(-1.4,-1.12),(2.9,-1.28),(4.7,-.62),(4.7,-.12),(-2.75,-.12)],.45,.75,'steel',.09)
    for i in range(8):
        x=-1.9+i*.8
        box('hull_panel',(x,.77,.89),(.66,.41,.14),'armor')
        box('lower_panel',(x,-.77,.89),(.66,.41,.14),'edge')
        box('running_light',(x,-.35,1.08),(.38,.045,.045),'blue',.01)
    for sign,suffix in [(1,'shell_top'),(-1,'shell_bottom')]:
        group(owner,suffix,(1.3,sign*1.05,-.1))
        prism('radiator_arm',[(-1.8,sign*1.0),(-1.2,sign*1.55),(3.5,sign*1.55),(4.5,sign*.8)],-.1,.8,'dark')
        for i in range(12):
            x=-1.35+i*.45
            h=.65+.42*math.sin(i/11*math.pi)
            prism('titanium_cooling_fin',[(x,sign*1.2),(x-.14,sign*(1.2+h)),(x+.05,sign*(1.35+h)),(x+.23,sign*1.2)],.27,.48,'edge',.025)
            cylinder('hot_fin_root',(x,sign*1.15,.55),(x+.04,sign*1.65,.55),.035,'amber')
        box('coolant_header',(1.3,sign*1.51,.61),(4.7,.18,.2),'brass')
    group(owner,'main_cannon',(.4,.22,-.1))
    cylinder('heavy_magnetic_barrel',(-5.0,.2,.1),(.65,.2,.1),.33,'steel')
    for z in [-.24,.45]:
        box('accelerator_rail',(-2.15,.2,z),(5.4,.24,.17),'edge')
        cylinder('accelerator_glow',(-4.5,.2,z+.11),(-.2,.2,z+.11),.04,'blue')
    for x in [-4.65,-3.85,-3.0,-2.15,-1.3]:
        torus('magnetic_collars',(x,.2,.1),.38,.08,'brass',axis='X')
    cylinder('bore',(-5.06,.2,.1),(-5.01,.2,.1),.27,'dark')
    torus('muzzle_crown',(-5.02,.2,.1),.33,.075,'edge',axis='X')
    for sign,suffix in [(1,'cannon_top'),(-1,'cannon_bottom')]:
        group(owner,suffix,(1.65,sign*1.5,.65))
        box('turret',(1.65,sign*1.5,.62),(1.1,.6,.65),'armor',.11)
        for off in [-.19,.19]:
            cylinder('twin_gun',(-.3,sign*1.5+off,.75),(1.65,sign*1.5+off,.75),.095,'edge')
            torus('gun_muzzle',(-.32,sign*1.5+off,.75),.1,.03,'brass',axis='X')
    group(owner,'reactor',(3.5,0,.8))
    torus('reactor_shield',(3.45,0,1.1),.69,.18,'edge')
    torus('reactor_iris',(3.45,0,1.12),.49,.07,'blue')
    ellipsoid('reactor_glass',(3.45,0,1.1),(.4,.4,.18),'amber')
    for y in [-.49,.49]:
        cylinder('stern_thruster',(4.25,y,-.1),(4.95,y,-.1),.39,'edge')
        torus('stern_engine_lip',(4.99,y,-.1),.38,.075,'steel',axis='X')
        cylinder('stern_flame',(4.96,y,-.1),(5.05,y,-.1),.26,'blue')
    return owner


def build_judgement():
    """鋳造炉の油圧プレスを巨大化し、上下の可動圧盤とピストンを制作する。"""
    owner = root('boss_judgement')
    group(owner,'body')
    for x in [1.8,2.8]:
        box('forged_upright',(x,0,-.35),(.55,5.6,.95),'steel',.1)
        box('upright_face',(x,0,.25),(.37,5.65,.18),'hazard')
        for y in [-2.3,-1.5,-.75,0,.75,1.5,2.3]:
            bolts('frame_bolt',[(x,y,.39)],.11)
    for sign in [-1,1]:
        box('crosshead',(.35,sign*2.55,-.12),(5.8,.65,1.1),'hazard',.1)
        box('crosshead_insert',(-.05,sign*2.55,.5),(4.8,.29,.12),'dark')
        for x in [-2.0,-.7,.6,1.7]:
            torus('hoist_boss',(x,sign*2.55,.67),.16,.065,'edge')
        for x in [-1.7,.65]:
            cylinder('hydraulic_cylinder',(x,sign*2.45,.05),(x,sign*1.7,.05),.28,'steel')
            cylinder('polished_piston',(x,sign*1.9,.05),(x,sign*.88,.05),.135,'ceramic')
            torus('piston_gland',(x,sign*1.75,.05),.23,.06,'brass',axis='Y')
        tendon('braided_hydraulic_hose',[(2.5,sign*2.25,.6),(1.2,sign*3.2,.45),(-1.7,sign*3.12,.3),(-2.2,sign*2.35,.2)],[.12,.12,.12,.12],'dark',8)
    group(owner,'reactor')
    box('hot_furnace',(2.3,0,.44),(1.1,1.15,.55),'dark',.12)
    for i in range(5):
        box('furnace_slot',(2.3,-.4+i*.2,.76),(.75,.08,.07),'orange',.02)
    for sign,suffix in [(1,'shell_top'),(-1,'shell_bottom')]:
        group(owner,suffix,(1.7,sign*1.4,0))
        prism('moving_press_jaw',[(-2.8,sign*.73),(-2.45,sign*1.65),(1.7,sign*1.65),(2.0,sign*.7),(.4,sign*.64)],.28,1.15,'steel',.09)
        prism('jaw_armour',[(-2.66,sign*1.03),(-2.36,sign*1.49),(1.5,sign*1.49),(1.7,sign*.88),(-1.9,sign*.83)],.94,.2,'hazard')
        for i in range(8):
            x=-2.35+i*.45
            prism('diagonal_safety_stripe',[(x,sign*.89),(x+.2,sign*.89),(x+.44,sign*1.45),(x+.24,sign*1.45)],1.07,.025,'dark',.005)
        for i in range(7):
            x=-2.55+i*.64
            prism('press_tooth',[(x,sign*.73),(x+.4,sign*.73),(x+.28,sign*.43),(x+.12,sign*.43)],.32,1.0,'edge',.04)
        bolts('jaw_studs',[(x,sign*1.27,1.1) for x in [-2.21,-.99,.32,1.3]],.09)
    for sign,suffix in [(1,'cannon_top'),(-1,'cannon_bottom')]:
        group(owner,suffix,(2.9,sign*2.3,.75))
        cylinder('vent_gun',(2.9,sign*2.3,.7),(1.3,sign*2.3,.7),.16,'steel')
        torus('vent_gun_muzzle',(1.27,sign*2.3,.7),.17,.06,'brass',axis='X')
    return owner


def build_ouroboros():
    """長い口吻、骨の稜線、角、露出する頸椎を持つ骨竜頭部を制作する。"""
    owner = root('boss_ouroboros')
    group(owner,'body')
    loft('neck_sinew',[(.4,0,-.4,1.15,.7),(1.5,0,-.35,1.4,.8),(2.6,0,-.4,1.15,.75),(3.2,0,-.4,.55,.5)],'vein',20,.08)
    for i in range(5):
        x=1.2+i*.44
        torus('exposed_cervical_vertebra',(x,0,-.4),.8-i*.06,.17,'bone',axis='X',scale=(1,1,1.4))
        prism('neural_spine',[(x-.18,1.0),(x+.05,2.0-i*.08),(x+.28,1.1)],-.25,.3,'bone')
    for sign in [-1,1]:
        tendon('antler_base',[(.2,sign*1.1,-.3),(1.1,sign*2.0,-.2),(2.7,sign*2.7,-.35),(2.1,sign*3.22,-.15)],[.32,.25,.13,.009],'bone')
        tendon('antler_fork',[(1.2,sign*2.05,-.2),(1.3,sign*2.85,.1),(.6,sign*3.08,.3)],[.19,.11,.005],'bone')
        tendon('jaw_tendon',[(2.5,sign*.6,.2),(1.4,sign*1.5,.7),(-.4,sign*1.05,.4)],[.2,.22,.08],'tendon')
    for sign,suffix in [(1,'jaw_top'),(-1,'jaw_bottom')]:
        group(owner,suffix,(1.2,sign*.58,-.05))
        loft('elongated_reptilian_jaw',[(-3.25,sign*.70,-.07,.13,.25),(-2.75,sign*.81,-.07,.29,.43),(-1.7,sign*.97,-.08,.43,.62),(-.2,sign*1.12,-.12,.55,.8),(1.3,sign*.65,-.16,.7,.82)],'bone',20,.075)
        prism('cheek_armature',[(-2.87,sign*.95),(-1.1,sign*1.47),(.48,sign*1.66),(1.45,sign*.85),(.86,sign*.55),(-.7,sign*.68)],.62,.24,'ivory',.045)
        tendon('jaw_suture',[(-3.0,sign*.76,.36),(-1.65,sign*1.1,.64),(-.15,sign*1.41,.8),(1.1,sign*.75,.74)],[.035,.045,.045,.025],'dark',6)
        for i in range(9):
            x=-2.9+i*.42
            y=sign*(.63+.09*math.sin(i*.4))
            tendon('uneven_needle_tooth',[(x,y,.37),(x-.08,y-sign*.29,.52),(x-.17,y-sign*(.43+(.16 if i%3==0 else 0)),.52)],[.075,.055,.003],'bone',8)
        if sign>0:
            for i in range(3):
                iris('reptile_ocellus',(-.72+i*.56,1.2-i*.12,.88),.17 if i else .25,'green')
            prism('brow_blade',[(-1.22,1.31),(-.45,1.75),(.94,1.43),(1.38,.92),(.1,1.2)],.9,.18,'bone')
        else:
            for i in range(3):
                tendon('mandible_spur',[(.05+i*.54,-1.1,.1),(.7+i*.5,-1.85,.2),(.55+i*.5,-2.18,.4)],[.16,.09,.003],'bone')
    return owner


def build_mnemosyne():
    """半透明感のある神経傘、脳溝、垂れる触手を備えた機械脳を制作する。"""
    owner = root('boss_mnemosyne')
    group(owner,'body')
    vertices, faces = [], []
    levels,sides=11,48
    for j in range(levels):
        t=j/(levels-1)
        angle=.12+t*1.50
        rad=math.sin(angle)*2.55
        y=.45+math.cos(angle)*2.65
        for i in range(sides):
            phi=TAU*i/sides
            ripple=1+.045*math.cos(phi*8)*t*t
            vertices.append((.35+math.cos(phi)*rad*ripple,y-.08*math.cos(phi*8)*t,math.sin(phi)*rad*.46*ripple-.13))
    for j in range(levels-1):
        for i in range(sides):
            faces.append((j*sides+i,j*sides+(i+1)%sides,(j+1)*sides+(i+1)%sides,(j+1)*sides+i))
    mesh('eight_lobed_neural_bell',vertices,faces,'vein')
    for i in range(8):
        phi=TAU*i/8
        points=[]
        for j in range(6):
            a=.16+j*.29
            rr=math.sin(a)*2.6
            points.append((.35+math.cos(phi)*rr,.45+math.cos(a)*2.65,math.sin(phi)*rr*.47-.13))
        tendon('bell_radial_nervure',points,[.07,.09,.09,.08,.065,.04],'ivory',8)
        tendon('photonic_meridian',[(p[0]+.04,p[1],p[2]+.06) for p in points],[.024]*6,'cyan',6)
    # 脳溝は球の集合ではなく、左右半球に沿う連続した皺として造形する。
    for hemisphere in [-1,1]:
        for row in range(5):
            points=[]
            for j in range(11):
                a=j/10*math.pi
                x=.35+hemisphere*(.2+row*.29)+.12*math.sin(a*4+row)
                y=.85+math.sin(a)*1.75
                z=.77+math.cos(a)*.13-row*.04
                points.append((x,y,z))
            tendon('cortical_gyri',points,[.085]*len(points),'tendon',8,3)
    torus('basal_neural_ring',(.35,.43,-.13),2.1,.12,'edge',axis='Y',scale=(1,.52,1))
    for i in range(9):
        x=-1.85+i*.52
        iris('neural_rim_node',(x,.5,.64),.10+(i%3)*.035,'violet')
    for i in range(7):
        suffix='tentacle_'+str(i)
        x=-1.5+i*.6
        z=-.4+.25*math.sin(i)
        group(owner,suffix,(x,.48,z))
        length=2.5+.7*math.sin(i*.9)
        curl=.6*math.sin(i*1.9)
        points=[(x,.48,z),(x+.15,-.3,z+.1),(x+curl,-1.15,z+.3),(x+curl+.3,-length+.35,z+.4),(x+curl+.85,-length,z+.25)]
        tendon('trailing_tentacle',points,[.16,.13,.1,.055,.005],'vein',10)
        tendon('axonal_light',[(p[0]-.045,p[1],p[2]+.08) for p in points],[.027,.027,.025,.018,.003],'cyan',6)
        for k in range(3):
            y=-.65-k*.62
            xx=x+curl*(k+1)/4
            torus('segmented_neural_clamp',(xx,y,z+.25),.13-k*.024,.035,'ivory',axis='Y')
        if i%2==0:
            iris('hanging_neural_node',(x+curl+.3,-length+.4,z+.47),.15,'violet')
    return owner


def build_arbiter():
    """非対称の戦術兵器に、独立回転環とコイル砲・片翼を組み合わせる。"""
    owner = root('boss_arbiter')
    group(owner,'body')
    prism('asymmetric_command_hull',[(-.6,-.6),(.7,-1.25),(2.7,-.9),(3.1,.2),(2.2,1.65),(.5,1.2),(-.5,.55)],-.05,.9,'dark',.08)
    prism('dorsal_swept_wing',[(.4,.8),(1.6,2.75),(2.65,3.0),(3.2,2.58),(2.2,.66)],.25,.42,'armor',.06)
    prism('ventral_pincer',[(.75,-.6),(1.45,-2.7),(2.35,-3.0),(2.78,-2.55),(2.1,-.4)],.32,.44,'brass',.06)
    prism('side_armour',[(.4,-.6),(2.5,-.5),(2.8,.15),(1.9,.8),(.5,.6)],.58,.34,'armor')
    for i in range(6):
        x=1.05+i*.25
        box('oblique_vent',(x,.25,.82),(.1,.65,.08),'edge',.015)
    for x,y in [(1.8,2.55),(2.21,-2.6),(2.4,.1)]:
        iris('targeting_optic',(x,y,.68),.16,'amber')
    tendon('power_umbilical',[(2.6,-.6,.4),(3.1,.1,.65),(2.3,1.1,.75),(.15,1.1,.7)],[.12,.13,.13,.08],'dark',10)
    group(owner,'rotor',(.1,0,-.65))
    torus('rotor_outer_race',(.1,0,-.65),2.43,.14,'brass')
    torus('rotor_inner_race',(.1,0,-.65),2.17,.08,'edge')
    for i in range(7):
        angle=TAU*i/7
        def rp(r,a):
            return (.1+math.cos(a)*r,math.sin(a)*r)
        outline=[rp(2.2,angle-.10),rp(2.5,angle-.18),rp(3.2,angle+.03),rp(3.35,angle+.2),rp(2.55,angle+.14)]
        prism('scythe_rotor_blade',outline,-.65,.24,'armor')
        x,y=rp(2.52,angle)
        iris('rotor_phase_coil',(x,y,-.46),.12,'cyan')
    group(owner,'main_cannon',(.2,1.0,.32))
    cylinder('coilgun_core',(-3.5,1.0,.38),(.9,1.0,.38),.25,'dark')
    for i in range(9):
        x=-3.15+i*.43
        torus('accelerator_winding',(x,1.0,.38),.38,.078,'brass',axis='X')
        if i%2:
            torus('induction_gap',(x-.14,1.0,.38),.31,.035,'cyan',axis='X')
    for y in [.58,1.42]:
        box('gun_spar',(-1.17,y,.4),(4.1,.1,.13),'edge',.02)
    torus('coil_muzzle',(-3.62,1.0,.38),.31,.1,'steel',axis='X')
    cylinder('coil_bore',(-3.66,1.0,.38),(-3.63,1.0,.38),.23,'dark')
    group(owner,'cannon_bottom',(2,-1.7,.4))
    box('missile_pod',(2,-1.7,.44),(.9,1.1,.7),'steel',.09)
    for y in [-2.03,-1.7,-1.37]:
        cylinder('missile_tube',(1.4,y,.65),(2.4,y,.65),.11,'dark')
        torus('missile_tube_lip',(1.36,y,.65),.12,.035,'edge',axis='X')
    return owner


def build_origin():
    """心室・冠状血管・大動脈と、花弁状の骨格冠を持つ最終ボスを制作する。"""
    owner = root('boss_origin')
    group(owner,'heart')
    sections=[(-2.35,.7,.08,.12),(-1.9,.5,.55,.43),(-1.25,.2,1.02,.71),(-.4,.15,1.36,.92),(.5,.37,1.36,.89),(1.22,.55,1.05,.69),(1.65,.6,.57,.42)]
    vertices,faces=[],[]
    sides=32
    for j,(y,x,rx,rz) in enumerate(sections):
        for i in range(sides):
            a=TAU*i/sides
            asym=1+.08*math.cos(a*3+j*.5)
            vertices.append((x+math.cos(a)*rx*asym,y,math.sin(a)*rz*asym-.12))
    for j in range(len(sections)-1):
        for i in range(sides):
            faces.append((j*sides+i,(j+1)*sides+i,(j+1)*sides+(i+1)%sides,j*sides+(i+1)%sides))
    faces += [tuple(reversed(range(sides))),tuple((len(sections)-1)*sides+i for i in range(sides))]
    mesh('anatomical_ventricular_mass',vertices,faces,'flesh')
    ellipsoid('right_atrium',(1.05,1.1,-.05),(.78,.8,.68),'wet')
    ellipsoid('left_atrium',(-.12,1.2,-.21),(.6,.67,.58),'tendon')
    tendon('interventricular_sulcus',[(-.6,1.05,.58),(-.25,.35,.85),(.13,-.5,.87),(.72,-1.6,.55)],[.12,.10,.075,.03],'wet')
    tendon('coronary_artery',[(.48,1.28,.62),(.1,.83,.87),(-.54,.5,.88),(-.74,-.4,.66),(.04,-1.38,.64)],[.13,.12,.11,.08,.025],'tendon')
    tendon('coronary_vein',[(1.27,1.23,.44),(1.32,.6,.77),(.9,-.22,.95),(.72,-1.15,.72),(.7,-2.0,.26)],[.11,.105,.08,.06,.015],'vein')
    for i in range(5):
        yy=.6-i*.43
        tendon('coronary_branch',[(.0,yy,.87),(-.45,yy-.25,.85),(-.75,yy-.35,.62)],[.06,.04,.005],'tendon',8)
        tendon('myocardial_fibre',[(1.2,yy,.63),(.75,yy-.27,.91),(.23,yy-.38,.88)],[.045,.06,.025],'wet',8)
    tendon('ascending_aortic_arch',[(.5,1.26,.0),(.7,2.26,-.03),(.1,2.62,-.02),(-.75,2.35,-.1),(-.97,1.55,-.15)],[.39,.36,.33,.31,.27],'tendon',16)
    tendon('pulmonary_artery',[(.9,1.12,.27),(1.8,1.8,.34),(2.3,1.68,.23)],[.26,.24,.2],'vein',12)
    for i in range(3):
        x=-.24+i*.42
        tendon('aortic_branch',[(x,2.5,-.06),(x+.04,3.05,-.11),(x+.24,3.3,-.07)],[.16,.13,.10],'tendon')
        torus('arterial_stump',(x+.24,3.3,-.07),.105,.035,'wet',axis='Y')
        cylinder('arterial_lumen',(x+.24,3.305,-.07),(x+.24,3.33,-.07),.075,'dark')
    for sign,suffix in [(1,'shell_top'),(-1,'shell_bottom')]:
        group(owner,suffix,(1.25,sign*.45,-.3))
        for i in range(4):
            # 左側の弱点の射線を空け、外側へ開く骨の花弁を扇状に配置する。
            theta=(.25+i*.52)*sign
            bx,by=1.4,sign*.25
            ex=.7+math.cos(theta)*2.5
            ey=math.sin(theta)*3.15
            centerx=(bx+ex)*.5+.2
            centery=(by+ey)*.5
            tendon('petal_bone_finger',[(bx,by,-.5),(centerx,centery,-.4),(ex,ey,.0),(ex-.55,ey+sign*.25,.28)],[.3,.28,.16,.008],'bone')
            pts=[(bx,by),(centerx-.35,centery-sign*.18),(ex-.58,ey+sign*.18),(ex+.06,ey),(centerx+.42,centery+sign*.08)]
            prism('nacre_petalled_armour',pts,-.15,.26,'ivory',.05)
            tendon('petal_vein',[(bx,by,.05),(centerx,centery,.1),(ex-.25,ey,.17)],[.045,.055,.015],'violet',6)
        tendon('protective_crescent',[(-.35,sign*1.25,-.4),(-1.4,sign*2.4,-.2),(-2.65,sign*2.2,.05),(-2.9,sign*1.18,.25)],[.35,.33,.19,.008],'bone',12)
        prism('crescent_facing',[(-.35,sign*1.4),(-1.42,sign*2.65),(-2.5,sign*2.38),(-2.8,sign*1.3),(-2.22,sign*1.9),(-1.35,sign*2.08)],.12,.3,'ivory')
    group(owner,'crown')
    for i in range(5):
        x=.5+i*.54
        tendon('regal_dorsal_spine',[(x,.6,-.7),(x+.6,1.55,-.9),(x+.55,2.8-i*.15,-.55)],[.24,.2,.003],'bone')
    torus('sacramental_halo',(.45,.12,-.9),2.4,.085,'brass')
    torus('halo_inner_filament',(.45,.12,-.9),2.25,.027,'violet')
    return owner


for builder in [build_doorkeeper,build_gorgon,build_colossus,build_judgement,build_ouroboros,build_mnemosyne,build_arbiter,build_origin]:
    obj=builder()
    print('BOSS_BUILT',obj.name,flush=True)


def breakable_parts(owner):
    """ゲームの破壊判定位置へ、独立して消せる機構・器官の関節を追加する。"""
    key=owner.name.removeprefix('boss_')
    if key=='mnemosyne':
        for i,y in enumerate([-2.8,0,2.8]):
            group(owner,'part_node'+str(i),(-2.8,y,.64))
            tendon('neural_tether',[(-1.55,.5,-.4),(-2.27,.35+y*.45,-.15),(-2.8,y,.4)],[.07,.07,.04],'vein',8)
            torus('synaptic_frame',(-2.8,y,.65),.32,.065,'ivory')
            torus('synaptic_halo',(-2.8,y,.68),.24,.028,'cyan')
            ellipsoid('exposed_synapse',(-2.8,y,.65),(.19,.19,.11),'violet',20)
            for angle in [0,math.pi/2,math.pi,math.pi*1.5]:
                xx=-2.8+math.cos(angle)*.32
                yy=y+math.sin(angle)*.32
                cylinder('node_fastener',(xx,yy,.6),(xx,yy,.76),.045,'brass',sides=6)
        return
    positions={'doorkeeper':(-.8,2.6),'gorgon':(-.7,2.3),'colossus':(-1.8,2.25),
               'judgement':(-.6,3),'ouroboros':(-.2,2.25),'arbiter':(-.3,2.7),'origin':(-.2,2.5)}
    x,ay=positions[key]
    for sign,suffix in [(1,'part_top'),(-1,'part_bottom')]:
        y=sign*ay
        group(owner,suffix,(x,y,.72))
        if key=='gorgon':
            loft('brood_sac',[(x-.4,y,-.02,.12,.14),(x-.19,y,0,.34,.39),(x+.17,y,0,.35,.38),(x+.42,y,0,.12,.12)],'tendon',16,.09)
            for i in range(3):
                xx=x-.25+i*.24
                tendon('brood_cage',[(xx,y-.27,.09),(xx-.05,y,.49),(xx,y+.27,.09)],[.06,.075,.055],'bone',8)
            iris('brood_vent',(x,y,.48),.19,'green')
        elif key=='ouroboros':
            tendon('bone_crest_pedicle',[(x+.6,y-sign*1.0,-.15),(x+.15,y-sign*.45,.1),(x,y,.24)],[.18,.14,.12],'bone',10)
            prism('breakable_bone_crest',[(x-.42,y-sign*.2),(x-.11,y+sign*.48),(x+.26,y+sign*.3),(x+.42,y-sign*.19)],.24,.5,'bone')
            tendon('exposed_neural_marrow',[(x-.3,y,.45),(x,y+sign*.23,.53),(x+.3,y,.43)],[.06,.095,.06],'green',8)
            torus('osseous_socket',(x,y,.57),.22,.07,'bone')
        elif key=='origin':
            tendon('valvular_artery',[(x+.25,y-sign*.42,-.05),(x,y,.3),(x-.25,y+sign*.26,.35)],[.22,.25,.14],'tendon',12)
            torus('calcified_arterial_valve',(x,y,.6),.3,.1,'bone')
            iris('arterial_valve_lumen',(x,y,.65),.21,'eye')
            for off in [-.23,.23]:
                tendon('valvular_chordae',[(x+off,y-sign*.3,.3),(x+off,y,.55),(x+off*.5,y+sign*.27,.3)],[.04,.055,.02],'wet',6)
        else:
            mat='hazard' if key=='judgement' else 'armor'
            lift=.45 if key=='doorkeeper' else 0
            if key=='colossus':
                for offset in [-.23,.23]:
                    tendon('coolant_supply_return',[(x+.38+offset,sign*1.35,.18),(x+offset,sign*1.8,.35),(x+offset,y,.45)],[.09,.09,.09],'brass',8)
                prism('radiator_mounting_pier',[(x-.22,sign*1.3),(x+.22,sign*1.3),(x+.22,y),(x-.22,y)],.1,.3,'dark')
            box('breakable_mechanism',(x,y,.36+lift),(.76,.52,.55),mat,.075)
            for i in range(3):
                yy=y-.16+i*.16
                if key=='colossus':
                    cylinder('coolant_tube',(x-.34,yy,.74),(x+.34,yy,.74),.07,'brass')
                else:
                    box('servo_louvre',(x,yy,.68+lift),(.56,.075,.08),'dark',.015)
            torus('regulator_rim',(x,y,.81+lift),.23,.065,'edge')
            ellipsoid('regulator_light',(x,y,.81+lift),(.16,.16,.08),'cyan' if key=='arbiter' else 'amber',20)
            bolts('mechanism_fasteners',[(x-.28,y-.18,.7+lift),(x+.28,y+.18,.7+lift)],.05)


for obj in ROOTS:
    breakable_parts(obj)


def consolidate(owner):
    """可動部単位でメッシュを統合し、同材質の重複スロットを削除する。"""
    for part in PARTS[owner.name]:
        items=[o for o in part.children if o.type=='MESH']
        if not items:
            continue
        bpy.ops.object.select_all(action='DESELECT')
        for item in items:
            item.select_set(True)
        bpy.context.view_layer.objects.active=items[0]
        bpy.ops.object.convert(target='MESH')
        bpy.ops.object.join()
        joined=bpy.context.object
        joined.name=part.name+'__surface'
        unique=[]
        remap={}
        for i,mat in enumerate(joined.data.materials):
            if mat not in unique:
                unique.append(mat)
            remap[i]=unique.index(mat)
        indices=[remap[p.material_index] for p in joined.data.polygons]
        joined.data.materials.clear()
        for mat in unique:
            joined.data.materials.append(mat)
        for p,index in zip(joined.data.polygons,indices):
            p.material_index=index
        # 小さい金属面にも稜線の陰影を残す。
        mod=joined.modifiers.new('Surface weighted normals','WEIGHTED_NORMAL')
        mod.keep_sharp=True
        bpy.ops.object.modifier_apply(modifier=mod.name)


for obj in ROOTS:
    consolidate(obj)
bpy.context.view_layer.update()
report=[]
for owner in ROOTS:
    corners=[]
    primitives=0
    triangles=0
    for child in owner.children_recursive:
        if child.type=='MESH':
            corners.extend([child.matrix_world@Vector(c) for c in child.bound_box])
            primitives+=len(child.data.materials)
            child.data.calc_loop_triangles()
            triangles+=len(child.data.loop_triangles)
    low=[min(c[i] for c in corners) for i in range(3)]
    high=[max(c[i] for c in corners) for i in range(3)]
    dimensions=[round(high[0]-low[0],3),round(high[2]-low[2],3),round(high[1]-low[1],3)]
    report.append({'name':owner.name,'dimensionsXYZ':dimensions,'primitives':primitives,'triangles':triangles,'parts':[p.name for p in PARTS[owner.name]]})
print('BOSS_REPORT '+json.dumps(report),flush=True)

bpy.ops.object.select_all(action='DESELECT')
for owner in ROOTS:
    owner.select_set(True)
    for obj in owner.children_recursive:
        obj.select_set(True)
bpy.context.view_layer.objects.active=ROOTS[0]
output=os.path.join(ROOT,'public','models','bosses.glb')
bpy.ops.export_scene.gltf(filepath=output,export_format='GLB',use_selection=True,export_apply=True,export_yup=True,export_cameras=False,export_lights=False,export_animations=False)
print('BOSS_GLB_BYTES',os.path.getsize(output),flush=True)

# 書き出し後に編集用の一覧配置へ移動する。GLBの8ルートはすべて原点にある。
labels=['01 DOORKEEPER','02 GORGON','03 COLOSSUS','04 JUDGEMENT','05 OUROBOROS','06 MNEMOSYNE','07 ARBITER','08 ORIGIN']
for i,owner in enumerate(ROOTS):
    owner.location=(i%4*12.3,0,-(i//4)*9.2)
    font=bpy.data.curves.new('Gallery label','FONT')
    font.body=labels[i]
    font.align_x='CENTER'
    font.size=.32
    label=bpy.data.objects.new('Guide '+labels[i],font)
    bpy.context.collection.objects.link(label)
    label.location=(owner.location.x,-.1,owner.location.z-3.8)
    label.rotation_euler=(math.pi/2,0,0)
    font.materials.append(M['cyan'])

bpy.context.scene.world.color=(.045,.045,.045)
for area in bpy.context.screen.areas if bpy.context.screen else []:
    if area.type=='VIEW_3D':
        area.spaces.active.region_3d.view_distance=65
        area.spaces.active.region_3d.view_location=(18.45,0,-4.6)
        area.spaces.active.region_3d.view_rotation=Vector((0,1,0)).to_track_quat('-Z','Y')
        area.spaces.active.region_3d.view_perspective='ORTHO'
        area.spaces.active.shading.type='MATERIAL'
        area.spaces.active.clip_end=300
bpy.ops.object.select_all(action='DESELECT')
ROOTS[0].select_set(True)
bpy.context.view_layer.objects.active=ROOTS[0]
bpy.context.preferences.filepaths.save_version=0
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'art','requiem-bosses.blend'))


def preview(path):
    """任意の一時PNGへ、正面の一覧をEeveeで描画して目視確認可能にする。"""
    scene=bpy.context.scene
    scene.render.engine='CYCLES'
    scene.cycles.samples=24
    scene.cycles.use_denoising=True
    scene.render.resolution_x=3200
    scene.render.resolution_y=1500
    scene.render.resolution_percentage=100
    scene.world.use_nodes=True
    scene.world.node_tree.nodes['Background'].inputs[0].default_value=(.016,.025,.045,1)
    scene.world.node_tree.nodes['Background'].inputs[1].default_value=.4
    camera_data=bpy.data.cameras.new('Gallery review camera')
    camera=bpy.data.objects.new('Gallery review camera',camera_data)
    bpy.context.collection.objects.link(camera)
    camera.location=(18.45,-55,-4.7)
    direction=Vector((18.45,0,-4.7))-camera.location
    camera.rotation_euler=direction.to_track_quat('-Z','Y').to_euler()
    camera_data.type='ORTHO'
    camera_data.ortho_scale=49.3
    scene.camera=camera
    for i,(position,power,size,color) in enumerate([
        ((3,-12,10),5000,12,(.65,.81,1)),((30,-10,3),5200,15,(1,.65,.4)),
        ((18,6,-1),6500,12,(.28,.58,1)),((18,-14,-12),3800,12,(.5,.6,1)),
    ]):
        data=bpy.data.lights.new('Review softbox '+str(i),'AREA')
        data.energy=power
        data.shape='DISK'
        data.size=size
        data.color=color
        light=bpy.data.objects.new(data.name,data)
        bpy.context.collection.objects.link(light)
        light.location=position
        light.rotation_euler=(Vector((18,0,-4))-light.location).to_track_quat('-Z','Y').to_euler()
    scene.view_settings.view_transform='AgX'
    scene.render.filepath=path
    bpy.ops.render.render(write_still=True)


if os.environ.get('BOSS_PREVIEW'):
    preview(os.environ['BOSS_PREVIEW'])
