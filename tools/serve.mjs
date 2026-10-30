import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(process.argv.includes('--dist') ? 'dist' : '.');
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.mjs':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json', '.glb':'model/gltf-binary', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.mp3':'audio/mpeg', '.wav':'audio/wav' };
/** 指定ルート配下のみを配信するローカル確認用サーバー。 */
const server = createServer(async (req,res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    let file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) file = path.join(file,'index.html');
    res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control':'no-cache'});
    res.end(await readFile(file));
  } catch { res.writeHead(404).end('Not found'); }
});
server.listen(8137, '127.0.0.1', () => process.stdout.write('Local: http://127.0.0.1:8137\n'));
