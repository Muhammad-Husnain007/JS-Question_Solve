


// Q: 2

var a;
var b;
if (a > 0 && b > 0 && a > b) {
    document.write("The larger number is " + a );
  } else if (a > 0 && b > 0 && a < b) {
    document.write("The larger number is " + b);
  } else if (a === b && a > 0 && b > 0) {
    document.write("Both numbers are equal!")
  } else {
      document.write("Please add an integer!");

  }

  // program that checks if the number is positive, negative or zero
// input from the user
var number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
  console.log("The number is zero");
}

// if number is less than 0
else {
     document.log("The number is negative");
}

//Q:4
var userLater=prompt('Enter vowels later')
var vowels = ["a", "e", "i", "o", "u"];

for(var i in vowels){

    if(letter === i){
        return true;
    } else {
        return false;
    }
}