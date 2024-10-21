import stream from "node:stream";
import fs from "fs";
import zlib from "zlib";
import {fileURLToPath} from "url";
import path from "path";

const compress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files/fileToCompress.txt');
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream('files/archive.gz').on('data', (chunk) => {process.stdout.write(chunk.toString())});

    const transformStream = new stream.Transform({
        transform(data, encoding, callback) {
            zlib.brotliCompress(data.toString().trim(), (err, compressedData) =>{
                this.push(compressedData);
                callback();
            });
        }
    })
    readStream.pipe(transformStream).pipe(writeStream);
};

await compress();