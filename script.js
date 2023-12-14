//const { execSync } = require('child_process');

// Comando para obter o IP interno do serviço Kubernetes
//const getIPCommand = "kubectl get svc apiclusteriphomolog -n homolog -o=jsonpath='{.spec.clusterIP}'";

// Função para executar o comando e retornar a saída como string
//function getKubernetesServiceIP() {
  //try {
    // Executa o comando e obtém a saída como string
    //const ip = execSync(getIPCommand, { encoding: 'utf-8' });
    //return ip.trim(); // Remove espaços em branco extras
  //} catch (error) {
    //console.error('Erro ao obter o IP do serviço Kubernetes:', error);
    //return null;
  //}
//}

// Obtém o IP do serviço e usa na variável urlApi
//const ipFromKubernetes = getKubernetesServiceIP();
//const urlApi = `http://${ipFromKubernetes}:3000/dados`;
const hostUrl = window.location.href
const host = hostUrl.split("//")[1]
const ip = host.split(":")[0]
const urlApi = "http://10.1.1.53:3000/dados"
// const baseUrl = window.location.origin;
// const urlApi = `http://` + ip + ":3000/dados"

function cadastrarProduto(event) {
    obterProdutos()
    event.preventDefault();

    var nome = document.getElementById("nomeProduto").value;
    var quantidade = document.getElementById("quantidade").value;

    var data = {
        nome: nome,
        quantidade: quantidade
    };

    fetch(urlApi, {
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
    obterProdutos()
    }

    function obterProdutos() {
        fetch(urlApi, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    .then(response => response.json())
        
       
    .then(data => {
            console.log('Produtos obtidos com sucesso:', data);
            listaProdutos2.innerHTML = ''
            data.forEach(itens => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${itens.nome}</span>
                    <span>${itens.quantidade}</span>
                `;
                listaProdutos2.appendChild(li);
                
            });
        })
    .catch((error) => {
            console.error('Erro ao obter os produtos:', error);
        });

    }
obterProdutos()
setInterval(obterProdutos,100)
