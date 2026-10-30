import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {TRACKS} from '../src/audio.js';
import {STAGES} from '../src/core.js';

test('Blender GLBに全9モデルがあり、外部ファイルを参照しない',async()=>{
  const buffer=await readFile(new URL('../public/models/requiem.glb',import.meta.url));
  assert.equal(buffer.toString('ascii',0,4),'glTF');assert.equal(buffer.readUInt32LE(4),2);assert.equal(buffer.readUInt32LE(8),buffer.length);
  const jsonLength=buffer.readUInt32LE(12),gltf=JSON.parse(buffer.toString('utf8',20,20+jsonLength));
  const names=new Set(gltf.nodes.map(n=>n.name));
  for(const name of ['r9','scout','interceptor','carrier','turret','organism','sentinel','leviathan','dreadnought'])assert.ok(names.has(name),name);
  for(const b of gltf.buffers)assert.equal(b.uri,undefined);
  assert.ok(gltf.materials.length>=10);
  assert.ok(gltf.images.length>=6);for(const image of gltf.images){assert.equal(image.uri,undefined);assert.ok(Number.isInteger(image.bufferView));}
  assert.ok(gltf.materials.filter(m=>m.normalTexture).length>=3);
  assert.ok((await stat(new URL('../art/requiem-assets.blend',import.meta.url))).size>100000);
});
test('全11曲に有効な固有旋律があり、全ステージから参照できる',()=>{
  assert.equal(TRACKS.length,11);assert.equal(new Set(TRACKS.map(t=>JSON.stringify(t.lead))).size,11);
  for(const track of TRACKS){assert.ok(track.bpm>=80&&track.bpm<=180);assert.equal(track.lead.length,16);assert.equal(track.chords.length,4);for(const n of [...track.lead,...track.chords])assert.ok(Number.isFinite(n));}
  for(const stage of STAGES)assert.ok(TRACKS[stage.track]);
});
