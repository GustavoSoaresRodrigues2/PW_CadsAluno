function buscarDados(){

    fetch('http://localhost/PW_CadsAluno/PHPs/controller.php')
    
    .then(function(response){
        return response.json()
    })

    .then(function(response){
        preencherCard(response)
    })
}

function irParadetalhes(){
    console.log(this.src)

    // variaveis url
    /*
    let url = ""
    let param = "?param =" + this.src
    */

    sessionStorage.setItem("aluno", this.src.nome)

    window.location.href = "http://localhost/PW_CadsAluno/descricaoAluno/aluno.html"

}

buscarDados();