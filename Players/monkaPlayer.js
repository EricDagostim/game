import Player from "./player";

export default class MonkaPlayer extends Player {
  constructor(scene, x, y, name) {
    super(scene, x, y, "MonkaTexture", 160, name);
  }

  createAnimations() {
    super.createAnimations();

    this.scene.anims.create({
      key: "Idle",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 0,
        end: 5,
      }),
      frameRate: 10,
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
        start:14,
        end: 16,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Attack",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 17,
        end: 22,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "SpecialAttack",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 23,
        end: 45,
      }),
      frameRate: 10,
      repeat: -1,
    });

   

    
  }

  update(cursors) {
    super.update(cursors);

    this.body.setAcceleration(0);
    if (cursors.left.isDown) {
      this.body.setVelocityX(-this.scene.playerSpeed);
      this.anims.play("Run", true);
      this.flipX = true;
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(this.scene.playerSpeed);
      this.anims.play("Run", true);
      this.flipX = false;
    } else if (cursors.space.isDown) {
      this.anims.play("Attack", true);
    } else if (cursors.shift.isDown) {
      this.anims.play("SpecialAttack", true);
    } else if (cursors.up.isDown) {
      this.body.setVelocityY(-this.scene.playerSpeed);
      this.anims.play("Jump", true);
      this.flipX = false;
    }
     else {
      this.anims.play("Idle", true);
    }
  }
}
