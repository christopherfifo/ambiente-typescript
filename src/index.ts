
function soma(a: number, b: number): number {
    return a + b;
}


interface Usuario {
    nome: string;
    idade: number;
}


const usuario: Usuario = {
    nome: "João",
    idade: 25
};


const resultado = soma(5, 3);
console.log(`Resultado da soma: ${resultado}`);


console.log(`Usuário: ${usuario.nome}, Idade: ${usuario.idade}`);

type qualquer = {
    
};