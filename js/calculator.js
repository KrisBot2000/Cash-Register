let Calculator = (function () {

    //ALL variables are private

    let x = 0;
    let total = 0;

    //All methods are private

    function add(x){
    validation(x);
    total += x;
    }

    function subtract(x){
    validation(x);
    total -= x;
    }

    function multiply(x){
    validation(x);
    total = total*x;
    }

    function divide(x){
    validation(x);
    total = total/x;
    }

    //REVEAL only what you want to be public
    return {
      add: add,
      subtract: subtract,
      multiply: multiply,
      divide: divide
    };
})();