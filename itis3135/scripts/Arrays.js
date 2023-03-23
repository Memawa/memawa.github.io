let people= [];
let salary = [];

function addSalary(){
    //Gets name and salary from input
    let fullName = document.getElementById("Fullname").value;
    let salaryInfo = parseInt(document.getElementById("salary").value);
    
    //Adds salrary and name into the arrays
    salary.push(salaryInfo);
    people.push(fullName);
    console.log(people);
   
    //Sends the information to Html
    let print = "The employees name is " + fullName + " and the salary is " + salary + ". ";
    document.getElementById("print").innerHTML= print;
}

function displayResults(){
    let highest;
    let average;
    let result;
    // Gets the highest salary in the array
    for(let i = 0; i < salary.length(); i++){
        
        if(salary[i] > highest ){
            highest = salary[i];
        }
    }
    // Finds the average of the salary
    for(let i= 0; i < salary.length(); i++){
        average += salary[i];
        average = salary.length / average; 
    }
    //Prints the 
    result = "The average is salary " + average + " and the highest salary is " + highest + ". ";
    document.getElementById("results").innerHTML = result;
}

function displaySalary() {
  
    // Get the table element by its ID
    const table = document.getElementById("results_table");
  
    // Create a table header row
    const headerRow = table.insertRow();
    const nameHeader = headerRow.insertCell();
    const salaryHeader = headerRow.insertCell();
    nameHeader.innerHTML = "<b>Name</b>";
    salaryHeader.innerHTML = "<b>Salary</b>";
  
    // Create a row for each name and salary pair
    for (let i = 0; i < names.length; i++) {
      const row = table.insertRow();
      const nameCell = row.insertCell();
      const salaryCell = row.insertCell();
      nameCell.innerHTML = people[i];
      salaryCell.innerHTML = "$" + salary[i];
    }
  }