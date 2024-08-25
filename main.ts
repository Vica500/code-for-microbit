// Funktion som rensar LED-skärmen
function clearScreen() {
    led.unplot(0, 0);
    led.unplot(0, 1);
    led.unplot(0, 2);
    led.unplot(0, 3);
    led.unplot(0, 4);
    led.unplot(1, 0);
    led.unplot(1, 1);
    led.unplot(1, 2);
    led.unplot(1, 3);
    led.unplot(1, 4);
    led.unplot(2, 0);
    led.unplot(2, 1);
    led.unplot(2, 2);
    led.unplot(2, 3);
    led.unplot(2, 4);
    led.unplot(3, 0);
    led.unplot(3, 1);
    led.unplot(3, 2);
    led.unplot(3, 3);
    led.unplot(3, 4);
    led.unplot(4, 0);
    led.unplot(4, 1);
    led.unplot(4, 2);
    led.unplot(4, 3);
    led.unplot(4, 4);
}

// Funktion som innehåller hela din kod
function runAnimation() {
    clearScreen(); // Rensa skärmen innan animationen börjar
    led.plot(2, 2);
    led.plot(4, 1);
    led.plot(3, 0);
    led.plot(2, 0);
    led.plot(1, 0);
    led.plot(3, 2);
    led.plot(4, 3);
    led.plot(1, 4);
    led.plot(2, 4);
    led.plot(3, 4);
    basic.pause(1000);
    led.plot(4, 1);
    led.plot(3, 0);
    led.plot(2, 0);
    led.plot(1, 0);
    led.plot(2, 3);
    led.unplot(4, 3);
    led.plot(4, 4);
    led.unplot(2, 2);
    basic.pause(1000);
    led.unplot(4, 1);
    led.unplot(3, 0);
    led.plot(2, 1);
    led.unplot(1, 0);
    led.unplot(3, 4);
    led.unplot(4, 3);
    led.unplot(4, 4);
    led.unplot(1, 4);
    led.unplot(3, 2);
    led.plot(2, 2);
    led.plot(1, 1);
    basic.pause(1000);
    led.unplot(2, 1);
    led.unplot(2, 2);
    led.unplot(2, 3);
    led.plot(1, 2);
    led.plot(1, 3);
    led.plot(3, 1);
    led.plot(3, 2);
    led.plot(3, 3);
    music.setVolume(255);
    music.ringTone(254);
    basic.pause(3000);
    music.stopAllSounds();
}

// Återställningsfunktion som kör animationen
function resetAndRun() {
    clearScreen(); // Rensa skärmen innan du kör animationen igen
    runAnimation();
}

// Koppla återställningsfunktionen till knapparna A och B
input.onButtonPressed(Button.AB, function () {
    resetAndRun();
})

// Kör animationen första gången
runAnimation();
