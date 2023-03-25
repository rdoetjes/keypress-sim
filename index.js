const { keyboard, Key } = require('@nut-tree/nut-js');
const screenshot = require('screenshot-desktop')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function game() {
    keyboard.type(Key.P);
    keyboard.type(Key.Q);
    await sleep(80);
    keyboard.type(Key.P);
    keyboard.type(Key.Q);
    await sleep(80);
    keyboard.type(Key.L);
    keyboard.type(Key.A);
    await sleep(80);
    keyboard.type(Key.L);
    keyboard.type(Key.A);
    await sleep(80);
}

(async () => {
    //keyboard.config.autoDelayMs = 10;
    await sleep(8000);
    while(1){
        await game();
    }
})();