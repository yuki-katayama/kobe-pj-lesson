let fs = require('fs');
let list = require('./users.json');

function rankA_five_more(i){
    let money = 3000 * i + 120000
    return money
}

function rankA_five_under(i){
    let money = 3000 * i + 100000
    return money; 
}

function rankB(i){
    let money = 4000*i+140000
    return money;
}

function rankC(i){
    let money = 5000*i+160000
    return money;
}

for(let i = 0; i < list.users.length; i++){
    let salary = 0
    if(list.users[i]['rank'] === 'A' & list.users[i]["years"] >= 5){
        salary = rankA_five_more(list.users[i]["years"])
        list.users[i]['salary'] = salary

    }else if(list.users[i]['rank'] === 'A'){
        salary = rankA_five_under(list.users[i]["years"])
        list.users[i]['salary'] = salary
    }

    if(list.users[i]['rank'] === 'B'){
        salary = rankB(list.users[i]["years"])
        list.users[i]['salary'] = salary
    }
    if(list.users[i]['rank'] === 'C'){
        salary = rankC(list.users[i]["years"])
        list.users[i]['salary'] = salary
    }
}

list.users.sort( function(a, b){
    return a.salary > b.salary ? -1 : 1;
})

for(let i = 0 ; i < list.users.length; i++){
    console.log(list.users[i]['name'] + ":" + list.users[i]["salary"])
}
