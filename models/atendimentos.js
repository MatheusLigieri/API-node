const conexao = require('../infraestrutura/conexao')
class Atendimento {
    adiciona(atendimento) {
        const insertSQL = 'INSERT INTO Atendimentos SET ?'

        conexao.query(insertSQL, atendimento, (erro, resultado) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultado)
            }
        })
    }
}

module.exports = new Atendimento