var numb1, numb2, resto;

numb1 = prompt("Digite o 1° número");
numb1 = parseInt(numb1);
numb2 = prompt("Digite o 2° número");
numb2 = parseInt(numb2);

document.write("Matheus Rodrigues // RA: 922103769");
document.write("<br/>Números Digitados: " + numb1 + " e " + numb2 + "<br/>");
// document.write("<br/>")
resto = (numb1 == numb2);
document.write("<br/>Igualdade: " + resto + "<br/>")

resto = (numb1 === numb2);
document.write("Identico: " + resto + "<br/>")

resto = (numb1 != numb2);
document.write("Não Igual: " + resto + "<br/>")

resto = (numb1 !== numb2);
document.write("Não Identico: " + resto + "<br/>")

resto = (numb1 > numb2);
document.write("Maior que: " + resto + "<br/>")

resto = (numb1 < numb2);
document.write("Menor que: " + resto + "<br/>")

resto = (numb1 >= numb2);
document.write("Maior ou Igual: " + resto + "<br/>")

resto = (numb1 <= numb2);
document.write("Menor ou Igual: " + resto + "<br/>")