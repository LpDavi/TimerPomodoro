import {
    play,
    pause,
    stop, 
    resetBttnSounds,
    addMinutes,
    lessMinutes
} from "./controls.js"

import Timer from "./timer.js"

import Sound from "./sounds.js"

//Botões do Timer
const bttnPlay = document.querySelector('.play')
const bttnPause = document.querySelector('.pause')
const bttnStop = document.querySelector('.stop')
const bttnAdd = document.querySelector('.add')
const bttnLess = document.querySelector('.less')

//Botões dos sons
const bttnForest = document.querySelector('.forest')
const bttnRain = document.querySelector('.rain')
const bttnCoffeeShop = document.querySelector('.coffeeShop')
const bttnFireplace = document.querySelector('.fireplace')

//Botões dos números
const setMinutes = document.querySelector('.minutes')
const setSeconds = document.querySelector('.seconds')

//Passando dependencias das factores
const sound = Sound()
const timer = Timer({ setMinutes, setSeconds })


bttnPlay.addEventListener('click', () => {
    play()
    timer.countDown()
})

bttnPause.addEventListener('click', () => {
    pause()
    timer.pauseTimer()
})

bttnStop.addEventListener('click', () => {
    stop()
    resetBttnSounds()
    Sound().pressbuttonAudio()
    sound.stopSound()
    timer.resetTimer()
})

bttnAdd.addEventListener('click', () => {
    addMinutes()
    timer.limitOfTimeMax()
})

bttnLess.addEventListener('click', () => {
    lessMinutes()
    timer.limitOfTimeMin()
})

//SONDS-BUTTONS
bttnForest.addEventListener('click', () => {
    bttnForest.classList.toggle('select')
    bttnRain.classList.toggle('discreet')
    bttnCoffeeShop.classList.toggle('discreet')
    bttnFireplace.classList.toggle('discreet')

    sound.pressBttnForest()
})

bttnRain.addEventListener('click', () => {
    bttnRain.classList.toggle('select')
    bttnForest.classList.toggle('discreet')
    bttnCoffeeShop.classList.toggle('discreet')
    bttnFireplace.classList.toggle('discreet')

    sound.pressBttnRain()
})

bttnCoffeeShop.addEventListener('click', () => {
    bttnCoffeeShop.classList.toggle('select')
    bttnForest.classList.toggle('discreet')
    bttnRain.classList.toggle('discreet')
    bttnFireplace.classList.toggle('discreet')

    sound.pressBttnCoffeeShop()
})

bttnFireplace.addEventListener('click', () => {
    bttnFireplace.classList.toggle('select')
    bttnForest.classList.toggle('discreet')
    bttnRain.classList.toggle('discreet')
    bttnCoffeeShop.classList.toggle('discreet')

    sound.pressBttnFireplace()
})

export {
    bttnPlay,
    bttnPause,
    bttnStop,
    bttnAdd,
    bttnLess,
    bttnForest,
    bttnRain,
    bttnCoffeeShop,
    bttnFireplace,
    setMinutes,
    setSeconds,
    sound
}