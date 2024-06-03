function Prepare() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const operrand = document.getElementById("operrand");
  const output = document.getElementById("output");

  return [num1.textContent, operrand.textContent, num2.textContent, output];
}

function GenericBtnPress(btn) {
  const num1El = document.getElementById("num1");
  const num2El = document.getElementById("num2");
  const operrandEl = document.getElementById("operrand");
  const btnContent = btn.textContent.trim();

  switch (btnContent) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      if (operrandEl.textContent == "") {
        num1El.textContent += btnContent;
      } else {
        num2El.textContent += btnContent;
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (num1El.textContent != "") {
        operrandEl.textContent = btnContent;
      }
      break;
    case "DEL":
      if (operrandEl.textContent == "") {
        num1El.textContent = num1El.textContent.slice(0, -1);
      } else {
        num2El.textContent = num2El.textContent.slice(0, -1);
      }
      break;
    case "C":
      num1El.textContent = "";
      num2El.textContent = "";
      operrandEl.textContent = "";
      break;
    case "=":
      mainFunc(Prepare());
      break;
    default:
      break;
  }
}
