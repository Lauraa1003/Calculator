
// Add numbers 

function addNumbers(a, b) {
    return a + b;
};


// subract numbers
      
function subtractNumbers(a, b) {
    return a - b;
}


 // multiply numbers

 function multiplyNumbers(a, b) {
     return a * b;
 }

 // divide numbers 

 function divideNumbers(a, b){
     return a / b;
 }


// operate function

 function operate(operator, num1, num2) {
     if(operator === '+'){
         addNumbers(num1, num2);
     } else if (operator === '-'){
         subtractNumbers(num1, num2);
     } else if (operator === '*'){
         multiplyNumbers(num1, num2);
     } else if (operator === '/'){
         divideNumbers(num1, num2);
     }
 }

 // display numbers

       document.querySelectorAll('.num').forEach((num) => {
        num.addEventListener('click', (e) => {
            document.getElementById('display').innerHTML += num.innerHTML
        })
 })
     
     
   
 




 /*
 function operate(){
     let operators = document.getElementById('add').value;

     switch(operators){
         case '+':
             addNumbers();
             break;

     }
 }
 */