"""BlenderでR-9系機体と敵の独自3D素材を制作し、GLBと編集用blendを保存する。"""
import bpy
import math
import random
import os
import numpy as np
from mathutils import Vector

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'public', 'models')
os.makedirs(OUT, exist_ok=True)
os.makedirs(os.path.join(ROOT, 'art'), exist_ok=True)
random.seed(1987)
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)


def material(name, color, metallic=0.0, roughness=0.4, emission=None, power=0):
    """PBR材質を作成する。colorはRGB、emissionは発光色。"""
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    p = mat.node_tree.nodes.get('Principled BSDF')
    p.inputs['Base Color'].default_value = (*color, 1)
    p.inputs['Metallic'].default_value = metallic
    p.inputs['Roughness'].default_value = roughness
    if emission:
        p.inputs['Emission Color'].default_value = (*emission, 1)
        p.inputs['Emission Strength'].default_value = power
    return mat


M = {
    'ceramic': material('Pearl ceramic | aerospace', (.68,.76,.79), .72,.28),
    'edge': material('Titanium edges', (.15,.23,.29), .85,.28),
    'dark': material('Carbon underframe', (.018,.029,.038), .65,.4),
    'red': material('Vermilion markings', (.46,.028,.018), .55,.3),
    'glass': material('Sapphire cockpit', (.015,.16,.22), .78,.12, (.0,.13,.18), .6),
    'blue': material('Ion emitters', (.015,.28,.42), .5,.24, (.02,.65,1), 5),
    'orange': material('Force plasma', (.7,.12,.015), .3,.18, (1,.19,.02), 7),
    'steel': material('Alien gunmetal', (.085,.11,.13), .86,.32),
    'bone': material('Calcified exoskeleton', (.27,.26,.19), .52,.45),
    'flesh': material('Alien muscular tissue', (.15,.027,.043), .18,.45),
    'tendon': material('Tendon', (.29,.065,.06), .32,.37),
    'green': material('Toxic bioluminescence', (.03,.29,.12), .2,.3, (.08,1,.38), 3.8),
    'eye': material('Hostile optic', (.5,.045,.012), .4,.2, (1,.12,.012), 4),
    'violet': material('Neural energy', (.19,.025,.3), .6,.24, (.6,.03,1), 4),
}
current = None


def surface_texture(mat, kind, seed):
    """独自の筋繊維・骨・金属の色とタンジェント法線を生成し、GLBへ埋め込む。"""
    size=768
    randomizer=np.random.default_rng(seed)
    yy,xx=np.mgrid[0:size,0:size].astype(np.float32)/size
    field=np.zeros((size,size),dtype=np.float32)
    for k,amp in [(3,.55),(7,.28),(17,.12),(49,.05)]:
        grid=randomizer.random((k+1,k+1)).astype(np.float32)
        grid[-1,:]=grid[0,:];grid[:,-1]=grid[:,0]
        u=xx*k;v=yy*k;xi=u.astype(int);yi=v.astype(int)
        a=u-xi;b=v-yi;a=a*a*(3-2*a);b=b*b*(3-2*b)
        layer=grid[yi,xi]*(1-a)*(1-b)+grid[yi,xi+1]*a*(1-b)+grid[yi+1,xi]*(1-a)*b+grid[yi+1,xi+1]*a*b
        field+=layer*amp
    grain=randomizer.random((size,size)).astype(np.float32)
    if kind=='flesh':
        fibres=np.sin(xx*math.tau*38+field*11+np.sin(yy*math.tau*3)*2)
        vessels=(np.abs(np.sin(xx*math.tau*6+field*10)*np.sin(yy*math.tau*4-field*8))<.065).astype(np.float32)
        height=field*.4+fibres*.035+grain*.035-vessels*.06
        base=np.stack([.12+field*.20,.028+field*.047,.04+field*.06],axis=-1)
        base*=1-vessels[:,:,None]*.48
        base+=fibres[:,:,None]*.008
    elif kind=='bone':
        strata=np.sin(yy*math.tau*72+field*17)
        cracks=(np.abs(np.sin(xx*math.tau*3+field*15))<.065).astype(np.float32)
        height=field*.25+strata*.015+grain*.018-cracks*.05
        shade=.32+field*.35-cracks*.15
        base=np.stack([shade*1.02,shade*.96,shade*.78],axis=-1)
    else:
        scratches=(grain>.995).astype(np.float32)
        height=grain*.006+np.sin(xx*math.tau*310)*.004+field*.015
        shade=.64+field*.3-scratches*.3
        base=np.stack([shade*.94,shade*.99,shade],axis=-1)
    rgba=np.ones((size,size,4),dtype=np.float32);rgba[:,:,:3]=np.clip(base,0,1)
    image=bpy.data.images.new('REQUIEM_'+kind+'_albedo',width=size,height=size)
    image.pixels.foreach_set(rgba.ravel());image.pack()
    dx=(np.roll(height,-1,axis=1)-np.roll(height,1,axis=1))*12
    dy=(np.roll(height,-1,axis=0)-np.roll(height,1,axis=0))*12
    normal=np.stack([-dx,-dy,np.ones_like(dx)],axis=-1);normal/=np.linalg.norm(normal,axis=-1)[:,:,None]
    rgba[:,:,:3]=normal*.5+.5
    normal_image=bpy.data.images.new('REQUIEM_'+kind+'_normal',width=size,height=size)
    normal_image.colorspace_settings.name='Non-Color';normal_image.pixels.foreach_set(rgba.ravel());normal_image.pack()
    tree=mat.node_tree;p=tree.nodes.get('Principled BSDF')
    tex=tree.nodes.new('ShaderNodeTexImage');tex.image=image
    tree.links.new(tex.outputs['Color'],p.inputs['Base Color'])
    nmtex=tree.nodes.new('ShaderNodeTexImage');nmtex.image=normal_image
    nm=tree.nodes.new('ShaderNodeNormalMap');nm.inputs['Strength'].default_value=.65 if kind=='metal' else 1
    tree.links.new(nmtex.outputs['Color'],nm.inputs['Color']);tree.links.new(nm.outputs['Normal'],p.inputs['Normal'])
    p.inputs['Roughness'].default_value=.32 if kind=='metal' else .53


