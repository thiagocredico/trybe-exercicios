// index.js

//importanto css
import './style.css'

// Pegando o botão random-dog
const getDogButton = document.querySelector("#random-dog");

// Pegando o botão random-cat
const getCatButton = document.querySelector("#random-cat");

// Pegando o botão surprise me
const surpriseMeButton = document.querySelector("#surprise-me");

// Pegando o elemento de imagem que exibirá a imagem dos pets
const petImage = document.querySelector("#random-pet-image");

getDogButton.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        const petURL = data.message;

        petImage.src = petURL;
    })
});

getCatButton.addEventListener("click", () => {
    fetch("https://aws.random.cat/meow")
      .then((res) => res.json())
      .then((data) => {
        const petURL = data.file;
  
        petImage.src = petURL;
      });
  });

  surpriseMeButton.addEventListener("click", () => {
    Promise.any([
      fetch("https://aws.random.cat/meow"),
      fetch("https://dog.ceo/api/breeds/image/random"),
    ])
      .then((res) => res.json())
      .then((data) => {
        const petURL = data.file || data.message;
  
        petImage.src = petURL;
      });
  });
