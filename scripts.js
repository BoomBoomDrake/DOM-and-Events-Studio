window.addEventListener('load', function() {
    const takeOffBtn = document.querySelector('#takeoff');
    const flightStatus = document.querySelector('#flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.querySelector('#spaceShuttleHeight');
    const rocket = document.querySelector('#rocket');
    const landBtn = document.querySelector('#landing');
    const abortBtn = document.querySelector('#missionAbort');
    const upBtn = document.querySelector('#up');
    const downBtn = document.querySelector('#down');
    const leftBtn = document.querySelector('#left');
    const rightBtn = document.querySelector('#right');
    //Initial rocket position, centered.
    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = '130px';

    

    takeOffBtn.addEventListener('click', function() {
        if (confirm('Confirm that the shuttle is ready for take off.')) {
            flightStatus.innerHTML = `Shuttle in flight`;
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`;
        }
    })

    landBtn.addEventListener('click', function() {
        alert(`The shuttle is landing. Landing gear engaged.`);
        flightStatus.innerHTML = `The shuttle has landed.`;
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = `0px`;  
    })

    abortBtn.addEventListener('click', function () {
        if(confirm(`Confirm that you want to abort mission.`)) {
            flightStatus.innerHTML = `Mission aborted.`;
            shuttleBackground.style.backgroundColor = `green`;
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = `0px`;
        }
    })
    
    upBtn.addEventListener('click', function() {
        if (rocket.style.bottom === `250px`) return

        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000; 
        rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`
    })

    downBtn.addEventListener('click', function() {
        if (spaceShuttleHeight.innerHTML == 0 || rocket.style.bottom == '0px') return

        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        rocket.style.bottom = `${parseInt(rocket.style.bottom) - 10}px`;
    })

    leftBtn.addEventListener('click', function() {
        if (rocket.style.left == `-20px`) return

        rocket.style.left = `${parseInt(rocket.style.left) - 10}px`;
    })

    rightBtn.addEventListener('click', function() {
        if (rocket.style.left == `290px`) return
        rocket.style.left = `${parseInt(rocket.style.left) + 10}px`;
    })
})