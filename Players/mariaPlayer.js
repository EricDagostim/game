import Player from "./player";

export default class MariaPlayer extends Player {
  constructor(scene, x, y, name, playerID) {
    super(scene, x, y, "MariaTexture", 300, 400, name);
    this.scene = scene;
    this.name = name;
    this.id 
    this.keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyR = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
  }

  createAnimations() {
    super.createAnimations();
    this.scene.anims.create({
      key: "Idle" + this.id,
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 0,
        end: 5,
      }),
      frameRate: 8,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Run" + this.id,
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 6,
        end: 13,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Jump" + this.id,
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 14,
        end: 16,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Fall" + this.id,
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 17,
        end: 19,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "Attack" + this.id,
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 20,
        end: 32,
      }),
      frameRate: 10,
    });

    this.scene.anims.create({
      key: "Slide" + this.id,
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 33,
        end: 36,
      }),
      frameRate: 10,
    });

    this.scene.anims.create({
      key: "Dash" + this.id, 
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 37,
        end: 44,
      }),
      frameRate: 10,
    });

    this.scene.anims.create({
      key: "DashAttack" + this.id,
      frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
        start: 45,
        end: 53,
      }),
      frameRate: 10,
    });
  }

  //métodos de movimentação e habilidades
  runRight() {
    super.runRight();
    this.body.setVelocityX(this.playerSpeed);

    if (this.body.onFloor()) {
      this.anims.play("Run" + this.id, true);
    }
    this.flipX = false;
  }

  runLeft() {
    super.runLeft();
    this.body.setVelocityX(-this.playerSpeed);

    if (this.body.onFloor()) {
      this.anims.play("Run" + this.id, true);
    }

    this.flipX = true;
  }

  jump() {
    super.jump();
    this.body.setVelocityY(-this.playerJumpValue);
    this.anims.play("Jump" + this.id, true);
  }

  fall() {
    super.fall();
    if (this.body.velocity.y > 0) {
      this.anims.play("Fall" + this.id, true);
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
      this.anims.play("Idle" + this.id, true);
    }
  }

  attack() {
    this.anims.chain("Idle" + this.id);
    this.anims.play("Attack" + this.id, true);
  }

  dash() {
    if (this.anims.isPlaying) {
      this.anims.chain("Idle" + this.id);
      this.anims.play("Dash" + this.id,  true);

      if (this.flipX) {
        this.body.x -= 10;
      } else {
        this.body.x += 10;
      }
    }
  }
  
  slide() {
    this.anims.play("Slide" + this.id, true);
  }

  dashAttack() {
    this.anims.play("DashAttack" + this.id, true);
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

    if (this.keyR.isDown) {
      this.dashAttack();
    }
  }
}
