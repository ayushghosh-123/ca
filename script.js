let expression = "";

function appendValue(value) {
  expression += value;
  document.getElementById("result").value = expression;
}

function clearResult() {
  expression = "";
  document.getElementById("result").value = expression;
}

function performOperation(operator) {
  expression += operator;
  document.getElementById("result").value = expression;
}

function calculateResult() {
    try {
      const result = eval(expression);
      document.getElementById("result").value = result;
      expression = result.toString();
      saveState(); // Save the state after calculating the result
    } catch (error) {
      alert("Invalid Expression");
      clearResult();
    }
  }
const resultInput = document.getElementById('result');

window.onload = () => {
    const savedState = localStorage.getItem('calculatorState');
    if (savedState) {
      resultInput.value = savedState; // Restore the saved state
    }
  };
  

  function saveState() {
    localStorage.setItem('calculatorState', resultInput.value);
  }
  
