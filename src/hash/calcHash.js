import path from "path";
import fs from "fs";
import {fileURLToPath} from "url";
import * as crypto from "node:crypto";

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt');
    const readStream = fs.createReadStream(filePath)
        .on('data', (chunk) => {data += chunk.toString().trim()})
        .on('end', ()=>{
            const response = crypto.createHash('SHA-256').update(data).digest('hex');
            process.stdout.write(response.toString());
        });
    let data = "";

};

await calculateHash();