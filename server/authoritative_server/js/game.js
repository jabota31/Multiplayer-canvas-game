const preload = () => {}
 
const create = () => {}
 
const update = () => {}

const config = {
    type: Phaser.HEADLESS,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    autoFocus: false,
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
        gravity: { y: 0 }
      }
    },
    scene: {
      preload,
      create,
      update
    }
};
   
const game = new Phaser.Game(config);
  
window.gameLoaded();