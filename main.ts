controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Dash.vy == 0) {
        Dash.vy = -100
    }
})
let Dash: Sprite = null
scene.setBackgroundImage(assets.image`Ala`)
Dash = sprites.create(assets.image`Demoniado`, SpriteKind.Player)
controller.moveSprite(Dash, 30, 0)
Dash.setStayInScreen(true)
Dash.setPosition(0, 0)
Dash.ay = 100
tiles.setCurrentTilemap(tilemap`nivel3`)
