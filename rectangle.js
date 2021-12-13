//When returning an entire function have to use "module" instead of the shorthand of just exports
module.exports = (x, y, callback) => {
  //Error is a global word that can be used for error checking in node.js
  //If there is an error (If number given is less than 0) we execute the callback function and give the Error checking argument
  if (x <= 0 || y <= 0) {
    callback(
      new Error(
        `Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`
      )
    ); 
  } else { // if number is more than 0, simulate a delay and pass null to the callback function, and the second argument is the formula for a rectangle
    setTimeout(() =>
      //null means there is no error
      callback(null, {
        //Use exports to export what you want to other files
        perimeter: () => 2 * (x + y),
        area: (x, y) => x * y,
      }),
      2000
    );
  }
};
