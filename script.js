function preencherCard(listarAlunos) {

    var box = document.querySelector('.box')
    var div = document.querySelector('.container')

    for (let index = 0; index < 39; index++) {

        var printAluno = listarAlunos[index]

        // criando uma div
        var novaDiv = document.createElement('div')

        // pegando os elementos da div BOX na div criada
        novaDiv.innerHTML = box.innerHTML

        // colocando uma class na div criada
        novaDiv.classList.add('box')

        // colocando no container
        div.appendChild(novaDiv)

        // inserindo a novaDiv na tela
        novaDiv.children[1].children[0].textContent = printAluno.nome
        novaDiv.children[1].children[1].textContent = printAluno.media
        novaDiv.children[0].src = "./aluno.jpg"
    }
}
