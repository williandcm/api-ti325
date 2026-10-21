require('dotenv').config(); // Carrega as variáveis do arquivo .env para o process.env
const express = require('express');
const app = express();
app.use(express.json())

// rota ou endpoint
app.get('/', (req, res) => {
    return res.json({message:'API TI-325 rodando....'});
})
                  // request, response
app.get('/ping', (req, res) => {
    return res.json({message:'pong'}); // json { chave:"valor" }  
})

app.post('/usuario', (req, res) => {
    const { nome, idade } = req.body;

    // Transformações
    // 1. Converte o nome para MAIUSCULAS
    // 2. Calcula o ano aproximado de nascimento
    // 3. Adiciona um status personalizado
    const nomeFormatado = nome ? nome.toUpperCase() : 'NÃO INFORMADO'; //? é igual o IF no Python
    const anoNascimento = new Date().getFullYear() - idade;

    return res.json({
        mensagem: 'Dados recebidos e processados com sucesso',
        dadosOriginais: {nome, idade},
        dadosProcessados:{
            nomeFormatado,
            idade,
            anoNascimento: anoNascimento,
            perfil: idade >= 18 ? 'Adulto' : 'Adolescente'
        }
    })
    return res.json({
        mensagem: 'Dados recebidos e processados com sucesso',
        nome,
        idade

    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
 //   console.log('Servidor rodando em http://localhost:3000')
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})