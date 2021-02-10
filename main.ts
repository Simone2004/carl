controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    carletti.startEffect(effects.confetti, 500)
    animation.runImageAnimation(
    carletti,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f f e e e e e f . f f 
        . . f d b f e e f f e e f . e f 
        . f f d d f e f f e e e f . e f 
        . f f f f f f e b b f e f f e f 
        . f d d f e e e d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d e e f . . . . 
        . . f f f d d f f d e f f . . . 
        . c d d e e d d d d e d d f . . 
        . c c d d d d c d d e d f f f . 
        . c d c c c c d d d e d f b d f 
        . . c d d d d d d e e f f d d f 
        . . . c d d d d e e f f e f f f 
        . . . . f f f e e f e e e f . . 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f e e f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f d d d d d d e f . . . . 
        . . f d f f d d f f d f f . . . 
        . c d d d e e d d d d e d f . . 
        . c d c d d d d c d d e f f . . 
        . c d d c c c c d d d e f f f f 
        . . c d d d d d d d e f f b d f 
        . . . c d d d d e e f f f d d f 
        . . . . f f f e e f e e e f f f 
        . . . . f e e e e e e e f f f . 
        . . . f e e e e e e f f f e f . 
        . . f f e e e e f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f f f d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d d d d e e f f . . . . 
        . c d d d f f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c f f d d c d d e e b d c . . . 
        f d d f e f f f e e e f . . . . 
        f d d f e e e f f f f f . . . . 
        f f f f f e e e e e f f . f f . 
        . f f f e f f e e e f f . e f . 
        . f b d f e f f b b f f f e f . 
        . f d d f e e f d d b f f e f . 
        . f f f f f f f f f f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . . f d d f d d e e f f . . . . 
        . c d d d f d d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c f f f f d d d e e f c f . . . 
        . f b d f f f e e e e f . . . . 
        . f d d f e f f f e e f . . . . 
        . . f f f e e e e f f f . f f . 
        . . f e e f e e e e f f . e f . 
        . f f e e e f f f f f f f e f . 
        . f b d f e e f b b f f f e f . 
        . f d d f f e e d d b f f f f . 
        . f f f f f f f f f f f f f . . 
        `],
    100,
    false
    )
    mela = sprites.createProjectileFromSprite(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, carletti, -23, -24)
})
let colcone: Sprite = null
let mela: Sprite = null
let carletti: Sprite = null
scene.setBackgroundColor(15)
carletti = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(carletti, 100, 0)
carletti.setPosition(80, 112)
carletti.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    colcone = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . f f . 
        . . . 4 5 5 f f 5 5 6 f f 5 f . 
        . . . f 6 6 6 6 6 6 4 f 5 5 f . 
        . . . f 5 5 5 5 5 5 5 4 5 f . . 
        . . . . f 5 4 5 f 5 f f f . . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.Enemy)
    colcone.setPosition(0, 0)
    colcone.setVelocity(50, 50)
})
