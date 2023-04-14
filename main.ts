namespace SpriteKind {
    export const object2 = SpriteKind.create()
    export const feedingperson = SpriteKind.create()
    export const feedingperson2 = SpriteKind.create()
    export const feedingperson3 = SpriteKind.create()
    export const feedingperson4 = SpriteKind.create()
    export const feedingperson5 = SpriteKind.create()
    export const food5 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.food5, SpriteKind.Player, function (sprite6, otherSprite6) {
    foodforthehomeless5.follow(player1, 100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson2, function (sprite, otherSprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless2, effects.spray, 500)
        sprites.destroy(foodforthehomeless2, effects.spray, 500)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson, function (sprite22, otherSprite22) {
    info.changeLifeBy(1)
    sprites.destroy(homeless1, effects.spray, 500)
    sprites.destroy(foodforhomeless1, effects.spray, 500)
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
sprites.onOverlap(SpriteKind.food5, SpriteKind.feedingperson5, function (sprite223, otherSprite223) {
    info.changeLifeBy(1)
    sprites.destroy(foodforthehomeless5, effects.spray, 500)
    story.startCutscene(function () {
        game.showLongText("would you like to hear our story?", DialogLayout.Bottom)
        story.showPlayerChoices("yes", "no")
        if (story.checkLastAnswer("yes")) {
            homeless5.sayText(" we had been living in a country that was already dealing with the aftermath of the 2014 annexation of Crimea by Russia. ", 2000, true)
            pause(5000)
            homeless5.sayText("In 2022, when Russia invaded Ukraine again, our life has been severely impacted. ", 2000, true)
            pause(5000)
            homeless5.sayText(" I lived in Ukraine where I have experienced direct military conflict and now been displaced from my home due to the fighting. ", 2000, true)
            pause(5000)
            homeless5.sayText("My daily life has been disrupted by shortages of food, medicine, and other essential supplies. ", 2000, true)
            pause(5000)
            homeless5.sayText("The economic and social consequences of the conflict have made it difficult to maintain a normal life.  ", 2000, true)
            pause(5000)
            homeless5.sayText("Furthermore, we always have felt a sense of fear, anxiety, and uncertainty about the future.", 2000, true)
            pause(5000)
            homeless5.sayText(" The possibility of further violence and escalation of the conflict has made it difficult to plan for the long term.  ", 2000, true)
            pause(5000)
            homeless5.sayText(" The situation continued to deteriorate, we left Ukraine to seek safety and security elsewhere. ", 2000, true)
            pause(5000)
            homeless5.sayText(" However, leaving my home and community had been a difficult decision.", 2000, true)
            pause(5000)
            game.setGameOverMessage(true, "you successfully ended hunger in this area")
        }
        game.setGameOverMessage(true, "you successfully ended hunger in this area")
    })
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    foodforhomeless1.follow(player1, 100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite2, otherSprite2) {
    foodforthehomeless4.follow(player1, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    player1,
    assets.animation`leftt-animation`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson4, function (sprite222, otherSprite222) {
    info.changeLifeBy(1)
    sprites.destroy(homeless4, effects.spray, 500)
    sprites.destroy(foodforthehomeless4, effects.spray, 500)
})
let homeless5: Sprite = null
let homeless4: Sprite = null
let homeless3: Sprite = null
let homeless2: Sprite = null
let homeless1: Sprite = null
let foodforthehomeless5: Sprite = null
let foodforthehomeless4: Sprite = null
let foodforthehomeless3: Sprite = null
let foodforthehomeless2 : Sprite = null
let foodforhomeless1 : Sprite = null
let player1 : Sprite = null
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
foodforthehomeless4 = sprites.create(assets.image`food`, SpriteKind.Food)
foodforthehomeless4.x += -115
foodforthehomeless5 = sprites.create(assets.image`food`, SpriteKind.food5)
foodforthehomeless5.x += -135
player1 = sprites.create(assets.image`player`, SpriteKind.Player)
player1.y += 10
scene.cameraFollowSprite(player1)
player1.sayText("hello volunteer, I am you.", 5000, true)
pause(5000)
player1.sayText("today, you must complete giving food to the poor homeless people and this is your mission now.", 5000, true)
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
homeless4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 6 1 1 1 1 6 f . . . . 
    . . . f 6 1 6 6 6 6 1 6 f . . . 
    . . . f 1 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 3 a a 3 3 d f f . . 
    . . f d d f 3 a a 3 f d d f . . 
    . . . f f 3 a a a a 3 f f . . . 
    . . . f 3 3 a a a a 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.feedingperson4)
homeless4.y += 10
homeless4.x += 95
homeless5 = sprites.create(img`
    . . . . . f f 3 3 f f . . . . . 
    . . . . f 3 3 3 3 3 3 f . . . . 
    . . . f 3 3 3 3 3 3 3 3 f . . . 
    . . f b 3 3 3 3 3 3 3 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.feedingperson5)
homeless5.y += 10
homeless5.x += 115
game.onUpdate(function () {
    player1.x += controller.dx()
})
game.onUpdate(function () {
    if (info.life() == 6) {
        game.setGameOverMessage(true, "you successfully ended hunger in this area")
    }
})
