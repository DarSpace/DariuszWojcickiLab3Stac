class Filter {        // klasa z filtrami
    brightnessSlider;
    contrastSlider;
    brightnessValue;
    contrastValue;
    image;
    canvas;
    ctx;
    painted = false;

    constructor(canvas, image) {
        this.brightnessSlider = document.getElementById('BrightnessSlider');  // przyciemnianie i rozjascnianie
        this.brightnessValue = document.getElementById('BrightnessValue');
        this.contrastSlider = document.getElementById('ContrastSlider');     // kontrast 
        this.contrastValue = document.getElementById('ContrastValue');
        document.querySelector('#btnBlur').addEventListener('click', () => { this.blurFilter() })   //rozmycie 

        this.ctx = canvas.getContext('2d');
        this.image = new Image();
        this.image.src = image;
        this.canvas = canvas;
        this.brightnessSlider.addEventListener('change', (event) => {          // wartosci przy przyciemnianiu i rozjaśnianiu 
            this.brightnessValue.innerHTML = event.currentTarget.value;
            this.changeBrightness()
        });
        this.contrastSlider.addEventListener('change', (event) => {                 // wartości przy kontraście 
            this.contrastValue.innerHTML = event.currentTarget.value;
            this.changeContrast();
        });
    }

    changeBrightness() {                                               // filtr do przyciemniania i rozjasniania
        let imageData;
        if (!this.painted) return;
        const brightness = parseInt(this.brightnessSlider.value, 10);
        this.drawImage(this.image)
        imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] += 255 * (brightness / 100);
            imageData.data[i + 1] += 255 * (brightness / 100);
            imageData.data[i + 2] += 255 * (brightness / 100);
        }

        this.ctx.putImageData(imageData, 0, 0);
    }

    changeContrast() {                           // kontrast 
        let imageData;
        const contrast = parseInt(this.contrastSlider.value, 10);
        const factor = (259.0 * (contrast + 255.0)) / (255.0 * (259.0 - contrast));
        if (!this.painted) return;
        this.drawImage(this.image)
        imageData = this.ctx.getImageData(0, 0, this.image.width, this.image.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = this.tuneColor(factor * (imageData.data[i] - 128.0) + 128.0);
            imageData.data[i + 1] = this.tuneColor(factor * (imageData.data[i + 1] - 128.0) + 128.0);
            imageData.data[i + 2] = this.tuneColor(factor * (imageData.data[i + 2] - 128.0) + 128.0);
        }

        this.ctx.putImageData(imageData, 0, 0);
    }





    drawImage(image) {                       //wczytanie obrazka 
        this.ctx.drawImage(image, 0, 0);
    }

    tuneColor(value) {                    //zabezpieczenie zeby nie przekroczyło danych wartosci 
        if (value < 0) {
            return 0;
        } else if (value > 255) {
            return 255;
        } else {
            return value;
        }
    }


    blurFilter() {                                                                               // rozmycie 
        let canvasData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < canvasData.data.length; i += 4) {
            canvasData.data[i] = (canvasData.data[i] + canvasData.data[i + 4]) / 2
            canvasData.data[i + 1] = (canvasData.data[i + 1] + canvasData.data[i + 5]) / 2
            canvasData.data[i + 2] = (canvasData.data[i + 2] + canvasData.data[i + 6]) / 2
        }
        this.ctx.putImageData(canvasData, 0, 0)
    }



    onLoad() {                           //wczytanie obrazka
        this.drawImage(this.image);
        this.painted = true;

    }
}



class PhotoShop {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    image = new Image();
    painting = false;
    lastX;
    lastY;
    imageData;
    filter;

    constructor(canvasId) {
        document.querySelector('#btnClear').addEventListener('click', () => this.clear());           // czyszczenie 
        document.querySelector('#colorSelect').addEventListener('change', () => this.changeColor());    // jaki kolorek dzis wybierasz?
        document.querySelector('#lineSelect').addEventListener('change', () => this.changeLineWidth());  // grubość lini 
        document.querySelector('#brushSelect').addEventListener('change', () => this.changeBrush());     // rodzaj pędzla
        this.canvas.addEventListener('mousedown', (e) => {                                               //rysowanie
            this.painting = true;
            this.draw(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop, false);
        });
        this.canvas.addEventListener('mousemove', (e) => {
            this.draw(e.clientX - this.canvas.offsetLeft, e.clientY - this.canvas.offsetTop, true);
        });
        this.canvas.addEventListener('mouseup', (e) => {
            this.painting = false;
        });
        this.ctx.drawImage(this.image, 0, 0);
        this.ctx.strokeStyle = 'green';
        this.ctx.lineWidth = 1;
        this.ctx.lineJoin = "round";
        document.querySelector('#btnLoad').addEventListener('click', () => this.load());       // guziczek wczytania obrazka
        this.image.src = 'wis.jpg';
        this.filter = new Filter(this.canvas, this.image.src);
    }



    load() {                         // load obrazka (guziczek)
        this.filter.onLoad();
    }

    clear() {                       // wyczyszczenie obrazka 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw(x, y, isDown) {          // funkca rysowania 
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
        this.imageData = this.ctx.getImageData(0, 0, this.image.width, this.image.height);
    }

    changeColor() {                 //wybór koloru 
        this.ctx.strokeStyle = document.querySelector('#colorSelect').value;
    }

    changeBrush() {                 // rodzaj pędzla 
        const temp = document.querySelector('#brushSelect').value;
        this.ctx.lineJoin = document.querySelector('#brushSelect').value;
        switch (temp) {
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

    changeLineWidth() {    // gruność lini 
        this.ctx.lineWidth = document.querySelector('#lineSelect').value;
    }
}

const ps = new PhotoShop('canvas');






