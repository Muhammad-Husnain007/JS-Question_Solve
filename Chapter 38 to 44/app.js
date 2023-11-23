// function maindate(){
// document.write(dateTime);
// }
// var dateTime = new Date();
// maindate(dateTime);

// 2

// function mainName(){

//     document.write(fullName);
// }
// var firstName = prompt('Enter first name');
// var lastName = prompt('Enter last name');
// var fullName = firstName.concat(' '+lastName);
// // var fullName = firstName+' '+lastName
// mainName(fullName)

// 3

// function mainAdd(){
// var add = num1+num2;
// alert(add)
// }
// var num1 = +prompt('Enter Number for add');
// var num2 = +prompt('Enter Number for add');
// var add = num1+num2;
// mainAdd(add)

// 4
// function calculator(num1,num2,operator){
// var result = 0;
//     if(operator == '+'){
//         result = num1+num2;
//     }
//        else if(operator == '-'){
//             result = num1-num2;
            
//         }
    
//        else if(operator == '*'){
//             result = num1*num2;
//        } 
//           else if(operator == '/'){
//                 result = num1/num2;
                
                
//             } 
//             else{
//                 alert('Enter correct operator')
//             }
//             return result;
//         }
// var num1 = +prompt('Enter first number');
// var num2 = +prompt('Enter last number');
// var operator = prompt('Enter operator');
//  var result = calculator(num1,num2,operator);
// document.write(result);

// 5

// function sumOfSquares(num,square) {
//   var i;
// var sum=0;
//   for (i=0;i<=sum;i++){
     
// }
//    document.write(`The square of ${num} is ${square}` ) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// var square = num*num
// sumOfSquares(num,square);

// 6. Write a function that computes factorial of a number

// function factorial(){

// var facnum = 5;
// }


// factorial(facnum)

// 7 incom

// function counting(startCount,endCount){
//   // var startCount = 1;
//   // var endCount = 100;
//   for(var i = startCount; i = endCount; i++ ){
//     // document.write(i)

//   }
//   // document.write(i);


// }
// var startCount = 1;
// var endCount = 100;
// document.write(i);
// counting(i);

// 8 incom

// function triangle(base,perpendicular,cal,cal2,res){
//   function forhopoten(hypo){
// document.write(hypo)



// }
// document.write(res)
// }
// var base = +prompt('Enter a base  of triangle');
// var perpendicular = +prompt('Enter a perpendicular  of triangle');
// var cal = base * base;
// var cal2 = perpendicular * perpendicular;
// var res = cal + cal2;
// triangle(base,perpendicular,cal,cal2,res)
// var hypo = res * res;
// forhopoten(hypo)


// function rectangle(){
//   var areaWidth = 20 
//   var areaHeight = 30
//   var cal = areaWidth * areaHeight;
  
//   // document.write(cal)


// }
// var areaWidth = 20 
// var areaHeight = 30
// var cal = areaWidth * areaHeight;

// rectangle()

// 12

// function stringMain(strng){
// var a =strng.split(' ')

// }
// stringMain(`Web Development Tutorial`)


function longer(champ, contender) {
  return (contender.length > champ.length) ? contender : champ;
}

function longestWord(str) {
  var words = str.split(' ');
  return words.reduce(longer);
}

document.write(longestWord(`Web Development Tutorial`));





// 14 complete

// function calcCircumference(radius){
// var rad = 2*3.141*radius;
// document.write(`The circumference is ${rad} <br> `)
// }
// calcCircumference(10);

// function calcArea(arear){
// var area = 3.141*(arear*arear);
// document.write(`The area is ${area}`)
// }
// calcArea(15);


























