const proffys = [ //Criando um array de proffys e colocando os professores como objeto
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        bio: "Entusiasta das melhores tecnologias de química avançada. <br> Apaixonado por explodir coisas em laboratório e"+
        "por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        whatsapp: "86994565765",
        subject: "Quimica",
        cost: "20,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Jaum Vitor",
        avatar: "https://avatars3.githubusercontent.com/u/62776981?s=460&u=97b69140f5176da7326ffd8ca343abd03d428cc1&v=4",
        bio: "Entusiasta das melhores tecnologias de química avançada.<><>Apaixonado por explodir coisas em laboratório e\
        por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        whatsapp: "8695432432",
        subject: "Tecnologias",
        cost: "15,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
function getSubject (subject){
    const position = +subject -1
    return subjects[position]
}

function pageLanding(req, res){
    return res.render("index.html")
    //obs: __dirname mostra o caminho da onde esta diretorio
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
    //render esta retornando o objeto passado no segundo parametro
}

function pageGivClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty){
        data.subject = getSubject(data.subject)
        //Caso minha data não esteja vazia eu posso adicinar o proffy no vetor
        proffys.push(data)
        return res.redirect("/study")
    }
    //Retornando os meus vetores para a pagina give-classes
    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express') //Como se estivesse importando a funcionalidade
const server = express()   //catching return from function express()
const nunjucks = require('nunjucks')

//Configurando nunjuncks:
nunjucks.configure('src/views', {express: server, noCache: true})

//Usando minha pasta "public" como origem antes era apenas "/" (Configuracoes estaticas):
server.use(express.static("public")) 

//Configurando minhas rotas:
.get("/", pageLanding) //No meu req "/" usar este res
.get("/study", pageStudy) //No meu req "/study" usar este res
.get("/give-classes", pageGivClasses)

.listen(5000) //usar a porta 5500
