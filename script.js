function cadastrarProduto(event) {
    event.preventDefault();
  
    var nomeProduto = document.querySelector('input[name="nomeProduto"]').value;
    var quantidade = document.querySelector('input[name="quantidade"]').value;
    var preco = document.querySelector('input[name="precoProduto"]').value;
  
    var novaLinha = document.createElement('li');
    novaLinha.innerHTML = `
        <span>${nomeProduto}</span>
        <span>${quantidade}</span>
        <span>${preco}</span>
    `;
  
    document.getElementById('listaProdutos').appendChild(novaLinha);
  
    document.querySelector('form').reset();
  }