class Ball {
    ball = {     //obiekt piłeczki 
        obj: document.querySelector('.ball'),
        top: 50,
        left: 50,
        stop: false,
    };
    startTime;
    finishTime = 0;
    beta;
    gamma;

    changeBallPosition() {      // sterowanie nasza piłeczką 
        setTimeout(() => {
            if (this.beta < -0.1) {
                this.ball.top += (0.02 * this.beta);
                if (this.ball.top < 0) {
                    this.ball.top = 0;
                }
            } else if (this.beta > 0.1) {
                this.ball.top += (0.02 * this.beta);
                if (this.ball.top > 600) {
                    this.ball.top = 600;
                }
            }
            if (this.gamma < -0.1) {
                this.ball.left += (0.02 * this.gamma);
                if (this.ball.left < 0) {
                    this.ball.left = 0;
                }
            } else if (this.gamma > 0.1) {
                this.ball.left += (0.02 * this.gamma);
                if (this.ball.left > 380) {
                    this.ball.left = 380;
                }
            }
            this.ball.obj.style.top = this.ball.top + "px";
            this.ball.obj.style.left = this.ball.left + "px";
            this.testBall();
            document.querySelector('#timer').innerHTML = "Timer: " + ((Date.now() - this.startTime) / 1000).toFixed(2);
            if (this.ball.stop) {
                return;
            }
            this.changeBallPosition();
        }, 10);
    }

    testBall() {                        // wykrycie  kolizji  na trigerach, gdy nastąpi kolizja to cos się stanie 
        if (this.ballCollision(document.querySelector('#tpInTrigger'))) { // gdy wejdziemy do niebieskiego pola przenosi nas na drugą srone rzeki 
            this.ball.top = 460;
            this.ball.left = 50;
        }
        if (this.ballCollision(document.querySelector('#water'))) {    // gdy dotkniemy wody przenosi nas na miejse startu
            this.restart();
        }
        if (this.ballCollision(document.querySelector('#finishTrigger'))) {
            this.ball.stop = true;
            if (this.finishTime == 0) {
                this.finishTime = ((Date.now() - this.startTime) / 1000).toFixed(2);
            } else if (this.finishTime > (Date.now() - this.startTime) / 1000) {
                this.finishTime = ((Date.now() - this.startTime) / 1000).toFixed(2);
            }
            document.querySelector('#best').innerHTML = "Best time: " + this.finishTime;
        }
    }

    ballCollision(obj) {    // sprawdzanie czy piłeczka koliduje z danym obiektem
        const objData = obj.getBoundingClientRect();
        const ballData = this.ball.obj.getBoundingClientRect();
        if ((ballData.left < objData.left + objData.width)
            && (ballData.left + ballData.width > objData.left)
            && (ballData.top < objData.top + objData.height)
            && (ballData.top + ballData.height > objData.top)) {
            return true
        } else {
            return false;
        }
    }

    restart() {              // restart gry (piłeczka wraca do miejsca startu, restartowany jest czas)
        this.ball.top = 50;
        this.ball.left = 50;
        this.changeBallPosition();
        this.ball.stop = false;
        this.startTime = Date.now();
    }
}

let startFunctionChangeBallPosition = true;
let ball = new Ball();

function handleOrientation(event) {    // obsługa sensorów ( device oreientation )
    ball.beta = event.beta;
    ball.gamma = event.gamma;
    if (startFunctionChangeBallPosition) {
        startFunctionChangeBallPosition = false;
        ball.changeBallPosition();
        ball.startTime = Date.now();
    }

}

window.addEventListener('deviceorientation', handleOrientation);  // do aplikacji www dodaj zdarzenie deviceovertation ( sensory polozenia )
document.querySelector('#restart').addEventListener('click', () => { ball.restart() });  // przyciisk restartu