const num = []
let sum = Number(0)
for(let i = 2; i < process.argv.length; i++){
    let number = Number(process.argv[i].split('').reverse().join(''));
    sum += number
}
console.log(sum)