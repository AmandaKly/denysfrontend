require('dotenv').config();
const meudado = process.env.APIURL;

function cadastrarProduto(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário (recarregar a página)

    var nome = document.getElementById("nomeProduto").value;
    var quantidade = document.getElementById("quantidade").value;

    var data = {
        nome: nome,
        quantidade: quantidade
    };

    fetch(`${meudado}/dados`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        
       
        console.log('Produto cadastrado com sucesso:', data);
        
            })

    .catch((error) => {
        console.error('Erro ao cadastrar o produto:', error);
    });
    }


    