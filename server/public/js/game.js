const preload = () => {}
 
const create = () => {}
 
const update = () => {}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create,
    update
  }
};
 
const game = new Phaser.Game(config);
 
