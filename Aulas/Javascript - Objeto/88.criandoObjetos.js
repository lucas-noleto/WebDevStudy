// usando notação lateral

const obj1 = {}
console.log(obj1)

//Objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Funçao Factory
function criarFuncionario(nome, salariobase, faltas){
    return {
        nome,
        salariobase,
        faltas,
        getSalario(){
            return (salariobase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario ('João', 7980, 4)
const f2 = criarFuncionario('Mario', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Objec.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Uma função famose que retorna objeto...
const fromJSON = JSON.parse('{"Info": "Sou um JSON "}')