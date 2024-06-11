function sayHello(){
    console.log("hello there");
}

function init(){
    console.log("hello world");
    sayHello();
}
//this something new
window.onload = init;