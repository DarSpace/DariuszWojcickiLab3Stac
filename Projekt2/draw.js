
export default class drawing {
    draw(x, y, isDown) {
        if (this.painting) {
            if (isDown) {
                this.ctx.beginPath();
                this.ctx.moveTo(this.lastX, this.lastY);
                this.ctx.lineTo(x, y);
                this.ctx.closePath();
                this.ctx.stroke();
            }
            this.lastX = x;
            this.lastY = y;
        }
        console.log(this.color);
    }
}
