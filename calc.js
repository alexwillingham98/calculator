let currentInput = "0";
//document.getElementById('screen').maxLength = '30';
let operator = "";
let result = 0;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function deleteNumber() {
  if (currentInput != "0" && currentInput.length != 1) {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if ((currentInput.length = 1)) currentInput = "0";
  updateDisplay();
}

function updateDisplay() {
  var inputElement = document.getElementById("screen");
  console.log(currentInput);
  for(i=1;i<20;i+3){
    
  }
  if(currentInput.length >3){
    inputElement.innerHTML = currentInput +=',';
  }else
  inputElement.innerHTML = currentInput - "0";
}

function clearDisplay() {
  currentInput = "0";
  operator = "";
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput !== "") {
    calculate();
    operator = op;
    result = parseFloat(currentInput);
    currentInput = "0";
  }
}

function appendDecimal() {
    if(currentInput.includes('.')){
    updateDisplay();
    }else if(!currentInput.includes('.'))
    currentInput += '.';
  }

function calculate() {
  if (currentInput !== "") {
    switch (operator) {
      case "+":
        result += parseFloat(currentInput);
        break;
      case "-":
        result -= parseFloat(currentInput);
        break;
      case "x":
        result *= parseFloat(currentInput);
        break;
      case "/":
        result /= parseFloat(currentInput);
        break;
      default:
        result = parseFloat(currentInput);
    }
    currentInput = result.toString();
    operator = "";
    updateDisplay();
  }
}
