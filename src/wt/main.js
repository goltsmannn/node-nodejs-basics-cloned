import {Worker, workerData} from "node:worker_threads";
import os from "os";

const performCalculations = async () => {

    const coreCount = os.cpus().length;
    for(let i = 0; i < coreCount; i++) {
        const worker = new Worker('./worker.js', {
            workerData: {
                n: i + 10,
            }
        })
            .on('message', message => {process.stdout.write(message)})
    }

};

await performCalculations();