let drink = 1;

//создание Promise
function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject("Вы промохнулись");
        }, 3000)
    });
    return promise;
}

function win() {
    console.log("Вы победили");
    (drink == 1) ? byBeer() : byMoney();
}
function byBeer() {
    console.log('Вам купили писо');
}
function byMoney() {
    console.log('Вам дали денег');
}

function loose() {
    console.log("Вы проиграли");
}

shoot({})
         .then(mark =>  console.log("Вы попали в цель"))
         .then(win)
         .catch(loose)