console.log("Before Prepare Food");

function prepareFood() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=>{
            if(data !== 2){
                console.log("Prepare Food");
                resolve("Food is Ready");
            }
            else{
                reject("Value not acceprable");
            }
        },10);
    });

    return promise;
}
function prepareFrenchToast(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Prepare French Toast");
            resolve("French Toast is Ready");
        },20);
    });

    return promise;
}
function prepareCoffee(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Prepare Coffee");
            resolve("Coffee is Ready");
        },30);
    });
    return promise;
}
let promise = prepareFood(2);
//console.log("Promise =",promise);
promise.then(function(value){
    console.log("Food is ready callback =",value);
    return prepareFrenchToast();
})
.then(function (frenchToastValue){
    console.log("French Toast is Ready callback= ", frenchToastValue);                                                                                     
    return prepareCoffee();
})
.then (function (coffeeValue){
    console.log("Coffee is Ready callback= ",CoffeeValue);
})
.catch(function (error){
    console.log("Error = ",error);
});
console.log("After Prepare food dinner is ready");
















