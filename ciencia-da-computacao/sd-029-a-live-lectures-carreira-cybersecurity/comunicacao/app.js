var express = require('express');
const cors = require('cors');

var app = express();

const allowlist = ['http://localhost:5500', 'http://localhost:3000']

// Função para configurar o CORS com base na origem da solicitação
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // Habilita a origem solicitada na resposta CORS
  } else {
    corsOptions = { origin: false } // Desabilita o CORS para esta solicitação
  }
  callback(null, corsOptions) // A função de retorno de chamada espera dois parâmetros: erro e opções
}

app.use(cors(corsOptionsDelegate));

app.get('/conversations/:id', cors(corsOptionsDelegate), function (req, res, next) {
  res.json({
    'msg': 'Aqui tem uma informação confidêncial'
  })
})

app.listen(3000, function() {
  console.log('Servidor esta ouvindo a porta 3000');
})