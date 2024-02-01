import Player from "./player";

export default class MariaPlayer extends Player {
  constructor(scene, x, y, name) {
    super(scene, x, y, "MariaTexture", 160, name);
        
  }



  createAnimations() {

    this.scene.anims.create({
      key: "Idle",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Run",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 6,
        end: 12,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "1speel",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 9,
        end: 15,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update(cursors) {
    this.body.setVelocity(0);
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
    } else {
      this.anims.play("Idle", true);
    }
  }
}
