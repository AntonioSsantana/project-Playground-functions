// Desafio 1
function compareTrue(parametro1, parametro2) {

  if (parametro1 === true && parametro2 === true) {

    return true;
  } else {

    return false;
  }
}
console.log(compareTrue())

// Desafio 2
function calcArea(base, height) {

  let resultado = (base * height) / 2;
  return resultado;
}
console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(string) {

  let palavraSeparada = string.split(' ');
  return palavraSeparada
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {

  for (let i = 0; i < array.length; i += 1) {

    let resultado = array[array.length - 1] + ',' + ' ' + array[0];
    return resultado;
  }


}
var array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(array))

// Desafio 5
function footballPoints(wins, ties) {

  let pontuacaoWins = wins * 3;
  let pontuacaoTies = ties * 1;
  let points = pontuacaoWins + pontuacaoTies;

  return points;

}
console.log(footballPoints(14, 8));

// Desafio 6

function highestCount(array) {
  let max = Math.max(...array)
  let repetido = 0;

  for (let i = 0; i <= array.length; i += 1) {

    if (max == array[i]) {

      repetido += 1;
    }

  }
  return repetido
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {


  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {

    return 'cat1';
  } else if (cat1 - mouse > cat2 - mouse) {

    return 'cat2';
  } else {

    return 'os gatos trombam e o rato foge'
  }

}
console.log(catAndMouse())



// Desafio 8
function fizzBuzz(array) {

  let resultado = [];

  for (let i of array) {

    if (i % 3 === 0 && i % 5 === 0) {

      resultado.push('fizzBuzz');
    } else if (i % 3 === 0) {

      resultado.push('fizz');
    } else if (i % 5 === 0) {

      resultado.push('buzz');
    } else {

      resultado.push('bug!');
    }

  }
  return resultado;

}

let arr = [9, 25];
console.log(fizzBuzz(arr));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