surface_texture(M['flesh'],'flesh',871)
surface_texture(M['tendon'],'flesh',872)
surface_texture(M['bone'],'bone',873)
surface_texture(M['ceramic'],'metal',874)


def finish(obj, name, mat):
    """メッシュへ材質と親を割り当て、スムーズ法線を設定する。"""
    obj.name = name
    obj.data.materials.append(M[mat])
    obj.parent = current
    for p in obj.data.polygons:
        p.use_smooth = True
    return obj


def loc(p):
    """ゲームのXYZ座標をBlenderのZ-up座標へ変換する。"""
    return (p[0], -p[2], p[1])


def sphere(name, p, s, mat, seg=24):
    """指定位置と寸法の楕円体を作る。"""
    bpy.ops.mesh.primitive_uv_sphere_add(segments=seg, ring_count=12, location=loc(p))
    obj = bpy.context.object
    obj.scale = (s[0],s[2],s[1])
    return finish(obj,name,mat)


def box(name, p, s, mat, bevel=.035):
    """角を面取りした装甲パネルを作る。"""
    bpy.ops.mesh.primitive_cube_add(size=1,location=loc(p))
    obj = bpy.context.object
    obj.scale=(s[0],s[2],s[1])
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if bevel:
        mod=obj.modifiers.new('Machined edges','BEVEL')
        mod.width=bevel
        mod.segments=2
        bpy.ops.object.modifier_apply(modifier=mod.name)
        obj.modifiers.new('Weighted highlights','WEIGHTED_NORMAL')
    return finish(obj,name,mat)


def tube(name, a, b, r, mat, r2=None, vertices=16):
    """2点を結ぶ円柱または円錐を作る。"""
    va,vb=Vector(loc(a)),Vector(loc(b))
    d=vb-va
    bpy.ops.mesh.primitive_cone_add(vertices=vertices, radius1=r,radius2=r if r2 is None else r2,depth=d.length,location=(va+vb)/2)
    obj=bpy.context.object
    obj.rotation_euler=d.to_track_quat('Z','Y').to_euler()
    return finish(obj,name,mat)


def ring(name,p,r,thickness,mat,axis='X'):
    """エンジン、関節、装甲の環を作る。"""
    bpy.ops.mesh.primitive_torus_add(major_radius=r,minor_radius=thickness,major_segments=32,minor_segments=8,location=loc(p))
    obj=bpy.context.object
    if axis=='X': obj.rotation_euler[1]=math.pi/2
    elif axis=='Z': obj.rotation_euler[0]=math.pi/2
    return finish(obj,name,mat)


