// 1. Credit card number masking:

function maskify(cardNum) {
  let cardArr = cardNum.split("");

  if (cardArr.length >= 7) {
    let first = cardArr.slice(0, 1);
    let masked = cardArr.slice(1, cardArr.length - 4).join("");
    let last = cardArr.slice(cardArr.length - 4, cardArr.length).join("");

    return `${first}${masked.replace(/[0-9]/g, "x")}${last}`
  } else {
    return cardArr.join("");    
  };  
};

// 2. Ordinal numbers:

function numberToOrdinal(num) {  
  let numArr = num
    .toString()
    .split("")
    .map(num => {
      return parseInt(num)
    });
  
  if (numArr[0] === 0) {
    return numArr.toString()  
  } else if (numArr[numArr.length - 1] === 1 && numArr[numArr.length - 2] !== 1) {     
    return `${numArr.join("")}st`
  } else if (numArr[numArr.length - 1] === 2 && numArr[numArr.length - 2] !== 1) {
    return `${numArr.join("")}nd`
  } else if (numArr[numArr.length - 1] === 3 && numArr[numArr.length - 2] !== 1) {
    return `${numArr.join("")}rd`
  } else {
    return `${numArr.join("")}th`
  }
};

// 3. Reverse polish notation calculator:

function calculate(rpn) {
  let arr = rpn.split(" ");
  let nums = [];
  
  arr.forEach(item => {
    if (!isNaN(item)) { 
      nums.push(item)
    } else {
      let operandA = nums.pop();
      let operandB = nums.pop();
      
      if (item === "+") {
        nums.push(parseInt(operandA) + parseInt(operandB))
      } else if (item === "-") {
        nums.push(parseInt(operandA) - parseInt(operandB))
      } else if (item === "*") {
        nums.push(parseInt(operandA) * parseInt(operandB))
      } else if (item === "/") {
        nums.push(parseInt(operandA) / parseInt(operandB))
      } 
    }
  }); 

  return parseInt(nums) 
};




