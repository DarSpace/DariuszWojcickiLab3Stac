class PhotoShop {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    image = new Image();
    brightness = 1;
    sepia = 1;
    painting = false;
    lastX;
    lastY;
    color;


    constructor(canvasId) {
        document.querySelector('#btnDarken').addEventListener('click', () => this.darkOrLighter('dark'));
        document.querySelector('#btnLight').addEventListener('click', () => this.darkOrLighter('light'));
        document.querySelector('#btnClear').addEventListener('click', () => this.clear());
        document.querySelector('#btnLoad').addEventListener('click', () => this.load());
        document.querySelector('#colorSelect').addEventListener('change', () => this.changeColor());
        document.querySelector('#lineSelect').addEventListener('change', () => this.changeLineWidth());
        document.querySelector('#brushSelect').addEventListener('change', () => this.changeBrush());
        this.canvas.addEventListener('mousedown', (e) => {
            this.painting = true;
            this.draw(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop, false);
        });
        this.canvas.addEventListener('mousemove', (e) => {
            this.draw(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop, true);
            console.log(this.canvas.offsetHeight);
        });
        this.canvas.addEventListener('mouseup', (e) => {
            this.painting = false;
        });
        this.ctx.drawImage(this.image, 0, 0);
        this.ctx.strokeStyle = 'green';
        this.ctx.lineWidth = 1;
        this.ctx.lineJoin = "round";
    }

    darkOrLighter(darkOrLight) {
        if(darkOrLight === 'dark') {
            if (this.brightness <= 0.1) this.brightness = 0.1;
            this.brightness -= 0.1;
        } else if (darkOrLight === 'light') {
            if(this.brightness >= 2) this.brightness = 2;
            this.brightness += 0.1;
        }
        this.brightness = Math.round(this.brightness * 10)/10;
        this.ctx.filter = 'brightness(' + this.brightness + ')';
        this.ctx.drawImage(this.image, 0, 0);
    }

    load() {
        this.image.src = 'wis.jpg';
        this.ctx.drawImage(this.image, 0, 0);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw(x, y, isDown) {
        if(this.painting) {
            if(isDown) {
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

    changeColor() {
        this.ctx.strokeStyle = document.querySelector('#colorSelect').value;
    }

    changeBrush() {
        const temp = document.querySelector('#brushSelect').value;
        this.ctx.lineJoin = document.querySelector('#brushSelect').value;
        switch(temp) {
            case 'round':
                this.ctx.lineCap = temp;
                break;
            case 'bevel':
                this.ctx.lineCap = 'square';
                break;
            case 'miter':
                this.ctx.lineCap = 'butt';
                break;
        }

    }

    changeLineWidth() {
        this.ctx.lineWidth = document.querySelector('#lineSelect').value;
    }
}

const ps = new PhotoShop('canvas');



