import fs from 'fs';

const write = async () => {
    const stream = fs.createWriteStream('files/fileToWrite.txt', {encoding: 'utf8'})
        .on('finish', () => process.exit());
    process.stdin
        .on('data', (chunk) => {
            if(chunk.toString().trim()==='exit()'){
                stream.end();
            } else {
                stream.write(chunk.toString().trim());
            }
        });
};

await write();