import readline from 'readline'


const rl = readline.createInterface(process.stdin, process.stdout);

 
rl.on('line', (line) => {
    const reversedInput = line.split('').reverse().join('')
    console.log(reversedInput);
});