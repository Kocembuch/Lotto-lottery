const button = document.querySelector(".pick");
const btnDelete = document.querySelector(".delete");
const btnRelease = document.querySelector(".release");
const btnStop = document.querySelector(".stop");
const result = [];
const container = document.querySelector(".container");
const balls = document.querySelector(".balls");
const fakeBalls = [...document.querySelectorAll(".fakeBall")];

//RELEASE PIŁEK
const releaseBalls = () => {
    console.log('zaraz puszczę kulki');
    fakeBalls.forEach((item) => {
        item.style.animation = "ballRelease .5s linear both"
    })

    //DAJEMY ANIMACJĘ PIŁKOM FAKOWYM
    fakeBalls[0].style.animation = "ballRelease .5s linear both, ballChaos0 6s 1s linear infinite";
    fakeBalls[1].style.animation = "ballRelease .5s linear both, ballChaos1 3.5s 1.2s linear infinite";
    fakeBalls[2].style.animation = "ballRelease .5s linear both, ballChaos2 3s 1s linear infinite";
    fakeBalls[3].style.animation = "ballRelease .5s linear both, ballChaos3 4s 1.1s linear infinite";
    fakeBalls[4].style.animation = "ballRelease .5s linear both, ballChaos1 4s 1.4s reverse linear infinite";
    fakeBalls[5].style.animation = "ballRelease .5s linear both, ballChaos5 4s 1.8s linear infinite";
    fakeBalls[6].style.animation = "ballRelease .5s linear both, ballChaos2 3s 1.5s linear infinite";
    fakeBalls[7].style.animation = "ballRelease .5s linear both, ballChaos0 7s 1.2s reverse linear infinite";
    fakeBalls[8].style.animation = "ballRelease .5s linear both, ballChaos5 5s 1.8s linear reverse infinite";
    fakeBalls[9].style.animation = "ballRelease .5s linear both, ballChaos3 6s 1.2s reverse linear infinite";

    btnRelease.classList.toggle("hide");
    btnStop.classList.toggle("hide");

}

btnRelease.addEventListener("click", releaseBalls);

btnStop.addEventListener("click", () => {
    fakeBalls.forEach((item) => {
        console.log('zatrzymuję piłki');
        item.style.animationPlayState = "paused";
    })
    btnRelease.classList.toggle("hide");
    btnStop.classList.toggle("hide");
})

//LOSOWANIE PIŁEK
const pickBall = function () {

    if (result.length === 5) {
        // btnDelete.classList.toggle("hide");
    }

    if (result.length === 6) {
        // btnDelete.classList.toggle("hide");
        // button.removeEventListener("click", pickBall)
        return
    }

    const pickedNumber = Math.floor(Math.random() * 49 + 1);

    for (let i = 0; i < result.length; i++) {
        if (pickedNumber === result[i]) {
            return pickBall();
        }
    }

    // console.log('losuję');
    // console.log(result.length);

    const div = document.createElement("div");
    div.classList.add("ball")
    div.textContent = pickedNumber;
    div.style.animation = "ballAnime 2s linear"
    // div.style.left = "20px";

    // for (let i = 0; i < result.length; i++) {
    //     result[i].style.color = "red";
    //     let position = 0;
    //     position += 10 + "px";
    //     result[i].style.marginLeft = position;
    //     position += 20 + "px";
    // }

    result.push(pickedNumber);

    balls.appendChild(div);


    const deleteAll = () => {
        // console.log('dziaøa');
        balls.removeChild(div);
        result.length = 0;
        // return pickBall();
        button.addEventListener("click", pickBall);
        // btnDelete.classList.toggle("hide");

    }

    btnDelete.addEventListener("click", deleteAll);


}

button.addEventListener("click", pickBall);

//LOSOWANIE POZYCJI RANDOMOWEJ

// const pickPosition = () => {

// }

// setInterval(() => {
//     let positionX = Math.floor(Math.random() * 99 + 1) + "vw";
//     let positionY = Math.floor(Math.random() * 99 + 1) + "%";
//     console.log(positionX, positionY);

//     document.documentElement.style.setProperty('--positionX', positionX);
//     document.documentElement.style.setProperty('--positionY', positionY);
// }, 1000);