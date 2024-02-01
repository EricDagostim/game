import "./style.css";
import Phaser from "phaser";
import Player from "./player";

const gameCanvas = document.getElementById("gameCanvas");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const speedDown = 300;
var background;

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
    this.keyboard;
    this.player;
    
    this.playerSpeed = 160;

  }

  preload() {    

    this.load.image("background", "/assets/background.jpg");
    
    

    this.load.spritesheet("MariaIdle", "/assets/Maria-hero/Warrior_Sheet.png", {
      frameWidth: 150,
      frameHeight: 150,
    });

    

    // this.load.spritesheet("playerAttack", "/assets/Skeleton/Attack.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerRun", "/assets/Skeleton/Walk.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerIdle", "/assets/Skeleton/Idle.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerDeath", "/assets/Skeleton/Death.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });

    // this.load.spritesheet("playerTakeHit", "/assets/Skeleton/Take-Hit.png", {
    //   frameWidth: 150,
    //   frameHeight: 150,
    // });
  }

  create() {    

    
    this.player = new Player(this, 100, 100, 'Goblin', 'Idle');
    background = this.add.image(0, 0, 'background').setOrigin(0, 0);
    background.displayWidth = config.width;
    background.displayHeight = config.height;




    this.keyboard = this.input.keyboard.createCursorKeys();
    
  }

  update() {    
    
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
