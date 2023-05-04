
let preco = parseFloat(prompt("Digite o preço do produto: "));
let desconto = parseFloat(prompt("Digite o percentual de desconto a ser aplicado: "));
let valorDesconto = (preco * desconto) / 100;
let precoComDesconto = preco - valorDesconto;
alert("O preço do produto com desconto é de: R$" + precoComDesconto.toFixed(2));
