namespace SpriteKind {
    export const Ayudante = SpriteKind.create()
}
function establecerAyudante () {
    Ayudante = sprites.create(assets.image`miImagen`, SpriteKind.Ayudante)
    Ayudante.ay = 0
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dash.vy == 0) {
        Dash.vy = -100
    }
})
let Ayudante: Sprite = null
let Dash: Sprite = null
scene.setBackgroundImage(assets.image`Ala`)
Dash = sprites.create(assets.image`Cubo`, SpriteKind.Player)
controller.moveSprite(Dash, 30, 0)
Dash.setStayInScreen(true)
Dash.setPosition(0, 0)
Dash.ay = 100
tiles.setCurrentTilemap(tilemap`nivel3`)
establecerAyudante()
game.onUpdate(function () {
    Ayudante.setPosition(Ayudante.x + (Dash.x - 20 - Ayudante.x) / 5, Ayudante.y + (Dash.y - 20 - Ayudante.y) / 5)
})
