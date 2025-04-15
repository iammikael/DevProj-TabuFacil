<h1 align="center">
  📚 Tabufácil
</h1>

---

## 🚀 Tecnologias Utilizadas

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="40" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="40" alt="Next.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="40" alt="MySQL" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="40" alt="Git" />
</p>

---

## 📖 Descrição do Projeto

O presente documento visa delinear a proposta de projeto de trabalho da disciplina Projetos em Sistemas Computacionais, do 6º semestre da graduação em Sistemas de Informação da Universidade Federal da Grande Dourados.

O projeto, intitulado **TABUFÁCIL - Facilitando a tabuada**, é uma aplicação educacional na plataforma Web acessível a partir de dispositivos conectados à internet, de treinamento de tabuada para crianças em idade de aprendizado matemático. A aplicação será especificamente desenvolvida para crianças que estão cursando o ensino fundamental e que apresentam dificuldades no conteúdo.

---

## 🎯 Objetivo do Projeto

O objetivo principal é oferecer um ambiente interativo e amigável que auxilia o aprendizado dos alunos a superarem possíveis dificuldades na memorização e compreensão da tabuada, tendo em vista que esta é uma habilidade fundamental para o avanço em outros conteúdos matemáticos.

---

## ⚙️ Como rodar o projeto localmente

### ✅ Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)
- [Git](https://git-scm.com/)
- Um gerenciador de pacotes como npm ou yarn

---

## 📥 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/tabufacil.git
```
### 2. Acesse a pasta do projeto

```bash
cd tabufacil
```
### 3. Instale as dependências

```bash
npm install
```
### 4. Configure o arquivo .env

```bash
DATABASE_URL="mysql://usuario:senha@localhost:3306/seubanco"
```
### 5. Crie o banco de dados e execute as migrations

```bash
npx prisma migrate dev
```
### 6. Rode o projeto

```bash
npm run dev
```
