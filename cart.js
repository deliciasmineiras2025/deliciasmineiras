var carrinho = [];
var totalCarrinho = 0;
var celular = "5511986531541"

function adicionarAoCarrinho(element, nome, preco) {
    const produtoExistente = carrinho.find(item => item.nome === nome);
    let quantidade = parseInt(element.parentElement.querySelector(".quantidadeProduto").innerText);
    
    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
    } else {
        carrinho.push({ nome, preco, quantidade: quantidade });
    }
    totalCarrinho += preco * quantidade;
    atualizarCarrinho();
    element.parentElement.querySelector(".quantidadeProduto").innerText = 1
}

function atualizarCarrinho() {
    var cartItems = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');

    cartItems.innerHTML = '';

    if (carrinho.length > 0) {
        carrinho.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            cartItemElement.innerHTML = `<span>${item.quantidade}x</span> <span>${item.nome}</span> <span>(R$ ${item.preco.toFixed(2).replace('.', ',')})</span>`;
            cartItems.appendChild(cartItemElement);
        });
    } else {
        cartItems.innerHTML = '<p>Seu carrinho está vazio.</p>';
    }

    cartTotal.innerText = `Total: R$ ${totalCarrinho.toFixed(2).replace('.', ',')}`;
}

function toggleCarrinho(element) {
    var cart = document.getElementById('cart');
    var cartStyle = cart.style;

    if (cartStyle.display === 'none' || cartStyle.display === '') {
        cartStyle.display = 'block';
        element.innerText = "Ocultar carrinho"
    } else {
        cartStyle.display = 'none';
        element.innerText = "Exibir carrinho"
    }
}

function alterarQuantidade(element, valor) {
    var paragrafo = element.parentElement.getElementsByTagName('span')[0];
    var quantidadeAtual = parseInt(paragrafo.innerText);
    
    var novaQuantidade = quantidadeAtual + valor;
    if (novaQuantidade >= 1) {
        paragrafo.innerText = novaQuantidade;
    }
}

function EnviarMensagem() {
  textoFinal = "Olá,%20gostaria%20de%20realizar%20o%20seguinte%20pedido:%0A%0A";
  for (let i = 0; i < carrinho.length; i++) {
    textoFinal += carrinho[i].quantidade + "x%20" + carrinho[i].nome + " (R$%20" + carrinho[i].preco.toFixed(2).replace('.', ',') + ")%0A";
  }
  textoFinal = textoFinal + "%0ATotal:%20R$%20" + totalCarrinho.toFixed(2).replace('.', ',');
  textoFinal = textoFinal


  window.open('https://wa.me/'+ celular + '?text=' + textoFinal, '_blank');
}

function LimparCarrinho() {
    carrinho = [];
    totalCarrinho = 0;
    atualizarCarrinho();
}