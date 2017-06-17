window.cashRegister = (function (){

const getDisplay = document.getElementById("display");
let balance = 0;
let input1 = "";
let input2 = "";
let lastOperator = null;
let turtle = null;
let getTotal = window.calculator.getTotal;

//grab elements
const key1 = document.getElementById("key1");
const key2 = document.getElementById("key2");
const key3 = document.getElementById("key3");
const key4 = document.getElementById("key4");
const key5 = document.getElementById("key5");
const key6 = document.getElementById("key6");
const key7 = document.getElementById("key7");
const key8 = document.getElementById("key8");
const key9 = document.getElementById("key9");
const key0 = document.getElementById("key0");
const key00 = document.getElementById("key00");
const keyClear = document.getElementById("keyClear");
const keyAdd = document.getElementById("keyAdd");
const keySubtract = document.getElementById("keySubtract");
const keyMultiply = document.getElementById("keyMultiply");
const keyDivide = document.getElementById("keyDivide");
const keyDecimal = document.getElementById("keyDecimal");
const keyBalance = document.getElementById("keyBalance");
const keyDeposit = document.getElementById("keyDeposit");
const keyWithdraw = document.getElementById("keyWithdraw");
const keyEqual = document.getElementById("keyEqual");


//add event listeners (manipulate elements)
key1.addEventListener("click", function(){
  input1 += "1";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key2.addEventListener("click", function(){
  input1 += "2";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key3.addEventListener("click", function(){
  input1 += "3";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key4.addEventListener("click", function(){
  input1 += "4";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key5.addEventListener("click", function(){
  input1 += "5";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key6.addEventListener("click", function(){
  input1 += "6";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key7.addEventListener("click", function(){
  input1 += "7";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key8.addEventListener("click", function(){
  input1 += "8";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key9.addEventListener("click", function(){
  input1 += "9";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key0.addEventListener("click", function(){
  input1 += "0";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

key00.addEventListener("click", function(){
  input1 += "00";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

keyDecimal.addEventListener("click", function(){
  input1 += ".";
  console.log("getTotal()", getTotal());
  // if(getTotal() === 0){
  //   window.calculator.load(toNum(input1));}
  display.innerHTML = input1;
});

//CLEAR///////////////////////////////

keyClear.addEventListener("click", function(){
  input1 = "";
  window.calculator.load(toNum(0));
  display.innerHTML = "0.00";
});

//////////////////////////////////

//ADD
keyAdd.addEventListener("click", function(){
  lastOperator = "add";

  //runs ADD portion of arithmetic
  arithmetic(lastOperator);

  //reset input and display
  input1 = "";
  display.innerHTML = "";
});

//SUBTRACT
keySubtract.addEventListener("click", function(){
  lastOperator = "subtract";

  //runs SUBTRACT portion of arithmetic
  arithmetic(lastOperator);

  //reset input and display
  input1 = "";
  display.innerHTML = "";
});

//MULTIPLY
keyMultiply.addEventListener("click", function(){
  lastOperator = "multiply";

  //runs MULTIPLY portion of arithmetic
  arithmetic(lastOperator);

  //reset input and display
  input1 = "";
  display.innerHTML = "";
});

//DIVIDE
keyDivide.addEventListener("click", function(){
  lastOperator = "divide";

  //runs DIVIDE portion of arithmetic
  arithmetic(lastOperator);

  //reset input and display
  input1 = "";
  display.innerHTML = "";
});

///////////////////////////////////

keyBalance.addEventListener("click", updateDisplay);
keyDeposit.addEventListener("click", updateDisplay);

keyWithdraw.addEventListener("click", function(){
  // input2 = input1;
  // input1 = "";
  // display.innerHTML = "";

});

//EQUAL
keyEqual.addEventListener("click", function(){
  arithmetic(lastOperator);

//display computation
display.innerHTML = input1;

//reset
lastOperator = null;
input1 = "0";


});

//FUNCTIONS//////////////////////////
function updateDisplay(){
  getDisplay;

  console.log("HI");
}

//converts string input to a number
function toNum(input){
  return parseFloat(input);
}

// [=] does math
function arithmetic(operator){

  if(operator==="add"){
    console.log(lastOperator);

    // run input through ADD in calculator
    turtle = window.calculator.add(toNum(input1));

    //update input
    input1 = turtle;

    // load input into calculator
    window.calculator.load(input1);

    // update display
    display.innerHTML = turtle;
  }
  if(operator==="subtract"){
    console.log(lastOperator);
    console.log("turtle1:", turtle);
    if(turtle !== null){
      // run input through SUBTRACT in calculator
      turtle = window.calculator.subtract(toNum(input1));
      console.log(turtle);
    }else{

      //update input
      turtle = input1;
      console.log("turtle2:", turtle);

      console.log(typeof input1);
      console.log(toNum(input1));
      // load input into calculator
      window.calculator.load(toNum(input1));
    }
    console.log("turtle3:", turtle);
    // update display
    display.innerHTML = turtle;
  }
  if(operator==="multiply"){
    console.log(lastOperator);

    // run input through MULTIPLY in calculator
    turtle = window.calculator.multiply(toNum(input1));

    //update input
    input1 = turtle;

    // load input into calculator
    window.calculator.load(input1);

    // update display
    display.innerHTML = turtle;
  }
  if(operator==="divide"){
    console.log(lastOperator);

    // run input through DIVIDE in calculator
    turtle = window.calculator.divide(toNum(input1));

    //update input
    input1 = turtle;

    // load input into calculator
    window.calculator.load(input1);

    // update display
    display.innerHTML = turtle;
  }

}












return {



  };

})();



//   let memory = 0;
//   let total = 0;


//   /**
//    * sets the `total` to the number passed in
//    * @param  { Number } x
//    * @return { Number }    current total
//    */
//   function load(x){
//     validation(x);
//     total = x;
//     return total;
//   }



//   /**
//    * Return the value of `total`
//    * @return { Number }
//    */
//   function getTotal(){
//     return total;
//   }


//   /**
//    * Sums the value passed in with `total`
//    * @param { Number } x
//    */
//    function add(x){
//     validation(x);
//     total += x;
//    }


//   /**
//    * Subtracts the value passed in from `total`
//    * @param  { Number } x
//    */
//   function subtract(x){
//     validation(x);
//     total -= x;
//   }


//   /**
//    * Multiplies the value by `total`
//    * @param  { Number } x
//    */
//   function multiply(x){
//     validation(x);
//     total = total*x;
//   }



//   *
//    * Divides the value passing in by `total`
//    * @param  { Number } x


//   function divide(x){
//     validation(x);
//     total = total/x;
//   }

//   /**
//    * Return the value stored at `memory`
//    * @return { Number }
//    */
//   function recallMemory(){
//     return memory;
//   }

//   /**
//    * Stores the value of `total` to `memory`
//    */

//    function saveMemory(){
//     memory = total;
//    }


//   /**
//    * Clear the value stored at `memory`
//    */
//    function clearMemory(){
//     memory = 0;
//    }

//   /**
//    * Validation
//    */
//    function validation(x){
//     if(typeof x !== "number"){
//       throw new Error("Error!!!");
//     }
//    }

//    return {

//     load: load,
//     getTotal: getTotal,
//     add: add,
//     subtract: subtract,
//     multiply: multiply,
//     divide: divide,
//     recallMemory: recallMemory,
//     saveMemory: saveMemory,
//     clearMemory: clearMemory
//    };
// }