def prism(name, pts, depth, mat):
    """XY平面の輪郭を奥行き方向に押し出す。"""
    verts=[loc((x,y,z)) for z in [-depth/2,depth/2] for x,y in pts]
    n=len(pts)
    faces=[tuple(range(n-1,-1,-1)),tuple(range(n,n*2))]
    faces += [(i,(i+1)%n,(i+1)%n+n,i+n) for i in range(n)]
    mesh=bpy.data.meshes.new(name)
    mesh.from_pydata(verts,[],faces)
    mesh.update()
    uv=mesh.uv_layers.new(name='UVMap')
    for poly in mesh.polygons:
        for loop_index in poly.loop_indices:
            co=mesh.vertices[mesh.loops[loop_index].vertex_index].co
            uv.data[loop_index].uv=(co.x*.27+.5,co.z*.27+.5)
    obj=bpy.data.objects.new(name,mesh)
    bpy.context.collection.objects.link(obj)
    mod=obj.modifiers.new('Edge fillets','BEVEL');mod.width=.025;mod.segments=2
    return finish(obj,name,mat)


def begin(name):
    """名前付きアセットルートを作る。"""
    global current
    current=bpy.data.objects.new(name,None)
    bpy.context.collection.objects.link(current)
    return current


def consolidate(root):
    """描画負荷低減のため子メッシュを結合する。"""
    meshes=[o for o in root.children if o.type=='MESH']
    bpy.ops.object.select_all(action='DESELECT')
    for o in meshes:
        o.select_set(True)
        bpy.context.view_layer.objects.active=o
        bpy.ops.object.convert(target='MESH')
    bpy.context.view_layer.objects.active=meshes[0]
    bpy.ops.object.join()
    obj=bpy.context.object
    obj.name=root.name+'_mesh'
    obj.parent=root
    bpy.ops.object.transform_apply(location=False,rotation=False,scale=True)
    # 同一材質のスロットを統合してGLBのプリミティブ数を削減する。
    unique=[];mapping={}
    for i,slot in enumerate(obj.material_slots):
        mat=slot.material
        if mat not in unique: unique.append(mat)
        mapping[i]=unique.index(mat)
    indices=[mapping[p.material_index] for p in obj.data.polygons]
    obj.data.materials.clear()
    for mat in unique: obj.data.materials.append(mat)
    for p,idx in zip(obj.data.polygons,indices): p.material_index=idx


assets=[]
root=begin('r9');assets.append(root)
# 小さな青いキャノピー、白い主胴、赤い帯、後退翼と大型推進器。
sphere('pressure fuselage',(-.05,0,0),(1.55,.34,.4),'dark')
sphere('ceramic upper hull',(.1,.11,0),(1.45,.28,.39),'ceramic')
prism('armoured nose',[(.75,.02),(1.88,-.09),(1.42,-.3),(-.1,-.31),(-.6,-.12)],.62,'ceramic')
prism('nose red band',[(1.1,.01),(1.49,-.055),(1.45,-.28),(1.13,-.3)],.63,'red')
sphere('canopy seal',(.28,.34,.05),(.65,.25,.35),'edge')
sphere('blue canopy',(.31,.39,.07),(.58,.23,.31),'glass',32)
for z in [-.29,.29]:
    tube('canopy frame',(-.12,.39,z),(.64,.48,z*.75),.025,'ceramic')
for side in [-1,1]:
    wing=prism('swept wing',[(-.9,-.03),(-.3,-.13),(-1.0,-.82),(-1.65,-.7),(-1.48,-.08)],.12,'ceramic')
    wing.location.y=side*.39
    wing.rotation_euler[0]=side*.23
    stripe=prism('wing identification',[(-1.08,-.45),(-.87,-.48),(-1.02,-.7),(-1.27,-.67)],.13,'red')
    stripe.location.y=side*.39
    tube('auxiliary engine',(-1.45,-.25,side*.43),(-.5,-.25,side*.43),.18,'edge',.13)
    ring('nozzle rim',(-1.49,-.25,side*.43),.15,.035,'ceramic')
    sphere('nozzle blue',(-1.49,-.25,side*.43),(.035,.11,.11),'blue')
tube('main engine',(-1.6,.02,0),(-.76,.02,0),.33,'edge',.27,32)
for x in [-1.65,-1.53,-1.4,-1.27]: ring('engine cooling ring',(x,.02,0),.285,.035,'steel')
sphere('engine ion chamber',(-1.68,.02,0),(.04,.24,.24),'blue')
prism('dorsal fin',[(-1.44,.2),(-1.6,.86),(-1.28,.72),(-.72,.23)],.1,'ceramic')
prism('fin red insignia',[(-1.49,.61),(-1.53,.77),(-1.28,.66),(-1.18,.52)],.115,'red')
box('nose sensor',(1.63,-.13,.32),(.22,.055,.025),'blue',.01)
for x in [-.8,-.48,-.16,.85]:
    box('hull panel seam',(x,-.27,.325),(.015,.09,.022),'edge',0)
