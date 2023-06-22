import chalk from "chalk"

function Circle (r) {
    this.r = r

    this.area = function () {
        return (Math.PI * (r ** 2)).toFixed(2)
    }

    this.perimetro = function () {
        return (2 * Math.PI * r).toFixed(2)
    }
}

const c1 = new Circle(3)
const c2 = new Circle(7)
const c3 = new Circle(4)
const c4 = new Circle(20)
const c5 = new Circle(9)

const arrC = []
arrC.push(c1, c2, c3, c4, c5)

function CalCirculos (arr) {
    for(let index in arr) {
        console.log(chalk.bgHex('#141414').bold(`O circulo ${parseInt(index) + 1} tem ` + chalk.blue(`área = ${arr[index].area()} `)+ 'e ' + chalk.green(`perimetro = ${arr[index].perimetro()}`))); 
    }
}

CalCirculos(arrC)
