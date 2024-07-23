// Operações ternárias são condições em JavaScript que se assemelham 
// ao IF ELSE porém de uma maneira mais prática onde eu ocupo apenas
// uma linha de código, vou deixar abaixo alguns exemplos de if ternário.

// condição ? expressão 1 : expressão 2;

// se eu fosse utilizar if else para resolver um problema ficaria dessa forma 

// criando solução para saber se uma pessoa é ou não considerada adulta com IF ELSE

let pessoa = 19;

if(pessoa >= 21) {
    console.log('você já é adulto')
} else {
    console.log('você ainda não é adulto')
}

// aqui acima eu tenho meu código realizado com if else normal
//o mesmo código com if ternário ficaria dessa forma aqui logo abaixo

let souAdulto = 23;

let adulto = (souAdulto >= 21) ? 'você é adulto' : 'você não é adulto'

console.log(adulto)

// com isso posso concluir o que é um if ternário, apenas um if else porém
// de uma forma mais simplificada na qual ocupo apenas uma linha de código.