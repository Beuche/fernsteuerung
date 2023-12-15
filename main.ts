radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 3000) {
        y = receivedNumber - 4000
    } else if (receivedNumber > 1000) {
        x = receivedNumber - 2000
    }
    x = x / 5
    y = y / 5
    if (x < 0) {
        if (y < 0) {
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, Math.abs(x) + y)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, Math.abs(x))
        } else {
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, Math.abs(x) - y)
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, Math.abs(x))
        }
    }
})
let x = 0
let y = 0
radio.setGroup(1)
basic.forever(function () {
	
})