for x in [-.67,-.4,-.13]:
    box('vent slot',(x,.14,.38),(.12,.055,.035),'dark',.006)
    box('vent emitter',(x,.14,.4),(.06,.02,.008),'blue',0)
for x in [-1.02,-.6,.8,1.08]:
    for y in [-.17,.19]: sphere('flush fastener',(x,y,.354),(.022,.022,.013),'edge',12)
tube('underslung cannon',(.28,-.33,0),(1.24,-.33,0),.07,'edge',.055)
consolidate(root)

root=begin('scout');assets.append(root)
sphere('beetle carapace',(0,0,0),(.72,.35,.4),'steel')
sphere('dorsal shell',(.05,.16,0),(.54,.3,.37),'bone')
sphere('monoeye',(-.52,.03,.11),(.19,.18,.25),'eye')
for side in [-1,1]:
    prism('blade wing',[(.3,.2),(.85,.7),(.2,.57),(-.4,.17)],.12,'steel').location.y=side*.29
    tube('blade tendon',(.3,.15,side*.28),(.67,.63,side*.28),.045,'tendon')
for i in range(5):
    ring('segmented thorax',(.1+i*.1,0,0),.28-i*.03,.035,'edge')
sphere('rear exhaust',(.7,0,0),(.08,.12,.12),'green')
consolidate(root)

root=begin('interceptor');assets.append(root)
sphere('elongated hull',(0,0,0),(.85,.19,.25),'steel')
prism('predator brow',[(-.85,.12),(-.4,.34),(.65,.21),(.3,-.11),(-.7,-.2)],.48,'bone')
sphere('optic',(-.72,.04,.24),(.15,.11,.08),'eye')
for side in [-1,1]:
    tube('fork mandible',(-.38,-.13,side*.2),(-.95,-.32,side*.26),.1,'bone',.022)
    tube('thruster',(.7,0,side*.19),(.96,0,side*.19),.1,'edge',.14)
    sphere('exhaust',(.98,0,side*.19),(.04,.095,.095),'violet')
consolidate(root)

root=begin('carrier');assets.append(root)
sphere('supply pod',(0,0,0),(.62,.55,.42),'ceramic')
for y in [-.35,.35]: box('red strip',(0,y,.32),(1.0,.11,.08),'red')
ring('rotating cage',(0,0,0),.59,.07,'edge')
sphere('cargo beacon',(-.53,0,.1),(.1,.2,.25),'blue')
for y in [-.28,.28]: tube('small thruster',(.48,y,0),(.8,y,0),.12,'steel',.08)
consolidate(root)

root=begin('turret');assets.append(root)
box('turret foot',(0,-.29,0),(1.05,.3,.9),'steel')
sphere('turret dome',(0,0,0),(.42,.36,.4),'bone')
tube('gun barrel',(-.25,.13,0),(-.85,.28,0),.105,'steel',.075)
ring('barrel clamp',(-.66,.23,0),.11,.03,'edge')
sphere('targeting optic',(-.2,.23,.31),(.09,.1,.06),'eye')
for x in [-.3,0,.3]: box('heat vent',(x,-.15,.44),(.13,.1,.04),'orange')
consolidate(root)

root=begin('organism');assets.append(root)
sphere('biological body',(0,0,0),(.6,.48,.4),'flesh')
for i in range(7):
    a=i*math.tau/7
    x,y=math.cos(a),math.sin(a)
    tube('bone claw',(.24*x,.24*y,0),(.78*x,.78*y,.12),.12,'bone',.018)
    sphere('neural node',(.43*x,.33*y,.28),(.09,.09,.1),'green',16)
sphere('primary eye',(-.24,.02,.34),(.25,.24,.12),'eye')
for i in range(5):
    sphere('muscle lobe',(random.uniform(-.45,.45),random.uniform(-.32,.32),-.2),(.2,.15,.21),'tendon',16)
consolidate(root)

root=begin('sentinel');assets.append(root)
sphere('ancient hull',(.2,0,0),(1.35,1.8,.8),'steel',32)
for side in [-1,1]:
    for i in range(6):
        y=side*(.4+i*.23)
        box('overlapping armour',(.16,y,.61),(1.8-i*.14,.22,.32),'bone')
        tube('hydraulic piston',(.7,side*.4,.4),(.2,side*1.7,.42),.07,'edge')
    tube('horn',(.0,side*1.55,.15),(-.6,side*2.28,.12),.24,'bone',.012)
    tube('articulated cannon',(-.3,side*1.0,.0),(-1.4,side*1.2,.12),.19,'steel',.12)
    ring('muzzle',(-1.4,side*1.2,.12),.13,.04,'orange')
