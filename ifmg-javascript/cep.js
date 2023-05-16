//function buscarCep(){
//    let cep = 99950000
//    let url = "https://brasilapi.com.br/api/cep/v2/"+cep
//    fetch(url)
//    .then(function(response) {
//        response.json().then(function(dados) {
//        console.log(dados);
//    });
//    }).catch(
//    function(err) {
//    console.error('Falhou ao buscar dados', err);
//    }
//    );
//   }
//   buscarCep()



// parametros rest
//var params = (...c)=>{
//    let soma= 0
//    for(i = 0; i<c.length;i++){
//        soma += c[i]
//    }
//    return soma
//}
//
//console.log(params(2,4,5))

//const funcao = (num)=>{
//    return num
//}
//
//const numm = funcao
//const numm1 = funcao(4)
//console.log(numm(4),funcao(4),numm1)

const saudar = (name,cb)=>{
    const horaAtual = new Date().getHours()

    if (horaAtual<=12){
        return cb('bom dia',name)
    }
    if (horaAtual<=18){
        return cb('boa tarde',name)
    }
    return cb('boa noite',name)
}


const callback =(saudacao,nome)=>{
    console.log(saudacao,nome)
}

saudar('mateus',callback)