const a = process.argv[2];


for(let x = 1; x <= a; x++){
    const b = [];
    for(let i = a - x; i >=0; i--){
        b.push(" ")
    }
    for(let j = 0; j <= ((x - 1) *2); j++){
        b.push("*")
    }
    console.log(b.join(""))
}
