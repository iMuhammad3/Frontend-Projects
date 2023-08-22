// VARIABLES

const minEl = document.getElementById('min'),
    secEl = document.getElementById('sec'),
    millEl = document.getElementById('mill')

const startBtn = document.getElementById('start-stop'),
    resetBtn = document.getElementById('reset')

let startTime = 0
let intervalId
let pausedTime = 0
let isRunning = false
let lapNum = 0
let lapValue
let lappedTime

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        // start the stopwatch
        startTime = Date.now() - pausedTime

        intervalId = setInterval(start, 10)
        isRunning = true
        startBtn.classList.add('stop')
        startBtn.innerHTML = 'Stop'
        resetBtn.innerHTML = 'Lap'
        resetBtn.classList.add('lap')
    } else {
        // stop/pause the stopwatch
        stop()
        startBtn.classList.remove('stop')
        startBtn.innerHTML = 'Start'
        resetBtn.innerHTML = 'Reset'
        resetBtn.classList.remove('lap')
    }

})

resetBtn.addEventListener('click', () => {
    if(!isRunning){
        // show and execute 'reset' functions
        stop()
        startBtn.classList.remove('stop')
        startBtn.innerHTML = 'Start'
        reset()
        document.querySelector('.laps table').innerHTML = ''
        lapNum = 0
    } else {
        // show and execute 'lap' functions
        if(lapNum == 0){
            lapValue = Date.now() - startTime
            lappedTime = lapValue
        }else{
            lappedTime = Date.now() - startTime - lapValue
            lapValue = Date.now() - startTime
        }
        lap()
        lapNum++
    }
})


// FUNCTIONS
function start() {
    // get current time of stopwatch
    const currentTime = Date.now() - startTime

    let mill = Math.floor(currentTime % 1000 / 10)
    let sec = Math.floor((currentTime % 60000) / 1000)
    let min = Math.floor(currentTime / 60000)

    millEl.innerHTML = mill < 10 ? `0${mill}` : mill
    secEl.innerHTML = sec < 10 ? `0${sec}` : sec
    minEl.innerHTML = min < 10 ? `0${min}` : min
}

function stop() {
    clearInterval(intervalId)
    // store the time that the stopwatch was paused
    pausedTime = Date.now() - startTime
    isRunning = false
}

function reset() {
    clearInterval(intervalId);
    startTime = 0;
    pausedTime = 0;
    millEl.innerHTML = '00';
    secEl.innerHTML = '00';
    minEl.innerHTML = '00';
    isRunning = false;
}

function lap(){
    const lapRow = document.createElement('tr')
    lapRow.innerHTML = `
    <td>Lap ${lapNum}</td>
    <td>${formatTime(lappedTime)}</td>
    `
    document.querySelector('.laps table').appendChild(lapRow)
}

// format the lapped time to be in 'mm:ss:mm' form
function formatTime(timeInMilliseconds) {
    let milliseconds = Math.floor((timeInMilliseconds % 1000) / 10)
    let seconds = Math.floor((timeInMilliseconds / 1000) % 60)
    let minutes = Math.floor(timeInMilliseconds / 60000)

    milliseconds = milliseconds.toString().padStart(2, '0')
    seconds = seconds.toString().padStart(2, '0')
    minutes = minutes.toString().padStart(2, '0')

    return `${minutes}:${seconds}:${milliseconds}`;
}
