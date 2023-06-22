var library = [ 
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];


Object.prototype.sortLivros = function () {
    for (let index of library) {
        let atual = index
        let posicaoAtual = library.indexOf(atual)
        while(posicaoAtual > 0 && atual.libraryID > library[posicaoAtual - 1].libraryID){
            let livroAtual = library[posicaoAtual]
            let livroAnterior = library[posicaoAtual - 1]

            library[posicaoAtual] = livroAnterior
            library[posicaoAtual - 1] = livroAtual
            
            atual--
        }
    }

    console.log(library); 
}

library.sortLivros();