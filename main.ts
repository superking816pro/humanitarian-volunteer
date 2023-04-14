namespace SpriteKind {
    export const object2 = SpriteKind.create()
    export const feedingperson = SpriteKind.create()
    export const feedingperson2 = SpriteKind.create()
    export const feedingperson3 = SpriteKind.create()
    export const feedingperson4 = SpriteKind.create()
    export const feedingperson5 = SpriteKind.create()
    export const food5 = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.food5, SpriteKind.Player, function on_on_overlap(sprite6: Sprite, otherSprite6: Sprite) {
    foodforthehomeless5.follow(player1, 100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson2, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless2, effects.spray, 500)
        sprites.destroy(foodforthehomeless2, effects.spray, 500)
    }
    
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson, function on_on_overlap3(sprite22: Sprite, otherSprite22: Sprite) {
    info.changeLifeBy(1)
    sprites.destroy(homeless1, effects.spray, 500)
    sprites.destroy(foodforhomeless1, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap4(sprite4: Sprite, otherSprite4: Sprite) {
    foodforthehomeless3.follow(player1, 100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function on_on_overlap5(sprite42: Sprite, otherSprite42: Sprite) {
    foodforthehomeless2.follow(player1, 100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    animation.runImageAnimation(player1, assets.animation`
            right-animation
        `, 200, true)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson3, function on_on_overlap6(sprite3: Sprite, otherSprite3: Sprite) {
    if (true) {
        info.changeLifeBy(1)
        sprites.destroy(homeless3, effects.spray, 500)
        sprites.destroy(foodforthehomeless3, effects.spray, 500)
    }
    
})
sprites.onOverlap(SpriteKind.food5, SpriteKind.feedingperson5, function on_on_overlap7(sprite223: Sprite, otherSprite223: Sprite) {
    info.changeLifeBy(1)
    sprites.destroy(foodforthehomeless5, effects.spray, 500)
    story.startCutscene(function on_start_cutscene() {
        game.showLongText("would you like to hear our story?", DialogLayout.Bottom)
        story.showPlayerChoices("yes", "no")
        if (story.checkLastAnswer("yes")) {
            homeless5.sayText(" we had been living in a country that was already dealing with the aftermath of the 2014 annexation of Crimea by Russia. In 2022, when Russia invaded Ukraine again, our life has been severely impacted.  I lived in Ukraine where I have experienced direct military conflict and now been displaced from my home due to the fighting. My daily life has been disrupted by shortages of food, medicine, and other essential supplies. The economic and social consequences of the conflict have made it difficult to maintain a normal life.  Furthermore, we always have felt a sense of fear, anxiety, and uncertainty about the future. The possibility of further violence and escalation of the conflict has made it difficult to plan for the long term.  The situation continued to deteriorate, we left Ukraine to seek safety and security elsewhere. However, leaving my home and community had been a difficult decision.", 2000, true)
        }
        
    })
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function on_on_overlap8(sprite2: Sprite, otherSprite2: Sprite) {
    foodforhomeless1.follow(player1, 100)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function on_on_overlap9(sprite23: Sprite, otherSprite23: Sprite) {
    foodforthehomeless4.follow(player1, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    animation.runImageAnimation(player1, assets.animation`
            leftt-animation
        `, 200, true)
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.feedingperson4, function on_on_overlap10(sprite222: Sprite, otherSprite222: Sprite) {
    info.changeLifeBy(1)
    sprites.destroy(homeless4, effects.spray, 500)
    sprites.destroy(foodforthehomeless4, effects.spray, 500)
})
let homeless5 : Sprite = null
let homeless4 : Sprite = null
let homeless3 : Sprite = null
let homeless2 : Sprite = null
let homeless1 : Sprite = null
let foodforthehomeless5 : Sprite = null
let foodforthehomeless4 : Sprite = null
let foodforthehomeless3 : Sprite = null
let foodforthehomeless2 : Sprite = null
let foodforhomeless1 : Sprite = null
let player1 : Sprite = null
story.startCutscene(function on_start_cutscene2() {
    game.showLongText("would you like to be a humanitarian volunteer?", DialogLayout.Bottom)
    story.showPlayerChoices("Yes", "no")
    if (story.checkLastAnswer("Yes")) {
        game.showLongText("let's go ", DialogLayout.Bottom)
    } else {
        game.showLongText("you didn't want to be be a volunteer", DialogLayout.Bottom)
        game.gameOver(false)
    }
    
})
scene.setBackgroundImage(assets.image`
    bg
`)
scene.cameraFollowSprite(player1)
info.setLife(1)
let table1 = sprites.create(assets.image`
    table
`, SpriteKind.object2)
table1.y += 10
table1.x += -65
let table2 = sprites.create(assets.image`
    table
`, SpriteKind.object2)
table2.x += -95
table2.y += 10
let table3 = sprites.create(assets.image`
    table
`, SpriteKind.object2)
table3.x += -125
table3.y += 10
foodforhomeless1 = sprites.create(assets.image`
    food
`, SpriteKind.Food)
foodforhomeless1.x += -65
foodforthehomeless2 = sprites.create(assets.image`
    food
`, SpriteKind.Food)
foodforthehomeless2.x += -95
foodforthehomeless3 = sprites.create(assets.image`
    food
`, SpriteKind.Food)
foodforthehomeless3.x += -125
foodforthehomeless4 = sprites.create(assets.image`
    food
`, SpriteKind.Food)
foodforthehomeless4.x += -115
foodforthehomeless5 = sprites.create(assets.image`
    food
`, SpriteKind.food5)
foodforthehomeless5.x += -135
player1 = sprites.create(assets.image`
    player
`, SpriteKind.Player)
player1.y += 10
scene.cameraFollowSprite(player1)
player1.sayText("hello volunteer, I am you.", 5000, true)
pause(5000)
player1.sayText("today, you must complete giving food to the poor homeless people and this is your mission now.", 5000, true)
pause(5000)
player1.sayText("quick, let's begin", 5000, true)
pause(5000)
player1.sayText("they are waiting for us", 2000, true)
homeless1 = sprites.create(assets.image`
        homeless1
    `, SpriteKind.feedingperson)
homeless1.x += 55
homeless1.y += 10
homeless2 = sprites.create(assets.image`
        homeless2
    `, SpriteKind.feedingperson2)
homeless2.x += 75
homeless2.y += 10
homeless3 = sprites.create(assets.image`
        homeless3
    `, SpriteKind.feedingperson3)
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
game.onUpdate(function on_on_update() {
    player1.x += controller.dx()
})
game.onUpdate(function on_on_update2() {
    if (info.life() == 6) {
        game.setGameOverMessage(true, "you successfully ended hunger in this area")
    }
    
})
