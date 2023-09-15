# cursoTypeScript-Cod3r
Curso Entendendo TypeScript

## Iniciando - Montando o ambiente

### Instalando o typescript
$ npm i -g typescript

$ tsc -v // Mostra a versao do TypeScript

### Inicializando um diretorio/projeto para trabalhar com TS
$ tsc --init

### Compilar 
$ tsc <arquivo.ts> 

### Sugestão - Plugin no VSCODE 
Code Runner 
Instalar o ts-node
$ npm i ts-node

### Compilando e executando - HTML
#### inicializar o projeto
$ npm init -y

#### instalar o live server 
$ npm i -s live-server

#### configurar o scripts no package.json
<
"scripts":{
  "start":"live-server"
}

#### compilar atutomatico
$ tsc -w

---

