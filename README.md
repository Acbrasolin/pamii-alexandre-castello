# pamii-alexandre-castello
# Criação de Projeto Expo

Guia passo a passo para criar, executar e compartilhar um projeto Expo (React Native).

Além do guia, este repositório também documenta uma **API RESTful de Corrida de Cavalos** feita com Express.js e MySQL (seção 7).

## Sumário

<<<<<<< HEAD
1. [O que é Spring Boot?](#1-o-que-é-spring-boot)
2. [Método 1 — Spring Initializr](#2-método-1--spring-initializr)
   - 2.1 [Configurando o projeto](#21-configurando-o-projeto)
   - 2.2 [Adicionando dependências](#22-adicionando-dependências)
   - 2.3 [Gerando e baixando o projeto](#23-gerando-e-baixando-o-projeto)
3. [Método 2 — IntelliJ IDEA](#3-método-2--intellij-idea)
   - 3.1 [Criando o projeto](#31-criando-o-projeto)
   - 3.2 [Adicionando dependências pelo IntelliJ](#32-adicionando-dependências-pelo-intellij)
4. [Estrutura básica do projeto](#4-estrutura-básica-do-projeto)
5. [Executando a aplicação](#5-executando-a-aplicação)
6. [Comparação dos dois métodos](#6-comparação-dos-dois-métodos)
7. [API RESTful — Corrida de Cavalos](#7-api-restful--corrida-de-cavalos)
   - 7.1 [Tecnologias](#71-tecnologias)
   - 7.2 [Como rodar](#72-como-rodar)
   - 7.3 [Rotas](#73-rotas)
   - 7.4 [Exemplo de corpo (POST/PUT)](#74-exemplo-de-corpo-postput)
=======
1. [Pré-requisitos](#1-pré-requisitos)
2. [Passo a Passo](#2-passo-a-passo)
   - 2.1 [Instale o Expo CLI](#21-instale-o-expo-cli)
   - 2.2 [Crie o projeto](#22-crie-o-projeto)
   - 2.3 [Acesse a pasta do projeto](#23-acesse-a-pasta-do-projeto)
   - 2.4 [Inicie o servidor de desenvolvimento](#24-inicie-o-servidor-de-desenvolvimento)
   - 2.5 [Teste o app no seu celular](#25-teste-o-app-no-seu-celular)
   - 2.6 [Compartilhe seu app](#26-compartilhe-seu-app)
3. [Erros comuns](#3-erros-comuns)
>>>>>>> ce4026060493213786150c639e1f50685ef997c8

---

## 1. Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (preferencialmente a versão LTS)
- **npm** ou **yarn** (gerenciadores de pacotes)
- **Expo CLI** (instalado via npm)
- Um celular com o app **Expo Go** (disponível na Play Store e App Store)

---

## 2. Passo a Passo

### 2.1 Instale o Expo CLI

Abra o terminal e execute o comando:

```
npm install -g expo-cli
```

### 2.2 Crie o projeto

Após a instalação, crie um novo projeto com o comando:

```
npx create-expo-app@latest exemplo-app
```

### 2.3 Acesse a pasta do projeto

Entre na pasta recém-criada:

```
cd exemplo-app
```

### 2.4 Inicie o servidor de desenvolvimento

Execute o comando:

```
npx expo start
```

Isso abrirá a interface do Expo Developer Tools no navegador, de onde você pode iniciar seu app em emuladores ou dispositivos físicos.

### 2.5 Teste o app no seu celular

1. Abra o app **Expo Go** no seu celular
2. Escaneie o QR Code que aparece no terminal ou no navegador
3. Seu aplicativo será carregado e você poderá ver as mudanças em tempo real conforme edita o código

### 2.6 Compartilhe seu app

Você pode compartilhar o app com outras pessoas via QR Code, ou exportar para publicação usando:

```
npx expo export
```

---

## 3. Erros comuns

| Erro | Solução |
|---|---|
| `Deprecated` (ao rodar `expo-cli`) | Basta rodar `expo start` diretamente, sem passar pelo `expo-cli` |
- Use o **IntelliJ IDEA** para agilizar o processo sem sair da IDE.

**Resumo:** independente do método, o resultado final é um projeto Spring Boot funcional, com estrutura de pastas correta, dependências configuradas e pronto para desenvolvimento.

---

## 7. API RESTful — Corrida de Cavalos

API RESTful feita com Express.js e MySQL para gerenciar um cadastro de cavalos de corrida.

### 7.1 Tecnologias

- Node.js
- Express
- MySQL (mysql2)
- dotenv

### 7.2 Como rodar

1. Clone o repositório
2. Instale as dependências:
   ```
   npm install
   ```
3. Copie o `.env.example` para `.env` e preencha com suas credenciais do MySQL
4. Crie o banco e a tabela:
   ```sql
   CREATE DATABASE cavalos;
   USE cavalos;

   CREATE TABLE cavalos (
     id INT AUTO_INCREMENT PRIMARY KEY,
     nome VARCHAR(150) NOT NULL,
     pelagem TEXT,
     categoria VARCHAR(50),
     idade INT,
     numero_corridas INT
   );
   ```
5. Rode o servidor:
   ```
   npm run dev
   ```

### 7.3 Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | /cavalos | Lista todos os cavalos |
| GET | /cavalos/:id | Busca um cavalo pelo id |
| POST | /cavalos | Cadastra um cavalo |
| PUT | /cavalos/:id | Atualiza um cavalo |
| DELETE | /cavalos/:id | Remove um cavalo |

### 7.4 Exemplo de corpo (POST/PUT)

```json
{
  "nome": "Relâmpago",
  "pelagem": "Alazão",
  "categoria": "Puro Sangue",
  "idade": 4,
  "numero_corridas": 12
}
```