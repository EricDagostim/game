import "./style.css";
import Phaser from "phaser";
import MariaPlayer from "./Players/mariaPlayer";
import GoblinPlayer from "./Players/goblinPlayer";
import MonkaPlayer from "./Players/monkaPlayer";
import NighterPlayer from "./Players/nighterPlayer";

const gameCanvas = document.getElementById("gameCanvas");

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const speedDown = 600;
var background;

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
    this.keyboard;
    this.player;

    this.playerSpeed = 600;
  }

  preload() {
    this.load.image("background", "/assets/background.jpg");

    this.load.spritesheet(
      "MariaTexture",
      "/assets/Maria-hero/maria-sheet.png",
      {
        frameWidth: 64,
        frameHeight: 44,
      }
    );

    this.load.spritesheet(
      "NighterTexture",
      "/assets/Nighter-hero/Nighter-sheet.png",
      {
        frameWidth: 80,
        frameHeight: 80,
      }
    );




    this.load.spritesheet(
      "MonkaTexture",
      "/assets/Monka-hero/Monka-sheet.png",
      {
        frameWidth: 288,
        frameHeight: 128,
      }
    );

    this.load.spritesheet(
      "GoblinTexture", 
      "/assets/Goblin-hero/Idle.png", 
      {
        frameWidth: 150,
        frameHeight: 150,
      });    
  }

  create() {    
        
    background = this.add.image(0, 0, "background").setOrigin(0, 0);
    background.displayWidth = config.width;
    background.displayHeight = config.height;

    this.maria = new MariaPlayer(this, 0, 0, "Maria", 1);
    this.maria.setScale(2);

  
  }

  update() {    
    this.maria.update(this.input.keyboard.createCursorKeys());        
    
    this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
    this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
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
      debug: false,
    },
  },
  scene: [GameScene],
};

const game = new Phaser.Game(config);
