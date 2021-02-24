console.log("Before Prepare Food");
function prepareFood(callback) {
    setTimeout(()=>{
        console.log("Prepare Food");
        callback("Food is ready");
    }, 10);
}
function prepareFrenchToast(callback) {
    setTimeout(()=>{
        console.log("Prepare French Toast");
        callback("French Toast is ready");
    },20);
}
function prepareCoffee(callback) {
    setTimeout(()=>{
        console.log("Prepare Coffee");
        callback("Coffee is ready");
    },30);
}
function mycallback(value) {
    console.log("Food is Ready callback =",value);
    prepareFrenchToast(frenchToastcallback);
}
function frenchToastcallback(value) {
    console.log("French Toast is Ready callback =",value);
    prepareCoffee(coffeecallback);
}
function coffeecallback(value) {
    console.log("Coffee is Ready callback =",value);
}

prepareFood(mycallback);

console.log("After Prepare food dinner is ready");