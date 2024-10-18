import {fileURLToPath} from "url";
import fs from "fs/promises"
import path from "path";

const remove = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const deleteFilePath = path.join(__dirname, 'files/fileToRemove.txt');
    console.log(deleteFilePath)
    fs.access(deleteFilePath)
        .then( (data) => {
            fs.rm(deleteFilePath)
                .catch(err => console.log(err));
        })
        .catch((err) => {throw new Error("FS operation failed")});
};

await remove();