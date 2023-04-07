@namespace
class SpriteKind:
    object2 = SpriteKind.create()
    feedingperson = SpriteKind.create()
    feedingperson2 = SpriteKind.create()
    feedingperson3 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    if True:
        info.change_life_by(1)
        sprites.destroy(homeless1, effects.spray, 500)
        foodforhomeless.x += -53
sprites.on_overlap(SpriteKind.food, SpriteKind.feedingperson, on_on_overlap)

def on_on_overlap2(sprite4, otherSprite4):
    foodforhomeless.follow(player1, 100)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_left_pressed():
    animation.run_image_animation(player1,
        assets.animation("""
            right-animation
        """),
        200,
        False)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_on_overlap3(sprite3, otherSprite3):
    if True:
        info.change_life_by(1)
        sprites.destroy(homeless3, effects.spray, 500)
        foodforhomeless.x += -53
sprites.on_overlap(SpriteKind.food, SpriteKind.feedingperson3, on_on_overlap3)

def on_right_pressed():
    animation.run_image_animation(player1,
        assets.animation("""
            leftt-animation
        """),
        200,
        False)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap4(sprite2, otherSprite2):
    if True:
        info.change_life_by(1)
        sprites.destroy(homeless2, effects.spray, 500)
        foodforhomeless.x += -53
sprites.on_overlap(SpriteKind.food, SpriteKind.feedingperson2, on_on_overlap4)

homeless3: Sprite = None
homeless2: Sprite = None
homeless1: Sprite = None
foodforhomeless: Sprite = None
player1: Sprite = None
scene.set_background_image(assets.image("""
    bg
"""))
scene.camera_follow_sprite(player1)
info.set_life(1)
table = sprites.create(assets.image("""
    table
"""), SpriteKind.object2)
table.y += 10
table.x += -60
foodforhomeless = sprites.create(assets.image("""
    food
"""), SpriteKind.food)
foodforhomeless.x += -53
player1 = sprites.create(assets.image("""
    player
"""), SpriteKind.player)
player1.y += 10
scene.camera_follow_sprite(player1)
player1.say_text("hello volunteer, I am you.", 5000, True)
pause(5000)
player1.say_text("today, you must complete giving food to the poor homeless people before time runs out.",
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

def on_on_update():
    player1.x += controller.dx()
game.on_update(on_on_update)
