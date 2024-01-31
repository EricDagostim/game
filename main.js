import "./style.css";
import Phaser from "phaser";

const gameCanvas = document.getElementById("gameCanvas");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const speedDown = 1000;

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
    this.player;
    this.keyboard;
    this.playerSpeed = speedDown - 50;
  }

  preload() {
    // Carregar a imagem como um conjunto de tiles

    this.load.image("bg", "/assets/background.jpg");

    // this.load.spritesheet("playerAttack", "/assets/Goblin/Attack.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerRun", "/assets/Goblin/Run.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerIdle", "/assets/Goblin/Idle.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerDeath", "/assets/Goblin/Death.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerTakeHit", "/assets/Goblin/Take Hit.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    this.load.spritesheet("playerAttack", "/assets/Skeleton/Attack.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    this.load.spritesheet("playerRun", "/assets/Skeleton/Walk.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    this.load.spritesheet("playerIdle", "/assets/Skeleton/Idle.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    this.load.spritesheet("playerDeath", "/assets/Skeleton/Death.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    this.load.spritesheet("playerTakeHit", "/assets/Skeleton/Take-Hit.png", {
      frameWidth: 150,
      frameHeight: 150,
    });
  }

  create() {
    this.add.image(sizes.width / 2, sizes.height / 3, "bg");

    const attack = {
      key: "attack",
      frames: this.anims.generateFrameNumbers("playerAttack", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    };

    const run = {
      key: "run",
      frames: this.anims.generateFrameNumbers("playerRun", {
        start: 0,
        end: 3,
      }),
      frameRate: 15,
      repeat: -1,
    };

    const idle = {
      key: "idle",
      frames: this.anims.generateFrameNumbers("playerIdle", {
        start: 0,
        end: 3,
      }),
      frameRate: 5,
      repeat: -1,
    };

    const death = {
      key: "death",
      frames: this.anims.generateFrameNumbers("playerDeath", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    };

    const takeHit = {
      key: "takeHit",
      frames: this.anims.generateFrameNumbers("playerTakeHit", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    };

    const shield = {
      key: "shield",
      frames: this.anims.generateFrameNumbers("playershield", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    };

    this.anims.create(run);
    this.anims.create(attack);
    this.anims.create(idle);
    this.anims.create(death);
    this.anims.create(takeHit);

    this.player = this.physics.add.sprite(0, sizes.height - 100, "playerIdle");
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);

    this.player.anims.play("idle", true);

    this.keyboard = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.keyboard.left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
      this.player.anims.play("run", true);
      this.player.flipX = true;
    } else if (this.keyboard.right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
      this.player.anims.play("run", true);
      this.player.flipX = false;
    } else if (this.keyboard.space.isDown) {
      this.player.setVelocityX(0);
      this.player.anims.play("attack", true);
    } else if (this.keyboard.up.isDown) {
      this.player.setVelocityX(this.playerSpeed);
      this.player.setVelocityY(-speedDown + 100);      
    } else if (this.keyboard.down.isDown) {
      this.player.setVelocityX(0);
      this.player.setVelocityY(speedDown);
      this.player.anims.play("shield", true);
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("idle", true);
    }

    if (this.keyboard.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-speedDown);
    }
  }
}

const config = {
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: speedDown },
      debug: true,
    },
  },
  scene: [GameScene],
};

const game = new Phaser.Game(config);
