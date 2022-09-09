function preencherCard(listarAlunos) {

    var box = document.querySelector('.box')
    var div = document.querySelector('.container')

    for (let index = 0; index < listarAlunos.length; index++) {

        var printAluno = listarAlunos[index]

        // criando uma div
        var novaDiv = document.createElement('div')

        // pegando os elementos da div BOX na div criada
        novaDiv.innerHTML = box.innerHTML

        // colocando uma class na div criada
        novaDiv.classList.add('box')

        // variaveis para inserir a novaDiv na tela
        var p1 = novaDiv.children[1].children[0]
        var p2 = novaDiv.children[1].children[1]
        var imgAluno = novaDiv.children[0]

        // inserindo a novaDiv na tela
        p1.textContent = "Nome: " + printAluno.nome
        p2.textContent = "Média: " + printAluno.media
        imgAluno.src = "./aluno.jpg"

        // printando a novaDiv
        div.appendChild(novaDiv)
    }
}
