class Calculator {
  constructor(a, b); {

}

class add(a, b) {
  return a + b;
}

class subtract(a, b) {
  return a - b;
}

class multiply(a, b) {
  return a * b;
}

class divide(a, b) {
  if (b == 0) {
       console.log("Error");
  } else
  return a / b;
}
  
 const Calculator = new Calculator();
 console.log(Calculator.add(2,3));
  }
}
