function sayHello(){
    console.log("hello there");
}

function init(){
    console.log("hello world");
    sayHello();
}

window.onload = init;