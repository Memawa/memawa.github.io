function getNumbers() {
    let number = prompt("Masterful Wolf would like your number 0-10", "number");
    if (number != null) {
      document.getElementById("demo").innerHTML =
      "Your number is " + number + "!";
    }
  }
  
  // Takes in the user entry and makes sure it is a number within the valid range

  function validateEntry(entry) {
    const parsed = parseInt(entry);
    if (isNaN(parsed) || parsed < 0 || parsed > 10) {
      return false;
    }
    return parsed;
  }
  
  // Get user input
  const userEntry = prompt("Enter the number of sides of the polygon (between 0 and 10):");
  
  // Validate the user input
  const numSides = validateEntry(userEntry);
  
  // If the user input is valid, convert it to the polygon name and display the result
  if (numSides !== false) {
    const polygonName = getShape(numSides);
    console.log(`A polygon with ${numSides} sides is a ${polygonName}.`);
  } else {
    console.log("Invalid input. Please enter a number between 0 and 10.");
  }
  
  function getShape(numSides) {
    
    switch (numSides) {
      case 3:
        result = "triangle";
        break;
      case 4:
        result = "Quadrilateral";
        break;
      case 5:
        result = "Pentagon";
        break;
      case 6:
        result = "Hexagon";
        break;
      case 7:
        result = "Heptagon";
        break;
      case 8:
        result = "Octagon";
        break;
      case 9:
        result = "Nonagon";
        break;
      case 10:
        result = "Decagon";
        break;
      default:
        result = "Polygon with more than 11 sides";
        break;
    }
    window.alert(result);
  }
  
  
 
  
  
  
  
  
  