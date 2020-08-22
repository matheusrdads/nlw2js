// Servidor
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require(`./pages`)


// Configurar nunjunks (templates engine)
const nunjucks = require('nunjucks')
//const { query } = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
                                            // Inicio e configuração do servidor 
server
 
.use(express.urlencoded({ extended: true }))// receber os dados  do rec body
                                           // Configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
                                            // Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)                                               // Start do servidor
.listen(5500)