const upperCase = document.querySelector('#uppercase');
const lowerCase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const simbolos = document.querySelector('#simbolos');
const barra = document.querySelector("#tamanhoSenha");
const suaSenha = document.querySelector("#password");
const geradorPass = document.querySelector('#geradorPass')



geradorPass.addEventListener('click', generatePassword)
function atualizaTAmanho(){
 
 
  
  const span = document.querySelector(".pl");
 
 span.innerHTML = barra.value;
  
  
}
  
  
function generatePassword()
{
 
  const senha = [];
  const lowers = ['a','b','c','d','e','f','g','h', 'i', 'j','k','l','m','n','o','p','q', 'r','s','t','u','v','w','x','y','z'];
  const uppers = ['A','B','C','D','E','F','G','H', 'I', 'J','K','L','M','N','O','P','Q', 'R','S','T','U','V','W','X','Y','Z'];
  const symbols = ['*','#','@','$','+','/','?','-','.','_','&',':',';','(',')',']','<','>','"',"''"];
  
   const nums = [0,1,2,3,4,5,6,7,8,9];
   
   
    const opcao = optionCheck();
    
   //escolhendo com base nos checkeds
   switch(opcao)
    {
      case "1":
   
     allChecked(lowers, uppers, nums, symbols);
     break;
     
     case "2":
       
       
       upperLowNum(uppers, lowers, nums)
       break;
     
     case "3":
       
       upperLow(uppers,lowers)
       
       brrak;
    }
}


//mostra a senha

function mostrarSenha(np)
{
   const passwordYour = np.join().replaceAll(',', '');
        
     suaSenha.value = passwordYour;
     
}