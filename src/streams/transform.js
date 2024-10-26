import fs from 'fs'
import stream from "node:stream";
const transform = async () => {

    const transformSteam = new stream.Transform({
        transform(data, encoding, callback) {
            const reverseData = data.toString().trim().split('').reverse().join('');
            if (reverseData === ")(tixe"){
                transformSteam.emit("finish");
                console.log(transformSteam);
            }
            else{
                this.push(reverseData + '\n');
                callback();
            }
        }
    })
        .on("finish", () => process.exit());

    process.stdin.pipe(transformSteam).pipe(process.stdout);
};

await transform();