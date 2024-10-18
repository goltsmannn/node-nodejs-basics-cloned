import fs from 'fs/promises';

const copy = async () => {
    const pathFrom = 'files';
    const pathTo = 'files_copy';
    fs.access(pathFrom)
        .then((data)=>{
            fs.access(pathTo)
                .then((exists)=>{
                    console.error('FS operation failed')
                })
                .catch((err)=>{
                    fs.mkdir(pathTo, { recursive: true })
                        .then(
                            (path) => {
                                fs.cp(pathFrom, pathTo, { recursive: true });
                            }
                        )

                })
        })
        .catch((error)=>{
            console.error('FS operation failed')
        });
};

await copy();
