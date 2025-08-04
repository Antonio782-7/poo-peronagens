// Classe mae (Abstração)
class Personagem {
    constructor(nome) {
this.nome=nome;
    }
atacar() {
console.log(`${this.nome} está atacando.`);
}
}
// Classes filhas (Herança)
class Guerreiro extends Personagem{
    atacar(){
    console.log(`${this.nome} ataca com espada!`);
}
}
class arqueiro extends Personagem{
    atacar (){
        console.log(`${this.nome} ataca com flecha!`);
    }
}
class Mago extends Personagem {
atacar() {
console.log(`${this.nome} lança um feitiço!`);
}
}

// Aqui abaixo, você cria outra Classe filha
// Dica: Pode ser Arqueiro, Ninja, etc.
// Polimorfismo
const personagens = [
new Guerreiro("Arthur"),
new Mago("Merlin"),
new arqueiro("kratos"),
// Adicione o novo personagem criado aqui
];
personagens.forEach(p => p.atacar());
