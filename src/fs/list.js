import fs from 'fs/promises';
import {fileURLToPath} from "url";
import path from "path";

const list = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const dirName = path.join(__dirname, 'files');
    console.log(dirName);
    fs.access(dirName)
        .then( (data) => {
            fs.readdir(dirName)
                .then((files) => {
                    files.forEach((file) => {console.log(file); })
                })
        })
        .catch((err) => {
            throw new Error("FS operation failed");
        })
};

await list();