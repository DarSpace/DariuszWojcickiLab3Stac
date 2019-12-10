tileTypes = {
    empty: 'empty',
    sand: 'sand',
    diamond: 'diamond',
    stone:
        wall
}



class World {
    constructor(canvasId) {
        this.initiaizateTileTypes
        this.tiles


        if (canvasId) {
            this.canvas = document.querySelector(`#${canvasId}`)
            this.ctx = this.canvas.getContext('2d')
        } else {
            throw new Error('You have to provide Canvas ID')
        }


        this.tileWidth = 25;
        this.tileHeight = 25;

        fillTiles(){
            for (let i = 0; i < 100; i++) {
                const randomNumber = Math.floor((Math.random() * 4
                ))
            }

        }



    }
    generate() {

    }



}



class Tile()
{
    constructor(type) {
        if (!type) {
            throw new Error('Provide a tile type')
        }
        this.type = type
        this.setColor(type)
    }
}