class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e ${this.altura}m de altura.`);
    }
}

const pessoa1 = new Pessoa("Alejandra", 16, 1.68)
const pessoa2 = new Pessoa("Lilica", 5, 0.6)
const pessoa3 = new Pessoa("Chico", 7, 1.0)

pessoa3.seApresentar()

//console.log(pessoa1);
//console.log(pessoa2);