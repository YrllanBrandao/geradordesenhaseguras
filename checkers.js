
function optionCheck()
{

 const botaoUpper = upperCase.checked;
 const botaoLower = lowerCase.checked;
 const botaoNum = numbers.checked;
 const botaoSymb = simbolos.checked;
 
 //verificando quais checkboxes foram marcadas
  if(botaoNum && botaoUpper && botaoSymb && botaoLower)//todos os check boxes foram marcados
  {
    const opc = "1";
   
    return opc;
  }
 else if(botaoUpper && botaoNum && botaoLower && !botaoSymb)//todos menos simbolos
 {
   const opc = "2";
   
   return opc;
 }
 else if(botaoUpper && !botaoNum && !botaoSymb && botaoLower) //maiusculas e minusculas 
{
  const opc = "3";
  
  return opc
}
else if(!botaoNum && botaoUpper && !botaoSymb && !botaoLower)
{
  const opc = "4";

  return opc
}
}