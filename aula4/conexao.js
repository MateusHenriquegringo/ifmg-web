var mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config();
var con = mysql.createConnection({
    host:process.env.maquina,
    user:process.env.usuario,
    password:process.env.senha,
    database:process.env.banco
});

con.connect(function(err){
    if (err) throw err;
    console.log('conectado')}
)

module.exports = con;