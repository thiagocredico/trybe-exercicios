let fullCourt = document.getElementById("full-court");
let hitsMistakes = document.getElementById("hits-mistakes");
let clearBtn = document.getElementById("clear-btn");
let allShots = document.getElementById("all-shots");
// console.log(fullCourt);

let selectedColor;
let shot;

hitsMistakes.addEventListener("click", (press) => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.innerText);
    if (press.target.innerText === "ACERTOS") {
        selectedColor = "green";
        shot = "Acertou";
    }
    if (press.target.innerText === "ERROS") {
        selectedColor = "red";
        shot = "Errou";
    }
    console.log(press);
});

fullCourt.addEventListener("click", (event) => {
    if (shot !== undefined) {
        //adicionar um acerto ou erro à quadra funcaoQueCriaAcertouOuErro()
        addShotToCourt(event)
    } else {
        alert("Escolha uma cor primeiro");
    }
    // nada acontece
});

const addShotToCourt = (event) => {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = `${event.pageY}px`;
    div.style.left = `${event.pageX}px`;
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = selectedColor;
    allShots.appendChild(div);
    saveShots(event.pageX, event.pageY);
}

const saveShots = (x, y) => {
    // if(localStorage.length === 0){
    // localStorage.setItem("1", `X:${x}, Y:${y} - ${shot}`);
    // }
    localStorage.setItem(`${localStorage.length + 1}`, `X:${x}, Y:${y} - ${shot}`);
    localStorage.setItem("mapOfShots", allShots.innerHTML);
}

const reloadShots = () => {
    allShots.innerHTML = localStorage.getItem("mapOfShots");
}

clearBtn.addEventListener("click", () => {
    localStorage.clear();
    location.reload();
})

window.onload = () => {
    reloadShots();
}
