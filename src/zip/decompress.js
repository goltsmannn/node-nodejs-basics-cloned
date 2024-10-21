import stream from "node:stream";
import fs from "fs";
import zlib from "zlib";
import {fileURLToPath} from "url";
import path from "path";

const decompress = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files/archive.gz');
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream('files/decompressedFile.txt');

    const transformStream = new stream.Transform({
        transform(data, encoding, callback) {
            zlib.brotliDecompress(data, (err, decompressedData) =>{
                this.push(decompressedData);
                callback();
            })
        }})
    readStream.pipe(transformStream).pipe(writeStream);
};

await decompress();