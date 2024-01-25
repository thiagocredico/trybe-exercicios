window.onload = () => {
    let button = document.querySelector("#start-race-btn");

    let car1 = document.querySelector("#player1");
    let car2 = document.querySelector("#player2");

    resetCars(car1, car2);

    button.addEventListener("click", () => {
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px'; //'50px'+'50px'
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';

        let car1Win = parseInt(car1.style.marginLeft) > window.innerWidth
        let car2Win = parseInt(car2.style.marginLeft) > window.innerWidth

        if(car1Win){
            alert("PLAYER-1 VENCEU");
            addWinToLocalStorage(car1.className)
            resetCars(car1, car2);
        }
        if(car2Win){
            alert("PLAYER-2 VENCEU");
            addWinToLocalStorage(car2.className)
            resetCars(car1, car2);
        }
    });


    let carSelected = 1
    let alternatives = document.querySelector(".alternatives");
    let playerText = document.querySelector("#selectPlayer");

    alternatives.addEventListener("click", (event) => {
        let captura = event.target.className;
        console.log(captura);

        if(carSelected === 1){
            car1.className = captura;
            carSelected = 2;
            playerText.innerText = "PLAYER 2"
            addClassToLocalStorage(carSelected, captura);
        }else{
            car2.className = captura
            carSelected = 1;
            playerText.innerText = "PLAYER 1"
            addClassToLocalStorage(carSelected, captura);
        }
        
    } );

    checkKey(car1, car2);
}

function resetCars(player1, player2){
    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;
    addWinToPage()
};

function checkKey(car1, car2){
    if(localStorage.getItem("player1") === null){
        localStorage.setItem("player1", "startCar");
        localStorage.setItem("player2", "startCar");

        let scores = ['yoshiScore', 'marioScore', 'luigiScore', 'peachScore']
        for(let score of scores){
            localStorage.setItem(score, 0);
        }

    } else {
        car1.className = localStorage.getItem("player1");
        car2.className = localStorage.getItem("player2");
    };
};

function addClassToLocalStorage(carSelected, capturedClass){
    if(carSelected === 1){
        localStorage.setItem("player1", capturedClass);
    } 
        localStorage.setItem("player2", capturedClass);
    
};

function addWinToLocalStorage(className){
    switch (className){
        case "alternative-car1" :
            let yoshiWin = JSON.parse(localStorage.getItem("yoshiScore"));
            localStorage.setItem("yoshiScore", yoshiWin + 1);
            break
        case "alternative-car2" :
            let marioWin = JSON.parse(localStorage.getItem("marioScore"));
            localStorage.setItem("marioScore", marioWin + 1);
            break
        case "alternative-car3" :
            let luigiWin = JSON.parse(localStorage.getItem("luigiScore"));
            localStorage.setItem("luigiScore", luigiWin + 1);
            break
        case "alternative-car4" :
            let peachWin = JSON.parse(localStorage.getItem("peachScore"));
            localStorage.setItem("peachScore", peachWin + 1);
            break
    };
};

function addWinToPage() {
    let score1 = document.querySelector("#score1");
    score1.innerText = localStorage.getItem("yoshiScore");

    let score2 = document.querySelector("#score2");
    score2.innerText = localStorage.getItem("marioScore");

    let score3 = document.querySelector("#score3");
    score3.innerText = localStorage.getItem("luigiScore");

    let score4 = document.querySelector("#score4");
    score4.innerText = localStorage.getItem("peachScore");
}




