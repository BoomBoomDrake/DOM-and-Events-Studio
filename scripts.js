window.addEventListener('load', function() {
    const takeOffBtn = document.querySelector('#takeoff')
    takeOffBtn.addEventListener('click', function() {
        confirm('Confirm that the shuttle is ready for take off.');
    })
})