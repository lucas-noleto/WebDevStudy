let d = 3

let c = d

console.log(d)
console.log(c)

let valor // não inicializada
console.log(valor)
valor = null // ausencia de valor

console.log(valor)
//console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.60

produto.preco = undefined // Evite atribuir undefined, deixe pra linguagem. Para limpar use null ou 0 
console.log(!!produto.preco)
//delete produto.preco//
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)