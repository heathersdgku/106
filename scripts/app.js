function sayHello(){
    console.log("hello there");
}

function sayGoodbye(){
    console.log("goodbye");
}
function init(){
    console.log("hello world");
    sayHello();
    sayGoodbye();
}

window.onload = init;