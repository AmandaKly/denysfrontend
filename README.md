# Repositório da parte do Front-end para Kubernetes
### Criação de um front-end básico para atividade avaliativa prática de desenvolvimento web para Nuvem.
Disciplina ministrada pelo professor da área de Redes Denys Silva - IFRN (Campus Currais Novos).

<a href="https://github.com/AmandaKly/denysapi">Clique aqui para ver a parte do back-end!</a>

### Para executar o programa:
(Antes de tudo, certifique-se de ter instalado o kubernetes, o Helm e o Ingress em sua máquina!)
1. Entre na Pasta yaml que se encontra na branch main;
2. Escolha um dos arquivos na pasta yaml;
3. Crie um arquivo em seu vscode com a extensão .yaml (nomeArquivo.yaml) e cole o conteúdo nela do yaml que você preferiu;
4. No Ingress, substituia "yourIP" pelo IP da sua máquina;
5. Após isso, execute o comando kubectl apply -f '*.yaml' no terminal (O terminal precisa está no caminho da pasta onde se encontra o seu arquivo yaml),
Exemplo:
```console
user@bar:~$ kubectl apply -f atvkubedevelop.yaml
 ```
Se tudo ocorrer bem, deverá aparecer o seguinte:
```console
user@bar:~$ kubectl apply -f atvkubedevelop.yaml
namespace/develop created
deployment.apps/nginx-deployment-develop created
deployment.apps/node-deployment-develop created
service/backend-service created
service/frontend-service created
ingress.networking.k8s.io/ingress-primario-develop created
user@bar:~$
 ```
6. Para vê-lo rodando no browser, coloque o endereço do ingress, exemplo: develop.yourIP.nip.io/app
7. Para parar de rodá-lo execute o comando kubectl delete ns nomeDoNamespace,
Exemplo:
```console
user@bar:~$ kubectl delete ns develop
 ```
