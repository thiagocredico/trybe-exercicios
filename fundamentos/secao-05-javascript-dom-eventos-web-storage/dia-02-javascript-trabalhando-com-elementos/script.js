//Onde eu quero adicionar esse elemento?
const container = document.getElementById("first");
// console.log(container);
//Como criar um elemento HTML?
let newDiv = document.createElement('div');
//Como adicionar classes neste elemento?
newDiv.className = 'green square small';
// console.log(newDiv);
//Como pôr o elemento no arquivo HTML?
// container.appendChild(newDiv);
//Como remover um elemento?
// container.removeChild(newDiv)

// let newDiv1 = document.createElement('div');
// let newDiv2 = document.createElement('div');

// newDiv1.className = "red circle big";
// newDiv2.className = "yellow circle medium";

// container.appendChild(newDiv1);
// container.appendChild(newDiv2);

//Criar uma função que recebe uma string e retorna
//uma div que possui essa string como classe

function creatDivElement(string){
    let newDiv = document.createElement('div');
    newDiv.className = string;
    container.appendChild(newDiv);
};

let features = ["red circle big", "yellow circle medium", 'green square small'];

for (let feature of features){
    creatDivElement(feature);
}