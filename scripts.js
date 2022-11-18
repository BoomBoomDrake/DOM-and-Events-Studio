window.addEventListener('load', function() {
    const takeOffBtn = document.querySelector('#takeoff');
    const flightStatus = document.querySelector('#flightStatus');

    takeOffBtn.addEventListener('click', function() {
        if (confirm('Confirm that the shuttle is ready for take off.')) {
            flightStatus.innerHTML = `Shuttle in flight`;
        }
    })
})