const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter no: ', (input) => {
    let n = Number(input);

    if (n < 0) {
        console.log('Invalid Input !!');
    } else {
        let fac = 1;
        for (let i = 1; i <= n; i++) {
            fac *= i;
        }
        console.log('Factorial : ' + fac);
    }
    rl.close();
});