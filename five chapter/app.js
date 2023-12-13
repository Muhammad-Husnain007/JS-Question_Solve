// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

//                         FOR ADDITION
var numberOne=3;
var numberTwo=5;
var result=numberOne+numberTwo;
document.write('Sum of '+numberOne+' and '+numberTwo+' is '+result)

                            // END


// 2. Repeat task1 for subtraction, multiplication, division & modulus.

//                         FOR SUBRACTION
var numberOne=3;
var numberTwo=5;
var result=numberOne-numberTwo;
document.write('Subract of '+numberOne+' and '+numberTwo+' is '+result)

                        
                    // FOR MULTOPLICATION

var numberOne=3;
var numberTwo=5;
var result=numberOne*numberTwo;
document.write('Product of '+numberOne+' and '+numberTwo+' is '+result)


                        // FOR DIVISION
var numberOne=3;
var numberTwo=5;
var result=numberOne/numberTwo;
document.write('division of '+numberOne+' and '+numberTwo+' is '+result)

                        // FOR Modulus   
var numberOne=3;
var  numberTwo=5;
var result= numberOne%numberTwo;
document.write('Modulus of '+numberOne+' and '+numberTwo+' is '+result)

//                             END

// 3. Do the following using JS Mathematic Expressions       
                                        
                            // a
var starExpression;
                            // b

document.write('Value after variable decelaration is '+starExpression + '<br>');
                            // c

starExpression=5;
                            // d

document.write('Initial value: '+starExpression + '<br>');
                            // e

var incrementValue=++starExpression
                            // f

document.write('Value after increment is: '+incrementValue + '<br>');
                            // g

var afterAdd=7+starExpression;
                            // h

document.write('Value after addition is: '+afterAdd+'<br>');
                            // i

var afterDecrement=--afterAdd;
                            // j

document.write('Value after decrement is: '+afterDecrement+'<br>');
                            // k

var afterDividing=afterDecrement%3;
                            // l

document.write('The remainder is:'+afterDividing);
  
                            // END

// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

var priceMovie=600;
var totalTickets=5;
var priceTotal=priceMovie*totalTickets;
document.write('Total cost to buy '+totalTickets+' tickets to a movie is '+priceTotal+'PKR');

                            // END
// 5. Write a script to display multiplication table of any number in your browser. E.g


var userNumber=4;

document.write( userNumber + ' x '+'  1 '+' = '+(userNumber*1) + '<br>'
                +userNumber + ' x '+' 2 '+' = '+(userNumber*2)   + '<br>'
                +userNumber + ' x '+' 3 '+' = '+(userNumber*3)   + '<br>'
                +userNumber + ' x '+' 4 '+' = '+(userNumber*4)   + '<br>'
                +userNumber + ' x '+' 5 '+' = '+(userNumber*5)   + '<br>'
                +userNumber + ' x '+' 6 '+' = '+(userNumber*6)   + '<br>'
                +userNumber + ' x '+' 7 '+' = '+(userNumber*7)   + '<br>'
                +userNumber + ' x '+' 8 '+' = '+(userNumber*8   )+ '<br>'
                +userNumber + ' x '+' 9 '+' = '+(userNumber*9 )  + '<br>'
                +userNumber + ' x '+' 10 '+' = '+(userNumber*10)   + '<br>'
                 );

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

//                                     convert into Farenheit
var celciusTemperature=25;
var convertFarenhite=(celciusTemperature*9/5)+32;
document.write(celciusTemperature+' \u00B0C '+ 'is '+convertFarenhite+' \u00B0F'+'<br>');

                                    //convert into Degree Centegrate

var farenheitTemperature=70;
var convertCentegrate=(farenheitTemperature-32)*5/9;
document.write(farenheitTemperature+' \u00B0F '+' is '+convertCentegrate+' \u00B0C')

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store the following in variables

document.write('<b>'+'Shopping Cart'+'</b>'+'<br>'+'<br>'+'<br>');

var itemOnePrice=650;
var itemOneQuantity=3;
var itemTwoPrice=100;
var itemTwoQuantity=7;
var shoppingCharges=100;
var costPrice=650*3+100*7+100;
document.write('price of item 1 is '+itemOnePrice+'<br>'+'Quantity of item 1 is '+itemOneQuantity+'<br>'+'Price of item 2 is '+itemTwoPrice+'<br>'+'Quantity of item 2 is '+itemTwoQuantity+'<br>'+'Shopping Charges '+shoppingCharges+'<br>'+'<br>'+'<br>'+'Total cost of your order is '+costPrice)

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in your browser

document.write('<b>'+'Marks Sheet'+'</b>'+'<br>'+'<br>')

var totalMarks=980;
var obtainedMarks=804;
var percentage=obtainedMarks/totalMarks*100;
document.write('Total marks: '+totalMarks+'<br>'+' Marks obtained '+'<br>'+obtainedMarks+percentage)


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.

document.write('<b>'+'Currency in PKR'+'</b>'+'<br>'+'<br>'+'<br>')
var usDollarPrice=104.80;
var totalDollar=10;
var saudiRiyalPrice=28;
var totalSaudiRiyals=25;
var totalPKR=104.80*10+28*25;
document.write('Total Currency in PKR:'+totalPKR)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:

var num=15;
var numAdd=num+5;
var numProduct=numAdd*10;
var numDivide=numProduct/2;
document.write("The total is: "+numDivide);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!

document.write('<b>'+'Age Calculator'+'</b>'+'<br>'+'<br>')
var birthYear = 2004;
var currentYear = 2023;
var age  = currentYear - birthYear;
document.write('Current Year: ' + currentYear + ' <br> ' + 'Birth Year: '+birthYear+'<br>'+'Your Age: '+ (age-1));

// 12. The Geometrizer: Calculate properties of a circle.

document.write('<b>'+'The Geometrizer'+'</b>'+'<br>'+'<br>'+'<br>')
var circleRadius=20;
var circleCurcumference=2*3.142*circleRadius;
var circleArea=3.142*(circleRadius**2)
document.write('Radius of circle : '+circleRadius+'<br>'+'The circumference is: '+circleCurcumference+'<br>'+'The area is: '+circleArea)

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? Wonder no more.

var favouriteSnack = 'choclate chip';
var currentAge = 15;
var maximumAge = 65;
var amountSnackPerDay = 3;
var total = (amountSnackPerDay*365)*(maximumAge-currentAge);
var forPrint ='favouriteSnack: '+ favouriteSnack+ '<br>'+'Current age: '+currentAge+'<br>'+'Estimated Maximum Age: '+maximumAge+'<br>'+'Amount of snack per day: '+amountSnackPerDay;
document.write(forPrint+'<br>'+'You will need '+total+favouriteSnack + 'to last you until the ripe old age of '+maximumAge)


