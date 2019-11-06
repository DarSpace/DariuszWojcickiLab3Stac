class Photoshop
{
    construktor(canvasId){
        this.brushShape = 'circle'
        this.canvas = setCanvas

    }
 onCanvasToutchMove(e){
     const xPos = e.touches[0].client - this.canvasConfig.left
     const xPos = e.touches[0].client - this.canvasConfig.top
 }


 set
    draw(x,y)
    {
        const newDiv = document.createElement('div')
        newDiv.classList.add('brus', this.brushShape)
        newDiv.style.left=x +'px'
        newDiv.style.top = y + 'px'
        this.canvas.appendChild(newDiv)
    }

}


