const scores = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60]
const num = scores.length
const locate = [0,0,0,0,0,0,0,0,0,0,0]
for(let i = 0; i < num; i++){
    locate[Math.floor(scores[i] / 10)]++
}
const locate_max = Math.max(...locate)
for(let i = locate_max; i > 0; i--){
    const list = []
    for(let j = 0; j <= 10; j++){
        if(locate[j] >= i){
            list.push(" * ")
        }else{
            list.push("   ")
        }
    }
    console.log(list.join(""))
}
console.log("----------------------------------")
console.log("  0 10 20 30 40 50 60 70 80 90 100")