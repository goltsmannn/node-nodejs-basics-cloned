import {spawn} from 'child_process';

const spawnChildProcess = async (args) => {
    const cp = spawn('node', ['files/script.js', ...args]);
    cp.stdout.on('data', data => {process.stdout.write(`Received from child process: ${data}`);});
    process.stdin.pipe(cp.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1,2,3]);
