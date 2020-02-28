// pessoa -> 123 -> {...}

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Ana'

console.log(pessoa.nome)
pessoa.end = 'Rua 123'
delete pessoa

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})
console.log(pessoaConstante)

