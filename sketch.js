const body = document.querySelector('body');
const container = document.getElementById('container');
let value = prompt('enter a number');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    remove();
    var value = prompt('enter a number for the grid');
    createGrid(value);

});


function createGrid(x){
    container.style.height = x * 20 + 'px';
    container.style.width = x * 20 + 'px';
    for(let i = 0; i < x * x; i++){
        var div = document.createElement('div');
        div.setAttribute('class', 'etch');
        container.appendChild(div);
    }
    paintGrid();
}
createGrid(value);
 function paintGrid() {
    let etch = document.querySelectorAll('div.etch');
    etch.forEach(elem => {
    elem.addEventListener('mouseover', changeColor);
    });
}

function changeColor() {
    this.style.backgroundColor = 'coral';
}

function remove() {
    container.textContent = '';
}