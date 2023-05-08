const myButton = document.getElementById("explore");


function toggleVideoPlayer() {
    var videoContainer = document.getElementsByClassName("containerVideo")[0];
    let ctaButton = document.getElementsByClassName('ctaButton')[0];
    videoContainer.style.display = "block";
    ctaButton.style.display= "none";
  }

function zoomingCTAbutton(){
    let ctaButton = document.getElementsByClassName('ctaButton')[0];
    setTimeout(function() {
        ctaButton.style.opacity = 1;
        ctaButton.style.zIndex = 6;
        ctaButton.classList.add('zoom');
    }, 3000); 
}

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

        leftDoor.setAttribute('src', '/MMGY-Global-test/assets/images/seethroughL.jpg');
        rightDoor.setAttribute('src', '/MMGY-Global-test/assets/images/seethroughR.jpg');
        moveAirplane();
    }, 3000);
}


function hideExploreButton() {
    hide=document.getElementById('explore');
    hide.style.display= 'none';
}

myButton.addEventListener("click", addBeachBackground);
myButton.addEventListener("click", hideExploreButton);
myButton.addEventListener("click", zoomingCTAbutton);
