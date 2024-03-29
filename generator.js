function allChecked(up, low, num, symb) {
  //gera com todas as opções
  const newPassword = [];

  for (let i = 0; i < barra.value; i++) {
    const opt = Math.floor(Math.random() * 4 + 1);

    switch (opt) {
      case 1: //gera letras com minúsculo
        const n = Math.floor(Math.random() * 25 + 1);

        const indice = low[n];
        newPassword.push(indice);

        break;

      case 2: // gera com letras maiúsculas
        const o = Math.floor(Math.random() * 25 + 1);

        const indice2 = up[o];
        newPassword.push(indice2);

        break;

      case 3: //gera com numeros
        const m = Math.floor(Math.random() * 9);

        const indice3 = num[m];
        newPassword.push(indice3);
        break;

      case 4: //gera com simbolos
        const y = Math.floor(Math.random() * 12 + 1);

        const indice4 = symb[y];
        newPassword.push(indice4);
        break;
    }

    mostrarSenha(newPassword);
  }
}
//todos menos a última

function upperLowNum(up, low, num) {
  //gera com todas as opções
  const newPassword = [];

  for (let i = 0; i < barra.value; i++) {
    const opt = Math.floor(Math.random() * 3 + 1);

    switch (opt) {
      case 1: //gera letras com minúsculo
        const n = Math.floor(Math.random() * 25 + 1);

        const indice = low[n];
        newPassword.push(indice);

        break;

      case 2: // gera com letras maiúsculas
        const o = Math.floor(Math.random() * 25 + 1);

        const indice2 = up[o];
        newPassword.push(indice2);

        break;

      case 3: //gera com numeros
        const m = Math.floor(Math.random() * 9);

        const indice3 = num[m];
        newPassword.push(indice3);
        break;
    }

    mostrarSenha(newPassword);
  }
}
//apenas lower e upper
function upperLow(up, low) {
  //gera com todas as opções
  const newPassword = [];

  for (let i = 0; i < barra.value; i++) {
    const opt = Math.floor(Math.random() * 2 + 1);

    switch (opt) {
      case 1: //gera letras com minúsculo
        const n = Math.floor(Math.random() * 25 + 1);

        const indice = low[n];
        newPassword.push(indice);

        break;

      case 2: // gera com letras maiúsculas
        const o = Math.floor(Math.random() * 25 + 1);

        const indice2 = up[o];
        newPassword.push(indice2);

        break;
    }

    mostrarSenha(newPassword);
  }
}

//apenas upper
function upper(up) {
  //gera com todas as opções
  const newPassword = [];

  for (let i = 0; i < barra.value; i++) {
    const o = Math.floor(Math.random() * 25 + 1);

    const indice = up[o];
    newPassword.push(indice);
  }

  mostrarSenha(newPassword);
}

// apenas minusculas
function lower(lowers) {
  //gera com todas as opções
  const newPassword = [];

  for (let i = 0; i < barra.value; i++) {
    const o = Math.floor(Math.random() * 25 + 1);

    const indice = lowers[o];
    newPassword.push(indice);
  }

  mostrarSenha(newPassword);
}
// apenas numeros

function num(nums)
{
  const newPassword = [];
  for (let i = 0; i < barra.value; i++) {
    const o = Math.floor(Math.random() * 9 + 1);

    const indice = nums[o];
    newPassword.push(indice);
  }

  mostrarSenha(newPassword);
}

// apenas simbolos

function symb(symbols)
{
  const newPassword = [];
  for (let i = 0; i < barra.value; i++) {
    const o = Math.floor(Math.random() * 12 + 1);

    const indice = symbols[o];
    newPassword.push(indice);
  }

  mostrarSenha(newPassword);
}