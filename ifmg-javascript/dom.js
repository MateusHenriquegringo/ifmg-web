

//butt.addEventListener("click", alerta);
//function alerta(){
//    user.innerHTML = '<b>eai parça</b> '+nome.value;
//}

const saudar = (name,cb)=>{
    const horaAtual =  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    if (horaAtual<=12){
        return cb('bom dia',name,horaAtual)
    }
    if (horaAtual<=18){
        return cb('boa tarde',name,horaAtual)
    }
    return cb('boa noite',name,horaAtual)
}

const callback =(saudacao,nome,horaAtual)=>{
    console.log(saudacao,nome,`agora são ${horaAtual} horas`)
}

let user = promp()
saudar(user, callback)