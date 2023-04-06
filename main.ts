namespace SpriteKind {
    export const object = SpriteKind.create()
    export const feedingperson = SpriteKind.create()
    export const feedingperson2 = SpriteKind.create()
    export const feedingperson3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless1, effects.spray, 500)
        foodforhomeless.x += -53
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson2, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless2, effects.spray, 500)
        foodforhomeless.x += -53
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`right-animation`,
    200,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`leftt-animation`,
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson3, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless3, effects.spray, 500)
        foodforhomeless.x += -53
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    foodforhomeless.follow(player1, 10)
    pause(200)
    foodforhomeless.follow(player1, 100)
})
let homeless3: Sprite = null
let homeless2: Sprite = null
let homeless1: Sprite = null
let foodforhomeless: Sprite = null
let player1: Sprite = null
scene.setBackgroundImage(assets.image`bg`)
scene.cameraFollowSprite(player1)
info.setLife(1)
let table = sprites.create(assets.image`table`, SpriteKind.object)
table.y += 10
table.x += -60
foodforhomeless = sprites.create(assets.image`food`, SpriteKind.Food)
foodforhomeless.x += -53
player1 = sprites.create(assets.image`player`, SpriteKind.Player)
player1.y += 10
scene.cameraFollowSprite(player1)
player1.sayText("hello volunteer, I am you.", 5000, true)
pause(5000)
player1.sayText("today, you must complete giving food to the poor homeless people before time runs out.", 5000, true)
pause(5000)
player1.sayText("quick, let's begin", 5000, true)
pause(5000)
player1.sayText("they are waiting for us", 2000, true)
homeless1 = sprites.create(assets.image`homeless1`, SpriteKind.feedingperson)
homeless1.x += 55
homeless1.y += 10
homeless2 = sprites.create(assets.image`homeless2`, SpriteKind.feedingperson2)
homeless2.x += 75
homeless2.y += 10
homeless3 = sprites.create(assets.image`homeless3`, SpriteKind.feedingperson3)
homeless3.x += 35
homeless3.y += 10
game.onUpdate(function () {
    player1.x += controller.dx()
})
