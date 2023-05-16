const dotenv = require('dotenv')
dotenv.config();

const port = 4000
const express = require('express')
const app = express()
app.set("view engine",'ejs')

app.get('/alunos',function(request,res){
    const con = require('./conexao')
    var sql = "select * from aluno"
    
        con.query(sql, function(err,result, fields){
            if(err) throw err;
            console.log('sql inserido')
            console.log(result)

            res.render("dados", {'result':result})
        })
})

app.listen(port)


