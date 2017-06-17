window.calculator = (function () {



  let memory = 0;
  let total = 0;

  function load(x){
    validation(x);
    total = x;
    console.log("total", total);
    return total;
  }

  function getTotal(){
    return total;
  }

  function add(x){
    validation(x);
    console.log("total",total);
    console.log("x", x);
    total += x;
    return total;
  }

  function subtract(x){
    validation(x);
    total -= x;
    return total;
  }

  function multiply(x){
    validation(x);
    total = total*x;
    return total;
  }

  function divide(x){
    validation(x);
    total = total/x;
    return total;
  }


  function recallMemory(){
    return memory;
  }


  function saveMemory(){
    memory = total;
  }

  function clearMemory(){
    memory = 0;
  }

  /**
   * Validation
   */
  function validation(x){
    if(typeof x !== "number"){
      throw new Error("Error!!!");
    }
  }

  return {

  load: load,
  getTotal: getTotal,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  recallMemory: recallMemory,
  saveMemory: saveMemory,
  clearMemory: clearMemory
  };

})();