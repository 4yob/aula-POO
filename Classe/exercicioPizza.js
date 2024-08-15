class Pizza {
    constructor(massa, molho, sabor, queijo){
        this.massa = massa
        this.molho = molho
        this.sabor = sabor
        this.queijo = queijo
    }
    pedir(){
        console.log(`Olá, quero uma pizza de ${this.massa}, com molho de ${this.molho}, sabor ${this.sabor} e queijo ${this.queijo}`)
    }
}

const pizza = new Pizza("Massa Integral", "Tomate", "Pepperoni", "Cheddar")

pizza.pedir()