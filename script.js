function hello(aString,callback){
    console.log(aString);
    callback();
}

function world(){
    console.log("Hello World");
}

hello('Hello1',world);
