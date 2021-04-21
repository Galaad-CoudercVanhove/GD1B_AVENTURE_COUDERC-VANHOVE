var player;
var cursors;
var wallLayer;

class Scene2 extends Phaser.Scene{
    constructor(){
        super("Scene2");
    }
    init(data){
    }
    preload(){   
        this.load.tilemapTiledJSON('map2', 'assets/map2.json');
        this.load.image('tiles', 'assets/landscape_tiles.png');
        this.load.image('player', 'assets/star.png');
    }
    create(){
        const map = this.make.tilemap({key: 'map2'});
        const tileset = map.addTilesetImage('landscape', 'tiles');
        
        map.createStaticLayer('ground', tileset, 0, 0);
        wallLayer = map.createStaticLayer('mur', tileset, 0, 0);

        wallLayer.setCollisionByExclusion(-1, true);

    /*    player = this.physics.add.sprite(300, 300, 'player');

        this.physics.add.collider(player, mur);*/

        cursors = this.input.keyboard.createCursorKeys();
        

    }
    
    update(){
        if (cursors.right.isDown){
            player.setVelocityX(200);
        }
        else if (cursors.left.isDown){
            player.setVelocityX(-200);
        }
        else if (cursors.up.isDown){
            player.setVelocityY(-200);
        }
        else if (cursors.down.isDown){
            player.setVelocityY(200);
        }
        else{
            player.setVelocity(0);
        }
    }
}