



const toggles = document.querySelector('.toggle')
const toggleIcon = document.querySelector('.toggle i')
const dropDown = document.querySelector('.dropdown')

toggles.onclick = function (){
    dropDown.classList.toggle('open')
    const isOpen = dropDown.classList.contains('open')

    toggleIcon.classList = isOpen 
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


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
