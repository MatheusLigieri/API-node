module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('vc está na rota de atendimento'))
    app.post('/atendimento', (req, res) => res.send('vc está na rota de atendimento'))
}