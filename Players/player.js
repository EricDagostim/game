// player.js - Classe Base
import Phaser from "phaser";
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, textureKey, playerSpeed, name) {
    super(scene, x, y, textureKey);

    
    // Configura a física do personagem
    
    this.scene = scene;
    this.scene.physics.world.enableBody(this, 0);
    this.body.setCollideWorldBounds(true);    
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);

    this.playerSpeed = playerSpeed;
    this.name = name;
    this.createAnimations();
    
  }

  createAnimations() {   


  }

  update(cursors) {    
   
    
  }
  
}
