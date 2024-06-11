function sayHello(){
    console.log("hello there");
}
//this something new
function init(){
    console.log("hello world");
    sayHello();
}
//this something new
window.onload = init;