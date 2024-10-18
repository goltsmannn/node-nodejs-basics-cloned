import fs from 'fs'
import { fileURLToPath } from "url";
import path from "path";

const rename = async () => {

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const wrongName = path.join(__dirname, 'files/wrongFilename.txt');
    const properName = path.join(__dirname, 'files/properFilename.md');
    console.log(wrongName);
    if(fs.existsSync(properName) || !fs.existsSync(wrongName)) {
        throw new Error("FS operation failed");
    }
    fs.renameSync(wrongName, properName);

};

await rename();