console.log('=== Exercício da Escada ===');


let lances = Number(prompt('Quantos lances de escada voce gostariade fazer?'));
// let material = '#';
 let material = prompt('Qual é o material que você quer utilizar na escada?');
let degrau = material;
let i =0;

while (i < lances ) {
    console.log(degrau);
    
    // degrau = degrau + material;
    degrau += material;
    
    i++;    
}
