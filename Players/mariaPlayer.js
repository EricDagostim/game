import Player from "./player";

export default class MariaPlayer extends Player {
  constructor(scene, x, y, name) {
    super(scene, x, y, "MariaTexture", 300, 400, name);
  }

  createAnimations() {
    super.createAnimations();
    this.scene.anims.create({
      key: "Idle",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 0,
        end: 5,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Run",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 6,
        end: 13,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Jump",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 14,
        end: 16,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Fall",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 17,
        end: 19,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Attack",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 20,
        end: 32,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Slide",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 33,
        end: 37,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "DashAttack",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 38,
        end: 44,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Dash",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 45,
        end: 54,
      }),
      frameRate: 10,
      repeat: -1,
    });

    
  }

  update(cursors) {
    super.update(cursors);
    // adicionar habilidades específicas da Maria 

    if (cursors.down.isDown) {
      this.anims.play("Slide", true);
      
    }

    if (cursors.space.isDown) {
      this.anims.play("DashAttack", true);
    }

    if (cursors.shift.isDown) {
      this.anims.play("Dash", true);
    }



   // adicionar habilidades específicas da Maria    
  }
}
