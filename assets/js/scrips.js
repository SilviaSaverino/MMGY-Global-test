const myButton = document.getElementById("explore");

function addBeachBackground() {
    const mainBackground = document.querySelector('.idbeach');
    mainBackground.classList.add('revealdoors');

    setTimeout(() => {
        const leftDoor = document.getElementById('leftdoorimg');
        const rightDoor = document.getElementById('rightdoorimg');

        leftDoor.setAttribute('src', '/assets/images/seethroughL.jpg');
        rightDoor.setAttribute('src', '/assets/images/seethroughR.jpg');
        moveAirplane();
    }, 3000);
}

myButton.addEventListener("click", addBeachBackground);
