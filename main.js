import "./style.css";
import Phaser from "phaser";
import MariaPlayer from "./Players/mariaPlayer";
import GoblinPlayer from "./Players/goblinPlayer";

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

    this.load.spritesheet(
      "MariaTexture",
      "/assets/Maria-hero/Warrior_Sheet.png",
      {
        frameWidth: 18,
        frameHeight: 44,
      }
    );

    this.load.spritesheet("GoblinTexture", "/assets/Goblin-hero/Idle.png", {
      frameWidth: 150,
      frameHeight: 150,
    });    
  }

  create() {    
        
    background = this.add.image(0, 0, "background").setOrigin(0, 0);
    background.displayWidth = config.width;
    background.displayHeight = config.height;

    this.maria = new MariaPlayer(this, 100, 100, "Maria");
    this.maria.setScale(2);

    // this.goblin = new GoblinPlayer(this, 200, 100, 'Goblin');
    // this.goblin.setScale(2);
  }

  update() {
    this.maria.update(this.input.keyboard.createCursorKeys());
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
