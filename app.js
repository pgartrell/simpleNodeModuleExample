//Connecting to the rectangle.js
const rect = require("./rectangle");

function solveRect(l, w) {
  console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

  //This function is defined (not executed) in line but will not be used until enters the code inside the rectangle module
  //This says if there was an error than we console log the error defined in rectangle.js
  rect(l, w, (err, rectangle) => {
    if (err) {
      console.log("ERROR:", err.message);
    } else {
        //The name rectangle below is coming from the function above where we passed in rectangle
        //The paramater list can be empty since we passed paramaters at the top with the solveRect function
      console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
      console.log(`Perimeter of rectangle: ${rect.perimeter()}`);
    }
  });
  console.log('This statement is logged after the call to rect()')
}

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);
