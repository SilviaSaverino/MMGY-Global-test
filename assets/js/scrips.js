const myButton = document.getElementById("explore");

function moveAirplane(){
    const airplane = document.getElementsByClassName('airplane')[0];
    airplane.classList.add('fly');
}

function addBeachBackground() {
    const mainBackground = document.querySelector('.beach-scene');
    mainBackground.classList.add('revealdoors');

    setTimeout(() => {
        const leftDoor = document.getElementById('left-door-img');
        const rightDoor = document.getElementById('right-door-img');

        leftDoor.setAttribute('src', '/assets/images/seethroughL.jpg');
        rightDoor.setAttribute('src', '/assets/images/seethroughR.jpg');
        moveAirplane();
    }, 3000);
}

myButton.addEventListener("click", addBeachBackground);
