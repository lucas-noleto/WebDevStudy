// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())