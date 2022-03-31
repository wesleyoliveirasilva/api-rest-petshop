const customExpress = require('./config/customExpress')
const conexao = require('./infraestruta/conexao')
const Tabelas = require('./infraestruta/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado ao mysql com sucesso.')

        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log("Servidor rodando."))

    }
})


