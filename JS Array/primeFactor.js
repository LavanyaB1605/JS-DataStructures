let readline = require('readline');
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let primeFactors = [];
read.question("Enter value of N for factors : ",function(input){
	console.log("Prime Factors");
        for (var index = 2; index * index <= input; index++) {
            while (input % index == 0) {
                primeFactors.push(index);
                input = input / index;
            }
        }
    console.log(primeFactors);
    read.close();
});