// 1. Credit card number masking:

function maskify(cardNum) {
  // Primero convertimos el cardNum a un array usando split para poder iterarlo.
  let cardArr = cardNum.split("");

  if (cardArr.length >= 7) {
    // Si la longitud de cardArr es mayor o igual a 7 creamos 3 variables usando slice.
    // La primera guarda el elemento que se encuentre en el index 0.
    let first = cardArr.slice(0, 1);

    // La segunda guarda desde el index 1 hasta el index - 4 y une esos valores usando join sin espacios entre ellos.
    let masked = cardArr.slice(1, cardArr.length - 4).join("");

    // La tercera guarda desde el index - 4 hasta el final y une esos valores usando join sin espacios entre ellos.
    let last = cardArr.slice(cardArr.length - 4, cardArr.length).join("");

    // Finalmente retornamos un solo string con las 3 variables usando interpolacion pero reemplazamos con una x todos los numeros de la segunda variable.
    return `${first}${masked.replace(/[0-9]/g, "x")}${last}`

  } else {

    // En caso de que la longitud del cardArr sea 6 o menor simplemente lo devolvemos sin cambios usando join sin espacios para que vuelva a ser un string.
    return cardArr.join("");    
  };  
};


// 2. Ordinal numbers:

function numberToOrdinal(num) {
  
  let numArr = num
    // Con toString convertimos num a un string para poder usar split.
    .toString()
    // Con split creamos un array con cada uno de los numeros.
    .split("")
    // Y con map devolvemos un arreglo nuevo con cada uno de los elementos convertidos de nuevo a numeros.
    .map(num => {
      return parseInt(num)
    });
  
  if (numArr[0] === 0) {
    // Ya que solo estamos trabajando con numeros positivos si el primero es un 0 devolvemos numArr convertido a string sin hacer nada mas.
    return numArr.toString()
    
    // En caso contrario queremos saber cual es el ultimo numero.
  } else if (numArr[numArr.length - 1] === 1 && numArr[numArr.length - 2] !== 1) {     
    // Si este es igual a 1 y si el numero anterior a este es diferente de 1 devolvemos numArr + st convertido a string,
    // la segunda verificacion es porque todos los numeros que terminen en 1 excepto 11 deben de terminar con st.
    return `${numArr.join("")}st`

  } else if (numArr[numArr.length - 1] === 2 && numArr[numArr.length - 2] !== 1) {
    // Si el ultimo numero es igual a 2 y si el numero anterior a este es diferente de 1 devolvemos numArr + nd convertido a string,
    // la segunda verificacion es porque todos los numeros que terminen en 2 excepto 12 deben de terminar con st.
    return `${numArr.join("")}nd`

  } else if (numArr[numArr.length - 1] === 3 && numArr[numArr.length - 2] !== 1) {
    // Si el ultimo numero es igual a 3 y si el numero anterior a este es diferente de 1 devolvemos numArr + rd convertido a string,
    // la segunda verificacion es porque todos los numeros que terminen en 3 excepto 13 deben de terminar con rd.
    return `${numArr.join("")}rd`

  } else {
    // Si no cumple con ninguna de las condiciones de arriba absolutamente todos deben de terminar con th,
    // asi que devolvemos numArr + th convertido a string.
    return `${numArr.join("")}th`
  }
};


// 3. Reverse polish notation calculator:

function calculate(rpn) {

  // Primero creamos un array con split para poder iterar
  let arr = rpn.split(" ");

  // creamos un array vacio en donde vamos a guardar los numeros
  let nums = [];
  
  // Con forEach recorremos cada uno de los elementos en arr
  arr.forEach(item => {
    if (!isNaN(item)) {

      // Si el item iterado es un numero lo guardamos en nums 
      nums.push(item)
    } else {

      // Como los numeros van primero ahora quedan solo los operadores, 
      // entonces declaramos los operandos usando pop el cual toma el ultimo elemento de nums cambiando su longitud
      let operandA = nums.pop();
      let operandB = nums.pop();
      
      // Y ahora le decimos que operacion hacer con los operandos dependiendo del operador y guardamos el resultado en nums,
      // si hay mas de un operando ahora va a realizar la siguiente operacion con los operandos actualizados que declaramos arriba.
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

  // Finalmente usando parseInt devolvemos el resultado para que no regrese como un array.
  return parseInt(nums) 
};