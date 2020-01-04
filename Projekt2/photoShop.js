class Filter {   // klasa z filtrami
    filters = '';
    brightnessSlider;
    contrastSlider;
    brightnessValue;
    contrastValue;
    blurSlider;
    blurValue;
    sepiaSlider;
    sepiaValue;
    image;
    canvas;
    ctx;
    painted = false;

    constructor(canvas, image) {
        this.brightnessSlider = document.getElementById('BrightnessSlider');  // przyciemnianie i rozjascnianie
        this.brightnessValue = document.getElementById('BrightnessValue');
        this.contrastSlider = document.getElementById('ContrastSlider');     // kontrast 
        this.contrastValue = document.getElementById('ContrastValue');
        this.blurSlider = document.getElementById('BlurSlider');          // rozmycie
        this.blurValue = document.getElementById('BlurValue');
        this.sepiaSlider = document.getElementById('SepiaSlider');      //sepia
        this.sepiaValue = document.getElementById('SepiaValue');

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
        this.blurSlider.addEventListener('change', (event) => {             // wartości przy rozmyciu 
            this.blurValue.innerHTML = event.currentTarget.value;
            this.blurFilter();
        });
        this.sepiaSlider.addEventListener('change', (event) => {           // wartosci przy sepi
            this.sepiaValue.innerHTML = event.currentTarget.value + '%';
            this.sepiaFilter();
        });
    }

    changeBrightness() {                                               // filtr do przyciemniania i rozjasniania
        let imageData;
        if (!this.painted) return
        const brightness = parseInt(this.brightnessSlider.value, 10)
        this.drawImage(this.image)
        imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] += 255 * (brightness / 100)
            imageData.data[i + 1] += 255 * (brightness / 100)
            imageData.data[i + 2] += 255 * (brightness / 100)
        }

        this.ctx.putImageData(imageData, 0, 0);
    }

    changeContrast() {                           // kontrast 
        let imageData;
        const contrast = parseInt(this.contrastSlider.value, 10);
        const factor = (259.0 * (contrast + 255.0)) / (255.0 * (259.0 - contrast));
        if (!this.painted) return
        this.drawImage(this.image)
        imageData = this.ctx.getImageData(0, 0, this.image.width, this.image.height)
        for (let i = 0; i < imageData.data.length; i += 4) {
            imageData.data[i] = this.tuneColor(factor * (imageData.data[i] - 128.0) + 128.0)
            imageData.data[i + 1] = this.tuneColor(factor * (imageData.data[i + 1] - 128.0) + 128.0)
            imageData.data[i + 2] = this.tuneColor(factor * (imageData.data[i + 2] - 128.0) + 128.0)
        }

        this.ctx.putImageData(imageData, 0, 0);
    }


    blurFilter() {                                         // rozmycie 
        const blur = parseInt(this.blurSlider.value);
        if (this.sepiaSlider.value != 0) {
            const sepia = parseInt(this.sepiaSlider.value)
            this.ctx.filter = 'blur(' + blur + 'px) sepia(' + sepia + '%)'         // sprawdzenie czy suwaczki sa ustawione na wartosci i jak sa to ją wywołuje zeby sepia działała z blurem 
        } else {
            this.ctx.filter = 'blur(' + blur + 'px) '
        }
        if (!this.painted) return  // zabezpieczenie przed edycja obrazka ktory nie jest zaladowany (zeby nie edytowac obrazka ktorego jeszcze nie ma)
        this.drawImage(this.image)
        this.changeContrast()
        this.changeBrightness()
    }

    clear() {
        this.painted = false;
    }

    drawImage(image) {                       //wczytanie obrazka 
        this.ctx.drawImage(image, 0, 0);
    }

    tuneColor(value) {                    //zabezpieczenie zeby nie przekroczyło danych wartosci 
        if (value < 0) {
            return 0
        } else if (value > 255) {
            return 255
        } else {
            return value
        }
    }

    sepiaFilter() {                                           // sepia filter 
        const sepia = parseInt(this.sepiaSlider.value);
        this.filters = this.filters + 'sepia(' + sepia + '%) ';
        if (this.blurSlider.value != 0) {
            const blur = parseInt(this.blurSlider.value);
            this.ctx.filter = 'sepia(' + sepia + '%) blur(' + blur + 'px)';     // sprawdzenie czy suwaczki sa ustawione na wartosci i jak sa to ją wywołuje zeby sepia działała z blurem
        } else {
            this.ctx.filter = 'sepia(' + sepia + '%)';
        }
        if (!this.painted) return
        this.drawImage(this.image)
        this.changeContrast()
        this.changeBrightness();
    }


    onLoad() {                          //wczytywanie obrazka
        this.drawImage(this.image);
        this.painted = true;
        this.changeContrast();
        this.changeBrightness();
    }
}


class PhotoShop {                                // klasa z pędzelkami
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

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.filter.clear();

    }


    draw(x, y, isDown) {          // funkca rysowania 
        if (this.painting) {
            if (isDown) {
                this.ctx.beginPath()
                this.ctx.moveTo(this.lastX, this.lastY)
                this.ctx.lineTo(x, y)
                this.ctx.closePath()
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






