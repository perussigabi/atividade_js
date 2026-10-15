const nome = "Maria";
const idade = 15;
const curso = "Adm";
const nota1 = 7;
const nota2 = 5;
const nota3 = 9;
let faltas = 28;
const matricula = true;
const quantidadeAulas = 40;
if (matricula === true){
    "Matriculado"}
else {
    "Não matriculado"
}
const media = ((nota1 + nota2 + nota3)/3)
if (media >= 7){
    "Aprovado"}
else if (media == 7 || media <= 5){
    "Recuperacao"}
else {
    "Reprovado"}
const frequencia = (quantidadeAulas-faltas);
const frequenciaTotal = (frequencia/quantidadeAulas)*100;
console.log ("RELATÓRIO FINAL");
console.log (nome);
console.log (idade);
console.log (curso);
console.log (media);
console.log (frequenciaTotal);
console.log (matricula);
if (media >= 7 && frequenciaTotal >= 75 && matricula === true){
    console.log("Aprovado!");
}
else{
    console.log("Reprovado");
}

