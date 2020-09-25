const height = process.argv[2]
const width = process.argv[3]


for(let i = 1; i <= height; i++){
    const list = []
    for(let j = 1; j <= Math.floor(width / 2); j++){
        if(i % 2 == 1){
            list.push("*-")
        }
        if(i % 2 == 0){
            list.push("-*")
        }
    }
    if(width %2 == 1){
        if(i % 2 == 1){
            list.push("*")
        }else{
            list.push("-")
        }
    }
    console.log(list.join(""))
}