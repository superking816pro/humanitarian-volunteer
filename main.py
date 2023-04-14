@namespace
class SpriteKind:
    object2 = SpriteKind.create()
    feedingperson = SpriteKind.create()
    feedingperson2 = SpriteKind.create()
    feedingperson3 = SpriteKind.create()
    feedingperson4 = SpriteKind.create()
    feedingperson5 = SpriteKind.create()
    food5 = SpriteKind.create()

def on_on_overlap(sprite6, otherSprite6):
    foodforthehomeless5.follow(player1, 100)
sprites.on_overlap(SpriteKind.food5, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    if True:
        info.change_life_by(1)
        sprites.destroy(homeless2, effects.spray, 500)
        sprites.destroy(foodforthehomeless2, effects.spray, 500)
sprites.on_overlap(SpriteKind.food, SpriteKind.feedingperson2, on_on_overlap2)

def on_on_overlap3(sprite22, otherSprite22):
    info.change_life_by(1)
    sprites.destroy(homeless1, effects.spray, 500)
    sprites.destroy(foodforhomeless1, effects.spray, 500)
sprites.on_overlap(SpriteKind.food, SpriteKind.feedingperson, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    foodforthehomeless3.follow(player1, 100)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap4)

def on_on_overlap5(sprite42, otherSprite42):
    foodforthehomeless2.follow(player1, 100)
sprites.on_overlap(SpriteKind.food, SpriteKind.player, on_on_overlap5)

def on_left_pressed():
    animation.run_image_animation(player1,
        assets.animation("""
            right-animation
        """),
        200,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap6(sprite3, otherSprite3):
    if True:
        info.change_life_by(1)
        sprites.destroy(homeless3, effects.spray, 500)
        sprites.destroy(foodforthehomeless3, effects.spray, 500)
sprites.on_overlap(SpriteKind.food, SpriteKind.feedingperson3, on_on_overlap6)

def on_on_overlap7(sprite223, otherSprite223):
    info.change_life_by(1)
    game.set_game_over_message(True, "you successfully ended hunger in this area")
    sprites.destroy(homeless5, effects.spray, 500)
    sprites.destroy(foodforthehomeless5, effects.spray, 500)
sprites.on_overlap(SpriteKind.food5, SpriteKind.feedingperson5, on_on_overlap7)

def on_on_overlap8(sprite2, otherSprite2):
    foodforthehomeless4.follow(player1, 100)
sprites.on_overlap(SpriteKind.food, SpriteKind.player, on_on_overlap8)

def on_right_pressed():
    animation.run_image_animation(player1,
        assets.animation("""
            leftt-animation
        """),
        200,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap9(sprite222, otherSprite222):
    info.change_life_by(1)
    sprites.destroy(homeless4, effects.spray, 500)
    sprites.destroy(foodforthehomeless4, effects.spray, 500)
sprites.on_overlap(SpriteKind.food, SpriteKind.feedingperson4, on_on_overlap9)

homeless5: Sprite = None
homeless4: Sprite = None
homeless3: Sprite = None
homeless2: Sprite = None
homeless1: Sprite = None
foodforthehomeless5: Sprite = None
foodforthehomeless4: Sprite = None
foodforthehomeless3: Sprite = None
foodforthehomeless2: Sprite = None
foodforhomeless1: Sprite = None
player1: Sprite = None

def on_start_cutscene():
    game.show_long_text("would you like to be a humanitarian volunteer?",
        DialogLayout.BOTTOM)
    story.show_player_choices("Yes", "no")
    if story.check_last_answer("Yes"):
        game.show_long_text("let's go ", DialogLayout.BOTTOM)
    else:
        game.show_long_text("you didn't want to be be a volunteer", DialogLayout.BOTTOM)
        game.game_over(False)
story.start_cutscene(on_start_cutscene)

scene.set_background_image(assets.image("""
    bg
"""))
scene.camera_follow_sprite(player1)
info.set_life(1)
table1 = sprites.create(assets.image("""
    table
"""), SpriteKind.object2)
table1.y += 10
table1.x += -65
table2 = sprites.create(assets.image("""
    table
"""), SpriteKind.object2)
table2.x += -95
table2.y += 10
table3 = sprites.create(assets.image("""
    table
"""), SpriteKind.object2)
table3.x += -125
table3.y += 10
foodforhomeless1 = sprites.create(assets.image("""
    food
"""), SpriteKind.food)
foodforhomeless1.x += -65
foodforthehomeless2 = sprites.create(assets.image("""
    food
"""), SpriteKind.food)
foodforthehomeless2.x += -95
foodforthehomeless3 = sprites.create(assets.image("""
    food
"""), SpriteKind.food)
foodforthehomeless3.x += -125
foodforthehomeless4 = sprites.create(assets.image("""
    food
"""), SpriteKind.food)
foodforthehomeless4.x += -115
foodforthehomeless5 = sprites.create(assets.image("""
    food
"""), SpriteKind.food5)
foodforthehomeless5.x += -135
player1 = sprites.create(assets.image("""
    player
"""), SpriteKind.player)
player1.y += 10
scene.camera_follow_sprite(player1)
player1.say_text("hello volunteer, I am you.", 5000, True)
pause(5000)
player1.say_text("today, you must complete giving food to the poor homeless people and this is your mission now.",
    5000,
    True)
pause(5000)
player1.say_text("quick, let's begin", 5000, True)
pause(5000)
player1.say_text("they are waiting for us", 2000, True)
homeless1 = sprites.create(assets.image("""
        homeless1
    """),
    SpriteKind.feedingperson)
homeless1.x += 55
homeless1.y += 10
homeless2 = sprites.create(assets.image("""
        homeless2
    """),
    SpriteKind.feedingperson2)
homeless2.x += 75
homeless2.y += 10
homeless3 = sprites.create(assets.image("""
        homeless3
    """),
    SpriteKind.feedingperson3)
homeless3.x += 35
homeless3.y += 10
homeless4 = sprites.create(img("""
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
    """),
    SpriteKind.feedingperson4)
homeless4.y += 10
homeless4.x += 95
homeless5 = sprites.create(img("""
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
    """),
    SpriteKind.feedingperson5)
homeless5.y += 10
homeless5.x += 115

def on_on_update():
    player1.x += controller.dx()
game.on_update(on_on_update)
