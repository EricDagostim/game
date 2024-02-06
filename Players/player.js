// player.js - Classe Base
import Phaser from "phaser";
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, textureKey, playerJumpValue, playerSpeed, name) {
    super(scene, x, y, textureKey);

    // Configura a física do personagem
    this.scene = scene;
    this.scene.physics.world.enableBody(this, 0);
    this.body.setCollideWorldBounds(true);
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.playerSpeed = playerSpeed;
    this.playerJumpValue = playerJumpValue;

    this.name = name;
    this.createAnimations();
  }

  createAnimations() {}

  runRight() {}

  runLeft() {}

  jump() {}

  idle() {
    this.body.setVelocityX(0);    
  }

  fall() {} 

  update(cursors) {

    if (!cursors.left.isDown && !cursors.right.isDown && this.body.onFloor()) {
      this.idle();
    } else {
      if (cursors.left.isDown) {
        this.runLeft();
      } else if (cursors.right.isDown) {
        this.runRight();
      }
    }

    if (cursors.up.isDown && this.body.onFloor()) {
      this.jump();
    }

  }
}
