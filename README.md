<div align="center">
  <h1 >PhotoConnect</h1>
  <b>Projeto desenvolvido nas aulas de Projeto de Software 2 - FURB (Universidade Regional de Blumenau)</b>
</div>

## 🚀 Sobre
<p>Se trata de uma aplicação para contratação de serviços de Fotógrafos, o PhotoConnect.</p>
<p>A aplicação é composta pelo backend e frontend.</p>
<p>O Backend é responsável por gerenciar e prover as informações para o frontend.</p>
<p>O Frontend é responsável por ser a interface que comunica com o usuário comum e o usuário prestador do serviço (Fotógrafo).</p>
<p>O usuário comum tem a possibilidade de ver todos os prestadores de serviço cadastrados na plataforma, assim como também pode contratá-los e ao término da realização do serviço é possível obter o acesso as imagens retiradas do evento.</p>
<p>O usuário prestador de serviço tem a possibilidade de cadastrar o seu portfolio na plataforma (um conjunto de imagens que demonstram o trabalho do profissional), assim como também pode gerenciar seus contratos e ao término da realização de um serviço, publicar as imagens retiradas do evento para o usuário contratante.</p>
<p>A plataforma também oferece a possibilidade dos usuários contratantes realizarem a avaliação do serviço prestado pelo profissional, garantindo assim que os profissionais prezem pela realização de um bom serviço.</p>

## 💻 Tecnologias
 - [Node.js](https://nodejs.org/en/)
 - [ReactJS](https://pt-br.reactjs.org/)
 - [PostgreSQL](https://www.postgresql.org/)

## ▶️ Get Started
**Requisitos:**
   - Um container no docker para o postgres:

   `docker run --name photoconnect-postgres -e POSTGRES_PASSWORD=photoconnect -p 5432:5432 -d postgres`

➡️ **Back-end**

1. Acessar a pasta `backend` da pasta raiz do projeto e rodar o comando `yarn` para instalar as dependências.

2. Executar o comando `yarn sequelize db:create` para criar a base de dados do postgres.

3. Executar o comando `yarn sequelize db:migrate` para criar as tabelas na base de dados.

4. Executar o comando `yarn dev` para inicializar o backend.

➡️ **Front-end**

1. Acessar a pasta `frontend` da pasta raiz do projeto e rodar o comando `yarn` para instalar as dependências.

2. Executar o comando `yarn start` para inicializar a aplicação front-end.

## 🎬Vídeo de apresentação
https://youtu.be/Uew3XJPx25w

## 📜 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
