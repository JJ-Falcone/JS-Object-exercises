


Array.prototype.ordenaLista = function ordenaLista(){
    for (let i = 1; i < this.length; i++) {
        let contador = i

        while(contador > 0 && this[contador] < this[contador - 1]){
            
            const atual = this[contador]
            const anterior = this[contador - 1]
            
            this[contador] = anterior
            this[contador - 1] = atual
            
            contador--
            
        }   
    }
    return this
}

console.log(Array.prototype);
console.log([6, 4, 0, 3, -2, 1].ordenaLista())

