const checkers = document.querySelectorAll(".checkers");
checkers.forEach((option) => {
  option.addEventListener("click", () => {
    optionCheck();
  });
});
const lastOption = {
  option: ""
}
function optionCheck() {
  const botaoUpper = upperCase.checked;
  const botaoLower = lowerCase.checked;
  const botaoNum = numbers.checked;
  const botaoSymb = simbolos.checked;

  //verificando quais checkboxes foram marcadas
  if (botaoNum && botaoUpper && botaoSymb && botaoLower) {
    //todos os check boxes foram marcados
    lastOption.option = "1"
    const opc = "1";

    return opc;
  }
  if (botaoUpper && botaoNum && botaoLower && !botaoSymb) {
    //todos menos simbolos
    lastOption.option = "2"
    const opc = "2";

    return opc;
  }
  if (botaoUpper && !botaoNum && !botaoSymb && botaoLower) {
    //maiusculas e minusculas
    lastOption.option = "3"
    const opc = "3";

    return opc;
  }

  if (!botaoNum && botaoUpper && !botaoSymb && !botaoLower) {
    //apenas maiusculas
    lastOption.option = "4"
    const opc = "4";

    return opc;
  }
  if (botaoNum && !botaoUpper && !botaoSymb && !botaoLower) {
    //apenas numeros
 
    lastOption.option = "5"
    const opc = "5";

    return opc;
  }
  if (!botaoNum && !botaoUpper && !botaoSymb && botaoLower) {
    //apenas minúsculas
   
    lastOption.option = "6"
    const opc = "6";

    return opc;
  }
  if (!botaoNum && !botaoUpper && botaoSymb && !botaoLower) {
    //apenas simbolos
   
    lastOption.option = "7"
    const opc = "7";

    return opc;
  }
}
