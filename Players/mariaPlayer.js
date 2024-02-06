import Player from "./player";

export default class MariaPlayer extends Player {
  constructor(scene, x, y, name) {
    super(scene, x, y, "MariaTexture", 300, 400, name);

    this.scene = scene;
    this.name = name;

    this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyR = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
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
    });

    this.scene.anims.create({
      key: "Slide",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 33,
        end: 37,
      }),
      frameRate: 10,
    });

    this.scene.anims.create({
      key: "Dash",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 38,
        end: 44,
      }),
      frameRate: 10,
    });

    this.scene.anims.create({
      key: "DashAttack",
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 45,
        end: 54,
      }),
      frameRate: 10,
    });
  }

  //métodos de movimentação e habilidades
  runRight() {
    super.runRight();
    this.body.setVelocityX(this.playerSpeed);

    if (this.body.onFloor()) {
      this.anims.play("Run", true);
    }
    this.flipX = false;
  }

  runLeft() {
    super.runLeft();
    this.body.setVelocityX(-this.playerSpeed);

    if (this.body.onFloor()) {
      this.anims.play("Run", true);
    }

    this.flipX = true;
  }

  jump() {
    super.jump();
    this.body.setVelocityY(-this.playerJumpValue);
    this.anims.play("Jump", true);
  }

  fall() {
    super.fall();
    if (this.body.velocity.y > 0) {
      this.anims.play("Fall", true);
    }
  }

  idle() {
    super.idle();
    if (
      !this.keyQ.isDown &&
      !this.keyW.isDown &&
      !this.keyE.isDown &&
      !this.keyR.isDown
    ) {
      this.anims.play("Idle", true);
    }
  }

  attack() {
    this.anims.play("Attack", true);
  }
  

  dash() {
    if (!this.isDashing && !this.anims.isPlaying) {
      this.anims.play("Dash", true);
      this.isDashing = true;
      if (this.flipX) {
        this.body.x -= 60;
      } else {
        this.body.x += 60;
      }
      // Define um tempo limite para o dash
      this.scene.time.delayedCall(500, () => {
        this.isDashing = false;
      });
    }
  }

  // Método chamado quando a tecla de dash é liberada
  dashReleased() {
    this.isDashing = false;
  }

  slide() {
    this.anims.play("Slide", true);
  }

  dashAttack() {
    this.anims.play("DashAttack", true);
  }

  update(cursors) {
    super.update(cursors);

    if (this.body.velocity.y > 0) {
      this.fall();
    }

    if (this.keyQ.isDown) {
      this.attack();
    }

    if (this.keyW.isDown) {
      this.slide();
    }

    if (this.keyE.isDown) {
      this.dashReleased();
    }

    if (this.keyR.isDown) {
      this.dashAttack();
    }
  }
}
