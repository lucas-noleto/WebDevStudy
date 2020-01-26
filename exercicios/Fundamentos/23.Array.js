const valores = [5.5 , 6.7 , 9.2]
console.log(valores[0],valores[2])
console.log(valores[0],valores[7])

valores[6] = 4
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)