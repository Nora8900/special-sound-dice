input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 1200), music.PlaybackMode.UntilDone)
    basic.showNumber(randint(0, 9))
})
