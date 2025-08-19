input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
function NuevoEnemigo () {
    enemigo = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(300)
        enemigo.change(LedSpriteProperty.Y, 1)
    }
}
let enemigo: game.LedSprite = null
let player: game.LedSprite = null
player = game.createSprite(2, 4)
game.setScore(0)
NuevoEnemigo()
basic.forever(function () {
    if (player.isTouching(enemigo)) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpDown), music.PlaybackMode.InBackground)
        game.gameOver()
    }
    game.addScore(1)
    enemigo.delete()
    NuevoEnemigo()
})
