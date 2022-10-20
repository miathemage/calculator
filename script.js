let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", function () {
  const previousOp = document.querySelector(".previous-operand");
  const currentOp = document.querySelector(".current-operand");
  const numbersEl = document.querySelectorAll(".number");
  const operationsEl = document.querySelectorAll(".operation");
  const equalEl = document.querySelector("#equal");
  const clearEl = document.querySelector("#clear");

  numbersEl.forEach((number) =>
    number.addEventListener("click", function (e) {
      handleNumber(e.target.textContent);
      currentOp.textContent = currentValue;
    })
  );

  operationsEl.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousOp.textContent = previousValue + " " + operator;
      currentOp.textContent = currentValue;
    })
  );

  clear.addEventListener("click", function () {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousOp.textContent = currentValue;
    currentOp.textContent = currentValue;
  });

  equalEl.addEventListener("click", function () {
    operate();
    previousOp.textContent = "";
    currentOp.textContent = previousValue;
  });
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function operate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "*") {
    previousValue *= currentValue;
  } else {
    previousValue /= currentValue;
  }

  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}
