// Write your solution in this file!
 var customerName='bob'
 const leastFavoriteCustomer='joe'

function upperCaseCustomerName(name){

        name= customerName.toUpperCase()    //string method that transforms stirng to only uppercase letters
        customerName=name;                  //takes the local name variable and sets it as the value of the global variable
        return customerName     
}

function setBestCustomer(){
    bestCustomer ="not bob"                 // no variable name makes a varible global by default and accesible anywhere
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer= 'maybe bob'               //Again no variable name makes a variable global in scope and changable from anywhere
}

changeLeastFavoriteCustomer=()=>{
    leastFavoriteCustomer='obuya'
}

//setBestCustomer()

//console.log(bestCustomer)

//upperCaseCustomerName(customerName)
//console.log(upperCaseCustomerName(customerName))
//console.log(customerName)




/*

let outerFunction=function(){
    return function(){
        console.log("Inner function")
    }
}

let innerFunction=outerFunction();

console.log(innerFunction())

*/