function compras( trabalho1, trabalho2) {
    const comprarSoverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv35 !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSoverte // operador unário

    return {comprarSoverte, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(comras(true,true))
console.log(comras(true,false))
console.log(comras(false,true))
console.log(comras(false,false))