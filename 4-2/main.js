for(let i = 1; i <=50 ; i++){
    if(i % 3 === 0 || String(i).split('').indexOf("3") !== -1){
        console.log("WOW")
    }else{
        console.log(i)
    }
}