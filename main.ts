radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 3000) {
        y = (receivedNumber - 4000) / 5
    } else if (receivedNumber > 1000) {
        x = (receivedNumber - 2000) / 5
    }
})
function anzeige_holen (kanal: number) {
    buchstaben = [
    "M",
    "N",
    "P",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X"
    ]
    return buchstaben[kanal - 30]
}
let buchstaben: string[] = []
let x = 0
let y = 0
let kanal = 30
radio.setGroup(kanal)
basic.showString("" + (anzeige_holen(kanal)))
let motor_rechts = 0
let motor_links = 0
let faktor = 4
let blinkfarbe = true
let pause2 = 0
loops.everyInterval(500, function () {
    if (blinkfarbe) {
        calliBot2.setRgbLed1(C2RgbLed.All, 0xff0000, 8)
    } else {
        calliBot2.setRgbLed1(C2RgbLed.All, 0x00ff00, 8)
    }
    blinkfarbe = !(blinkfarbe)
})
basic.forever(function () {
    if (calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an) || calliBot2.readBumperSensor(C2Sensor.links, C2State.an)) {
        pause2 = input.runningTime() + 1000
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 31)
        basic.pause(500)
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
    if ((Math.abs(x) > 1 || Math.abs(y) > 1) && input.runningTime() > pause2) {
        if (x >= 0) {
            x = Math.sqrt(Math.abs(x)) * faktor
        } else {
            x = Math.sqrt(Math.abs(x)) * faktor * -1
        }
        if (y >= 0) {
            y = Math.sqrt(Math.abs(y)) * faktor
        } else {
            y = Math.sqrt(Math.abs(y)) * faktor * -1
        }
        motor_links = (x + y) * -1
        motor_rechts = (y - x) * -1
        if (motor_links >= 0) {
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, motor_links)
        } else {
            calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, Math.abs(motor_rechts))
        }
        if (motor_rechts >= 0) {
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, motor_rechts)
        } else {
            calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, Math.abs(motor_links))
        }
    } else {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
    }
})
