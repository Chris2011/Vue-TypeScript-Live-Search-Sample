const nsg = require('node-sprite-generator');

nsg({
    src: [
        '.tmp/icons/*.png',
    ],
    compositor: 'jimp',
    stylesheet: 'prefixed-css',
    spritePath: './src/sprite.png',
    stylesheetPath: './src/sprite.css',
    stylesheetOptions: {
        prefix: 'svg-',
    },
}, (err) => {
    if (err) {
        console.log('Error occured: \n');
        console.log(err);
    } else {
        console.log('Sprite generated!');
    }
});