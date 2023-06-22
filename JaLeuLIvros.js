import chalk from 'chalk'

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

function jaLeu(library) {
    for (var livroIndex in library) {
        const livroAtual = library[livroIndex]
       if(livroAtual.readingStatus === true) {
            const resposta = `Você já leu ${chalk.blue(livroAtual.title)} de ${chalk.blue(livroAtual.author)}`
            console.log(resposta);
       } else {
        const resposta = `Você ainda não leu ${chalk.red(livroAtual.title)} de ${chalk.red(livroAtual.author)}}`
        console.log(resposta);
       }
    }
}

jaLeu(library)