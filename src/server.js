const express = require('express') //Como se estivesse importando a funcionalidade
const server = express()   //catching return from function express()

server.use(express.static("public")) //Usando minha pasta "public" como origem

.get("/", (req, res) => { //No meu req "/" usar este res
    return res.sendFile(__dirname + "/views/index.html")
    //__dirname mostra o caminho da onde esta diretorio
})
.get("/study", (req, res) => { //No meu req "/study" usar este res
    return res.sendFile(__dirname + "/views/study.html")
})
.listen(5000) //usar a porta 5500
