const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: '10.67.0.171',
    port: 3311,
    user: 'my_dpor_maint',
    password: 'hermes',
    database: 'treinamento'
})

module.exports = conexao