ring('core outer plate',(-.72,0,.25),.87,.2,'edge')
ring('core inner plate',(-.86,0,.25),.64,.075,'bone')
for i in range(8):
    a=i*math.tau/8
    sphere('core rivet',(-.86,math.sin(a)*.72,.25+math.cos(a)*.72),(.08,.075,.075),'orange',16)
consolidate(root)

root=begin('leviathan');assets.append(root)
sphere('living skull',(.55,0,0),(1.8,1.45,1.05),'flesh',32)
sphere('chitin forehead',(.1,.8,.05),(1.5,.9,1),'bone',32)
for side in [-1,1]:
    for i in range(7):
        x=.2+i*.3
        ring('spinal rib',(x,0,0),1.1-i*.07,.085,'bone')
    for i in range(4):
        x=-.9+i*.38
        tube('teeth',(x,side*.78,.57),(x-.12,side*.33,.6),.12,'bone',.012)
    tube('tusk',(-.6,side*.8,.4),(-1.7,side*1.4,.5),.22,'bone',.015)
sphere('eye socket',(-.18,.66,.82),(.42,.33,.23),'dark')
sphere('carnivorous eye',(-.3,.67,.96),(.27,.25,.12),'eye')
for i in range(12):
    x,y=random.uniform(-.4,1.7),random.uniform(-1.1,1.1)
    sphere('bioluminescent cyst',(x,y,.88),(.08,.08,.08),'green',12)
# 眉骨、顎、重なった外骨格、筋と棘で生体兵器の輪郭を作る。
prism('broken maxilla',[(-1.58,.28),(-1.13,1.05),(-.2,1.3),(.9,.8),(.2,.28),(-.8,-.05)],.9,'bone')
prism('lower mandible',[(-1.55,-.65),(-.75,-.35),(.55,-.6),(.8,-1.13),(-.4,-1.2),(-1.35,-.94)],.8,'bone')
for side in [-1,1]:
    for i in range(7):
        x=-.05+i*.32
        y=side*(1.13-i*.055)
        sphere('overlapping chitin scale',(x,y,.5),(.35,.27,.45),'bone',16)
        tube('dorsal spear',(x,y,.2),(x+.27,side*(1.9-i*.075),.15),.13,'bone',.009)
        tube('exposed muscle',(-.9,side*.6,.48),(x,side*.94,.57),.055,'tendon',.035)
    for i in range(4):
        x=-1.28+i*.24
        tube('serrated fang',(x,side*.6,.55),(x-.1,side*.18,.55),.075,'bone',.003)
for i in range(6):
    x=.2+i*.3
    tube('front scar',(x,.05,.99),(x+.18,.5,.94),.017,'tendon',.008)
consolidate(root)

root=begin('dreadnought');assets.append(root)
prism('warship hull',[(-2.3,.1),(-1.2,.75),(1.7,.55),(2.5,.05),(1.7,-.5),(-1.1,-.6)],1.1,'steel')
for i in range(13):
    x=-1.6+i*.28
    box('hull armour',(x,.17,.57),(.25,.85,.16),'edge')
    box('energy conduit',(x,-.3,.66),(.07,.09,.06),'orange')
for y in [-.55,.55]:
    for x in [-1.3,-.4,.5,1.4]:
        sphere('gun mount',(x,y,.4),(.22,.24,.2),'bone')
        tube('side cannon',(x,y,.52),(x-.45,y,.52),.065,'steel')
box('command citadel',(.7,.95,0),(.7,.75,.6),'steel')
box('bridge windows',(.5,1.07,.31),(.4,.12,.025),'blue')
for y in [-.3,.3]:
    tube('engine exhaust',(1.8,y,0),(2.5,y,0),.22,'edge',.28)
    sphere('fusion nozzle',(2.52,y,0),(.04,.2,.2),'orange')
consolidate(root)

# すべて原点のテンプレートとして書き出す。実行時に必要なアセットを複製する。
bpy.ops.object.select_all(action='DESELECT')
for root in assets:
    root.select_set(True)
    for child in root.children_recursive: child.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'requiem.glb'),export_format='GLB',use_selection=True,export_apply=True,export_yup=True,export_cameras=False,export_lights=False)

# 編集用ファイルでは全素材を見渡せるよう配置する。
for i,root in enumerate(assets): root.location=(i%3*6,0,-(i//3)*5)
bpy.context.scene.world.color=(.07,.07,.07)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(ROOT,'art','requiem-assets.blend'))
print('REQUIEM_ASSETS_COMPLETE',len(assets),os.path.getsize(os.path.join(OUT,'requiem.glb')))
