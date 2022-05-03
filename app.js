let hours = `00`,
    minutes = `00`,
    seconds =  `00`,

    chronometerDisplay1 = document.querySelector(`[data-chronometer-hours]`),
    chronometerDisplay2 = document.querySelector(`[data-chronometer-minutes]`),
    chronometerDisplay3 = document.querySelector(`[data-chronometer-seconds]`),

    chronometerCall

function chronometer() {

    seconds ++

    if (seconds < 10) seconds = `0` + seconds

    if (seconds > 59) {
    seconds = `00`
    minutes ++

    if (minutes < 10) minutes = `0` + minutes
    }

    if (minutes > 59) {
    minutes = `00`
    hours ++
    
    if (hours < 10) hours = `0` + hours
    }

    chronometerDisplay1.textContent = `${hours}`
    chronometerDisplay2.textContent = `${minutes}`
    chronometerDisplay3.textContent = `${seconds}`


}

    play.onclick = (event) => {
    chronometerCall = setInterval(chronometer, 1000)
    event.target.setAttribute(`disabled`,``)
}

    pause.onclick = () => {
    clearInterval(chronometerCall)
    play.removeAttribute(`disabled`)
}

reset.onclick = () => {
    clearInterval(chronometerCall)
    play.removeAttribute(`disabled`)
    chronometerDisplay1.textContent = `00`
    chronometerDisplay2.textContent = `00` 
    chronometerDisplay3.textContent = `00` 

    


    hours = `00`,
    minutes = `00`,
    seconds = `00`
}    




