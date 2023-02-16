// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt('Insira a altura do retangulo: '))
  const largura = Number(prompt('Insira a largura do retangulo: '))
  const area = altura * largura
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Insira o ano atual: '))
  const anoDeNascimento = Number(prompt('Insira o seu ano de nascimento: '))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura ** 2)
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Insira o seu nome: ')
  const idade = prompt('Insira a sua idade: ')
  const email = prompt('Insira o seu e-mail: ')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Qual a sua primeira cor favorita? ')
  const cor2 = prompt('Qual a sua segunda cor favorita? ')
  const cor3 = prompt('Qual a sua terceira cor favorita? ')
  const array = [cor1, cor2, cor3]
  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const retornaMaiuscula = string.toUpperCase()
  return retornaMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const quantidadeDeIngressos = custo / valorIngresso
  return quantidadeDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparaTamanho = string1.length === string2.length
  return comparaTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const retornaPrimeiroElemento = array[0]
  return retornaPrimeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const retornaUltimoElemento = array[array.length - 1]
  return retornaUltimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const temporario = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = temporario
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const saoIguais = string1.toLowerCase() === string2.toLowerCase()
  return saoIguais
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Insira o ano atual: '))
  const anoDeNascimento = Number(prompt('Insira o seu ano de nascimento: '))
  const anoEmissaoCarteira = Number(prompt('Insira o ano de emissão da sua carteira de identidade: '))
  
  const idade = anoAtual - anoDeNascimento
  const tempoDeCarteira = anoAtual - anoEmissaoCarteira
  const renovacao = (idade <= 20 && tempoDeCarteira >= 5) || (idade > 20 && idade <= 50 && tempoDeCarteira >= 10) || (idade > 50 && tempoDeCarteira > 15)
  console.log(renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1 = ano % 400 === 0
  const condicao2 = ano % 4 === 0 && !(ano % 100 === 0 && !(ano % 400 === 0))
  const condicaoFinal = condicao1 || condicao2
  return condicaoFinal
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  mais18 = prompt('Você tem mais de 18 anos? ')
  ensinoMedioCompleto = prompt('Você tem ensino médio completo? ')
  disponibilidadeExclusiva = prompt('Você tem disponibilidade exclusiva durante os horários do curso? ')
  condicaoValida = (mais18 === 'sim') && (ensinoMedioCompleto === 'sim') && (disponibilidadeExclusiva === 'sim')

  console.log(condicaoValida)
}