//Passo 1 -> Importar o código que sera testado
const somarProdutos = require('./carrinho')

//Passo 2 -> Criar a function test do jest. ela recebe um titulo e uma function executavel
test('Deve somar corretamente o valor de dois produtos', 
    ()=>{
    //Passo 3 -> A Asserção (O que eu espero que aconteça?)
    // Eu espero que a soma de 10 e 15 seja exatamente 25
    expect(somarProdutos(10,15)).toBe(25)
    }
)