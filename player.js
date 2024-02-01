
export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, hero) {

    super(scene, x, y, hero);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setCollideWorldBounds(true);
  }

  preload(){
    this.load.spritesheet("Idle", "/assets/Goblin-hero/Idle.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    this.load.spritesheet("Attack", "/assets/Goblin-hero/Attack.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    this.load.spritesheet("Run", "/assets/Goblin-hero/Run.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    
    this.load.spritesheet("Death", "/assets/Goblin-hero/Death.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    this.load.spritesheet("TakeHit", "/assets/Goblin-hero/TakeHit.png", {
      frameWidth: 150,
      frameHeight: 150,
    });
  }

  create(){

    this.scene.anims.create({
      key: "Idle",
      frames: this.scene.anims.generateFrameNumbers("Idle", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
    
    this.scene.anims.create({
      key: "Run",
      frames: this.scene.anims.generateFrameNumbers("Run", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "Attack",
      frames: this.scene.anims.generateFrameNumbers("Attack", {
        start: 0,
        end: 7,
      }),
      frameRate: 10,
      repeat: -1,
    });
    this.scene.anims.create({
      key: "Death",
      frames: this.scene.anims.generateFrameNumbers("Death", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.scene.anims.create({
      key: "TakeHit",
      frames: this.scene.anims.generateFrameNumbers("TakeHit", {
        start: 0,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });
  }

  update(cursors) {        
    this.body.setVelocity(0);
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
