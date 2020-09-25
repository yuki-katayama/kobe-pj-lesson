let name = process.argv[2];
let alpha = process.argv[3];
let index = []
name = name.toLowerCase().split(',');
for(let i = 0; i < name.length; i++){
    if(name[i].indexOf(alpha) !== -1){
        index.push(name[i])
    }
}
console.log(index.sort())