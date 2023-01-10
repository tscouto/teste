//Aula explicando procedecimento de abrir o servidor e atualizar as telas automaticos, utilizando os comandos de instalação
// comando npx nodemon -save-dev instalando node com opção de servidor
// agora para deixar automatico no terminal, npx nodemon server.js
// Outa maneira editar o package.json na opção START colocar nodemon - em seguida no terminal apenas digitar o comando npm start e pronto.
// npm install mongoose instalar o banco de dados mongoose
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const connectString = 'mongodb+srv://ocelot:tiocelot3@passatempo.7s8nojv.mongodb.net/BASEDADOS?retryWrites=true&w=majority'
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('Conectei a base dados');
    app.emit('pronto');
    
})
.catch(e => console.log(e));

//  mongoose.set("strictQuery", true);
//  mongoose.set("strictQuery", false);
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middlewares.js');

//          criar   ler     atualizar   apagar
// CRUD ->  CREATE, READ,   UPDATE,       DELETE
//          POST    GET     PUT         DELETE

// http://meusite.com/ <- GET -> Entregue a pagina
// http://meusite.com/sobre <- GET -> Entregue a pagina / sobre
// http://meusite.com/contato; <- GET -> Entregue a pagina / contato

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname,'public')));
// path.resolve(__dirname, 'src', 'views')
app.set('views', path.resolve(__dirname, './src', 'views'));
app.set('view engine', 'ejs');
app.use(meuMiddleware);
app.use(routes);
app.on('pronto', () => {
    app.listen(3000 ,() => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });

});



