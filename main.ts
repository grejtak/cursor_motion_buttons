input.onButtonPressed(Button.A, function () {
    for (let indexx = 0; indexx <= 4; indexx++) {
        for (let indexy = 0; indexy <= 4; indexy++) {
            if (led.point(indexx, indexy)) {
                led.toggle(indexx, indexy)
                if (indexx > 0) {
                    indexx += -1
                    led.plot(indexx, indexy)
                    break;
                } else {
                    led.plot(4, indexy)
                    break;
                }
                break;
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    for (let indexx = 0; indexx <= 4; indexx++) {
        for (let indexy = 0; indexy <= 4; indexy++) {
            if (led.point(indexx, indexy)) {
                led.toggle(indexx, indexy)
                if (indexx < 4) {
                    indexx += 1
                    led.plot(indexx, indexy)
                    break;
                } else {
                    led.plot(0, indexy)
                    break;
                }
            }
        }
    }
})
basic.clearScreen()
led.plot(randint(0, 4), randint(0, 4))
