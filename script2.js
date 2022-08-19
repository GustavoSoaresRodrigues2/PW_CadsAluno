var box = document.querySelector('.box')
var div = document.querySelector('.container')

for (let index = 0; index < 5; index++) {
    var novaDiv = document.createElement('div')
    novaDiv.innerHTML = box.innerHTML

    novaDiv.classList.add('box')

    div.appendChild(novaDiv)
}