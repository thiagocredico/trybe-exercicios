window.onload = () => {
    let button = document.querySelector("#start-race-btn");

    let car1 = document.querySelector("#player1");
    let car2 = document.querySelector("#player2");

    car1.style.marginLeft = 0;//'0px'
    car2.style.marginLeft = 0;

    button.addEventListener("click", () => {
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px'; //'50px'+'50px'
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px';

        let car1Win = parseInt(car1.style.marginLeft) > window.innerWidth
        let car2Win = parseInt(car2.style.marginLeft) > window.innerWidth

        if(car1Win){
            alert("PLAYER-1 VENCEU");
        }
        if(car2Win){
            alert("PLAYER-2 VENCEU");
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
        }else{
            car2.className = captura
            carSelected = 1;
            playerText.innerText = "PLAYER 1"
        }
        
    } )
}
