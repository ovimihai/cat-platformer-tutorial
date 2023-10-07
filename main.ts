controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (cat.vy == 0) {
        cat.vy = -180
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile3`, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile2`, function (sprite, location) {
    game.gameOver(false)
})
let cat: Sprite = null
scene.setBackgroundColor(13)
cat = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . f f f f f f f f f f f . . 
    . . . f f f f f f f f f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . f . f . . . . f . f . . . 
    . . . f . f . . . . f . f . . . 
    . . . f . f . . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
cat.setPosition(30, 35)
controller.moveSprite(cat, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(cat)
cat.ay = 350
