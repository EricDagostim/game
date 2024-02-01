import Player from "./player";

export default class GoblinPlayer extends Player {
    constructor(scene, x, y, name){
        super(scene, x, y, 'GoblinTexture', 160, name);
        
    }

    createAnimations() {    
        super.createAnimations();        
        
        this.scene.anims.create({
            key: "Idle",
            frames: this.scene.anims.generateFrameNumbers(this.texture.key, {
                start: 0,
                end: 3,
            }),
        })        
    }
    
    update(cursors) {    
        super.update(cursors);
        this.body.setAcceleration(0);
        if (cursors.left.isDown) {
            this.body.setVelocityX(-this.scene.playerSpeed);
            this.play("Walk", true);
            this.flipX = true;
        } else if (cursors.right.isDown) {
            this.body.setVelocityX(this.scene.playerSpeed);
            this.play("Walk", true);
            this.flipX = false;
        } else {
            this.play("Idle", true);
        }
    }
}