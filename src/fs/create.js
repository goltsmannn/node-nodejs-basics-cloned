import fs from 'fs';
const create = async () => {
    const path = 'files/fresh.txt';
    const data = "I am fresh and young";
    try {
        fs.access(path, (err) => {
            if (err) {
                fs.writeFile(path, data, (err) => {
                    if (err) {
                        console.error(err);
                    }
                });
            } else {
                throw new Error('FS operation failed');
            }
        });
    }
    catch (err) {
        console.error(err);

    }
};

await create();
