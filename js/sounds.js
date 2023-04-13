export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const bgAudioForest = new Audio("./audio/Forest.wav")
    const bgAudioRain = new Audio("./audio/Rain.wav")
    const bgAudioCoffeeShop = new Audio("./audio/CoffeeShop.wav")
    const bgAudioFireplace = new Audio("./audio/Fireplace.wav")

    function pressBttnForest() {
        if(bgAudioForest.paused) {
            bgAudioForest.play()
        } else {
            bgAudioForest.pause()
        }
    }

    function pressBttnRain() {
        if(bgAudioRain.paused) {
            bgAudioRain.play()
        } else {
            bgAudioRain.pause()
        }
    }

    function pressBttnCoffeeShop() {
        if(bgAudioCoffeeShop.paused) {
            bgAudioCoffeeShop.play()
        } else {
            bgAudioCoffeeShop.pause()
        }
    }
    
    function pressBttnFireplace() {
        if(bgAudioFireplace.paused) {
            bgAudioFireplace.play()
        } else {
            bgAudioFireplace.pause()
        }
    }

    function pressbuttonAudio() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }

    function stopSound() {
        bgAudioForest.pause()
        bgAudioRain.pause()
        bgAudioCoffeeShop.pause()
        bgAudioFireplace.pause()
    }
    
    return {
        pressBttnForest,
        pressBttnRain,
        pressBttnCoffeeShop,
        pressBttnFireplace,
        timeEnd,
        pressbuttonAudio,
        stopSound
    }
}