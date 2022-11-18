window.addEventListener('load', function() {
    const takeOffBtn = document.querySelector('#takeoff');
    const flightStatus = document.querySelector('#flightStatus');
    const shuttleBackground = document.querySelector('#shuttleBackground');
    const spaceShuttleHeight = document.querySelector('#spaceShuttleHeight');
    const rocket = document.querySelector('#rocket');
    //Initial rocket position, centered.
    rocket.style.position = 'absolute';
    rocket.style.bottom = '0px';
    rocket.style.left = '130px';

    

    takeOffBtn.addEventListener('click', function() {
        if (confirm('Confirm that the shuttle is ready for take off.')) {
            flightStatus.innerHTML = `Shuttle in flight`;
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        }
    })
})