import {argv} from "node:process";

const parseArgs = () => {
    const pairs = argv.map((value, index) =>
        {
            if(index % 2 === 0 && index < argv.length - 1){
                return `${value.slice(2)} is ${argv[index+1]}'`;
            }
        }
    ).join(', ');
    console.log(pairs);
};

parseArgs();