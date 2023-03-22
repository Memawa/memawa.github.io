function getName(){
     let name=  document.getElementById("name").value;
     let mood = document.getElementById("mood").value;

     let print = "Welcome to WashingtonGroup! " + name + " How are you doing? " + mood;
     document.getElementById("printhere").innerHTML = print;
}
function addNum(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let total = num1 + num2;
    document.getElementById("addhere").innerHTML = total;
}
function wassup(){
    let wassup = "Hey Wassup";
    document.getElementById("wassup").innerHTML = wassup;
}
function mathRandom(){
    let random = Math.random() * 10;
    parseInt(document.getElementById("mathrandom").innerHTML = random);
}
function favAnimal(){
    let animal = "Cat";
    document.getElementById("myAnimal").innerHTML = animal;
}
function copyText(){
    let copy = document.getElementById("copy").value;
    document.getElementById("copied").innerHTML = copy;
}