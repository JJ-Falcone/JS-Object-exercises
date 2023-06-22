import chalk from "chalk"

const pi = 3.14
const arrCilindros = []

class Cilindro {
    constructor(diametro, altura) {
        this.diametro = diametro
        this.altura = altura
    }

    calcVolumeCilindro() {
        const raio = this.diametro / 2
        const volume = pi * (raio ** 2) * this.altura
        console.log(chalk.bgHex('#141414').bold(`O volume de um cilindro de ` + chalk.blue(`diametro ${this.diametro}`) + ` e de` + chalk.blue(` altura ${this.altura}`) + " é de " + chalk.green(volume.toFixed(4))));
    }
}


const cilindro1 = new Cilindro(4, 10)
const cilindro2 = new Cilindro(7, 4)
const cilindro3 = new Cilindro(2, 3)
const cilindro4 = new Cilindro(10, 50)
const cilindro5 = new Cilindro(9, 27)
arrCilindros.push(cilindro1, cilindro2, cilindro3, cilindro4, cilindro5)


for (let cilindroIndex in arrCilindros) {
    const cilindro = arrCilindros[cilindroIndex]
    const diametro = cilindro.diametro
    const altura = cilindro.altura

    cilindro.calcVolumeCilindro()
}

