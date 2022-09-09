function buscarDados(){

    fetch('http://localhost/PW_CadsAluno/controller.php')
    
    .then(function(response){
        return response.json()
    })

    .then(function(response){
        console.log(response)
        preencherCard(response)
    })
}

buscarDados();