String.prototype.dividePalavra = function dividePalavra() {
    const array = this.split('')
    const arrayCompleto = []
    for(let i = 0; i < array.length; i++) {
        let indexAtual = i
        while(indexAtual < array.length){
            let palavraAtual = array.slice(i, indexAtual + 1).join('')
            arrayCompleto.push(palavraAtual)
            indexAtual++
        }
    }
    return arrayCompleto
}

console.log("mari".dividePalavra());