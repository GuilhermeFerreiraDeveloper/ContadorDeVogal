const prompt = require("prompt-sync")();

let frase = prompt("Digite sua frase:")
console.log(frase);
let contador = 0;

for (let vogais of frase){
    if (vogais  === "a" || vogais === "A"){
        contador++;
    }else if(vogais === "e" || vogais === "E") {
        contador ++;
    }else if(vogais === "i" || vogais === "I"){
        contador ++;
    }else if(vogais === "o" || vogais === "O"){
        contador++;
    }else if(vogais === "u" || vogais === "U"){
        contador++;
    }else{}
}
console.log(`A frase possui ${contador} vogais`);