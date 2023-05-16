/* let nomes = ['mateus','joao'] //arrays
console.log(nomes.pop()) //remove o ultimo elemento
nomes.push('carlos')  //adiciona elemento
console.log(nomes)

*/

let listatarefas = [{
     'descricao':'estudar js', 'local':'casa','hora':'21:00'},{
        'descricao':'estudar css', 'local':'casa','hora':'22:00'},{
       'descricao':'estudar html', 'local':'casa','hora':'2:00'}
]


function addtolist(descricao,local,hora){ 
    let newElement = {'descricao':descricao, 'local':local,'hora':hora} //cria novo objeto conforme os parametros
    listatarefas.push(newElement) //adiciona esse objeto ao array de objetos
    console.log(listatarefas) // imprime o array com o novo objeto
}

addtolist("ler","casa","3 horas")

