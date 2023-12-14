radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 3000) {
        y = receivedNumber - 4000
    } else if (receivedNumber > 1000) {
        x = receivedNumber - 2000
    }
    if (x >= 0) {
        _4Digit.point(false)
    } else {
        _4Digit.point(true)
    }
    _4Digit.show(Math.abs(x))
})
let x = 0
let y = 0
let _4Digit: grove.TM1637 = null
_4Digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4Digit.set(7)
radio.setGroup(1)
basic.forever(function () {
	
})
