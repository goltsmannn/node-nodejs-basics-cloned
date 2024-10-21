import {open} from 'node:fs/promises';
import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const p = path.join(__dirname, 'files/fileToRead.txt');
    // const file = fs.readFileSync(p,'utf-8');
    // console.log(file);

    const stream = fs.createReadStream(p, {encoding: 'utf8'})
        .on('data', (chunk) => {process.stdout.write(chunk.toString())})
};

await read();