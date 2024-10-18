import fs from 'fs';

const read = async () => {
    const path = 'files/fileToRead.txt';
    if(!fs.existsSync(path)) {
        throw new Error('FS operation failed');
    }
    const file = fs.readFileSync(path, 'utf8');
    console.log(file);
};

await read();