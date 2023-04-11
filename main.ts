namespace SpriteKind {
    export const object2 = SpriteKind.create()
    export const feedingperson = SpriteKind.create()
    export const feedingperson2 = SpriteKind.create()
    export const feedingperson3 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless2, effects.spray, 500)
        sprites.destroy(foodforthehomeless2, effects.spray, 500)
    }
    game.setGameOverMessage(true, "you successfully ended hunger in this area")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite4, otherSprite4) {
    foodforthehomeless3.follow(player1, 100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite4, otherSprite4) {
    foodforthehomeless2.follow(player1, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`right-animation`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson3, function (sprite3, otherSprite3) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless3, effects.spray, 500)
        sprites.destroy(foodforthehomeless3, effects.spray, 500)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson2, function (sprite22, otherSprite22) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless1, effects.spray, 500)
        sprites.destroy(foodforhomeless1, effects.spray, 500)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite2, otherSprite2) {
    foodforhomeless1.follow(player1, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`leftt-animation`,
    200,
    true
    )
})
let homeless3: Sprite = null
let homeless2: Sprite = null
let homeless1: Sprite = null
let foodforthehomeless3: Sprite = null
let foodforthehomeless2: Sprite = null
let foodforhomeless1: Sprite = null
let player1: Sprite = null
story.startCutscene(function () {
    game.showLongText("would you like to be a humanitarian volunteer?", DialogLayout.Bottom)
    story.showPlayerChoices("Yes", "no")
    if (story.checkLastAnswer("Yes")) {
        game.showLongText("let's go ", DialogLayout.Bottom)
    } else {
        game.showLongText("you didn't want to be be a volunteer", DialogLayout.Bottom)
        game.gameOver(false)
    }
})
scene.setBackgroundImage(assets.image`bg`)
scene.cameraFollowSprite(player1)
info.setLife(1)
let table1 = sprites.create(assets.image`table`, SpriteKind.object2)
table1.y += 10
table1.x += -65
let table2 = sprites.create(assets.image`table`, SpriteKind.object2)
table2.x += -95
table2.y += 10
let table3 = sprites.create(assets.image`table`, SpriteKind.object2)
table3.x += -125
table3.y += 10
foodforhomeless1 = sprites.create(assets.image`food`, SpriteKind.Food)
foodforhomeless1.x += -65
foodforthehomeless2 = sprites.create(assets.image`food`, SpriteKind.Food)
foodforthehomeless2.x += -95
foodforthehomeless3 = sprites.create(assets.image`food`, SpriteKind.Food)
foodforthehomeless3.x += -125
player1 = sprites.create(assets.image`player`, SpriteKind.Player)
player1.y += 10
scene.cameraFollowSprite(player1)
// player1.say_text("hello volunteer, I am you.", 5000, True)
// pause(5000)
// player1.say_text("today, you must complete giving food to the poor homeless people before time runs out.",
// 5000,
// True)
// pause(5000)
// player1.say_text("quick, let's begin", 5000, True)
// pause(5000)
// player1.say_text("they are waiting for us", 2000, True)
homeless1 = sprites.create(assets.image`homeless1`, SpriteKind.feedingperson)
homeless1.x += 55
homeless1.y += 10
homeless2 = sprites.create(assets.image`homeless2`, SpriteKind.feedingperson2)
homeless2.x += 75
homeless2.y += 10
homeless3 = sprites.create(assets.image`homeless3`, SpriteKind.feedingperson3)
homeless3.x += 35
homeless3.y += 10
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap6(sprite5: Sprite, otherSprite5: Sprite) {
    foodforthehomeless2.follow(player1, 100)
})
game.onUpdate(function () {
    player1.x += controller.dx()
})
