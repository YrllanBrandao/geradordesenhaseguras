const copy = document.getElementById("copy");
const password = document.getElementById("password");



copy.addEventListener('click', ()=>{
    const pass = password.value;
    navigator.clipboard.writeText(pass);
    alert("copiado!")
})

