// Enviar uma requisição para um endereço web


// MUDAR SEMPRE NA AULA !!!!
fetch ('http://localhost/PW_CadsAluno/controller.php')
// MUDAR SEMPRE NA AULA !!!!


   //garantir que a respota esta no formato JSON
   .then(
       function (response) {
           return response.json();
       })
   // Realizar as operações que forem de interesse
   .then(function(response){
      response.forEach(aluno => {
           inserirElementoNaTela(aluno);
       });
   }) 

function inserirElementoNaTela(aluno) {
   var box = document.querySelector(".box");
   var linha = document.createElement("p");
   linha.textContent = `Nome: ${aluno.nome} | Média: ${aluno.media}`;
   box.appendChild(linha);
}