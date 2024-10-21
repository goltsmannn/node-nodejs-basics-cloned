import {env} from "node:process";
const parseEnv = () => {
    // for (const varName in process.env) {
    //     if(varName.startsWith('RSS_')){
    //         process.stdout.write(`${varName} ${process.env[varName]};`); //костыльно уже просто жесть
    //     }
    // }
    const ans = Object.keys(process.env)
        .filter(key => key.startsWith("RSS_"))
        .map(key => `${key} ${process.env[key]};`)
        .join(' ')
    console.log(ans);
};

parseEnv();