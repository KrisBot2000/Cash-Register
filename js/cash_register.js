window.cashRegister = (function (){

const getDisplay = document.getElementById("display");
let balance = 0;

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
  display.innerHTML += "1";
});

key2.addEventListener("click", function(){
  display.innerHTML += "2";
});
key3.addEventListener("click", function(){
  display.innerHTML += "3";
});
key4.addEventListener("click", function(){
  display.innerHTML += "4";
});
key5.addEventListener("click", function(){
  display.innerHTML += "5";
});
key6.addEventListener("click", function(){
  display.innerHTML += "6";
});
key7.addEventListener("click", function(){
  display.innerHTML += "7";
});
key8.addEventListener("click", function(){
  display.innerHTML += "8";
});
key9.addEventListener("click", function(){
  display.innerHTML += "9";
});
key0.addEventListener("click", function(){
  display.innerHTML += "0";
});
key00.addEventListener("click", function(){
  display.innerHTML += "00";
});
keyClear.addEventListener("click", function(){
  display.innerHTML = "";
});

//ADD
keyAdd.addEventListener("click", function(){
  toNum(getDisplay);

});





keySubtract.addEventListener("click", updateDisplay);
keyMultiply.addEventListener("click", updateDisplay);
keyDivide.addEventListener("click", updateDisplay);
keyDecimal.addEventListener("click", function(){
  display.innerHTML += ".";
});
keyBalance.addEventListener("click", updateDisplay);
keyDeposit.addEventListener("click", updateDisplay);
keyWithdraw.addEventListener("click", updateDisplay);
keyEqual.addEventListener("click", updateDisplay);

function updateDisplay(){
  getDisplay;

  console.log("HI");
}

function toNum(input){
  Number(input) = display.innterHTML;
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