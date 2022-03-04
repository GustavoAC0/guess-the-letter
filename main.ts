function thirdQuestion (text: string) {
    if (thirdLetter == "d") {
        game.splash(text, game.runtime())
        game.over(true, effects.confetti)
    } else {
        game.over(false)
    }
}
function Second_Question () {
    if (secondLetter == "o") {
        thirdLetter = game.askForString("Ar_uous")
    } else {
        game.over(false)
    }
}
function firstQuestion () {
    firstLetter = game.askForString("_ame")
    if (firstLetter == "g") {
        secondLetter = game.askForString("Ir_nic")
    } else if (firstLetter == "G") {
        secondLetter = game.askForString("Ir_nic")
    } else {
        game.over(false)
    }
}
let firstLetter = ""
let secondLetter = ""
let thirdLetter = ""
for (let index = 0; index < 1; index++) {
    game.splash("Guess")
    pause(100)
    game.splash("The")
    pause(100)
    game.splash("Letter")
    pause(100)
}
firstQuestion()
Second_Question()
thirdQuestion("Your time")
