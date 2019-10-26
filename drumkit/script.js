
const channel1 = [];
const clap = document.querySelector('#aClap');
const boom = document.querySelector('#sBoom');
const hihat = document.querySelector('#pHihat');
const kick = document.querySelector('#dKick');
const openhat = document.querySelector('#iOpenhat');
const ride = document.querySelector('#oRide');
const snare = document.querySelector('#jSnare');
const tink = document.querySelector('#lTink');
const tom = document.querySelector('#kTom');




// ====Clap_A=====
function playClap(e) {
  if (e.code === 'KeyA') {
    clap.currentTime = 0;
    clap.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });

    const aClap = document.querySelector("#aClap1");
    console.log("dupa", aClap);
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "A".charCodeAt(0)) {
        aClap.classList.add("aClap-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "A".charCodeAt(0)) {
        aClap.classList.remove("aClap-active");
      }
    });



  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playClap);










// ====Boom_S====
function playBoom(e) {
  if (e.code === 'KeyS') {
    boom.currentTime = 0;
    boom.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playBoom);


// =====Hihat_P===========
function playHihat(e) {
  if (e.code === 'KeyP') {
    hihat.currentTime = 0;
    hihat.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playHihat);



// =====Kick_D=======
function playKick(e) {
  if (e.code === 'KeyD') {
    kick.currentTime = 0;
    kick.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playKick);


// ====Openhat_I====
function playOpenhat(e) {
  if (e.code === 'KeyI') {
    openhat.currentTime = 0;
    openhat.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playOpenhat);


// ====Ride_O====
function playRide(e) {
  if (e.code === 'KeyO') {
    ride.currentTime = 0;
    ride.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playRide);


// ====Snare_J====
function playSnare(e) {
  if (e.code === 'KeyJ') {
    snare.currentTime = 0;
    snare.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playSnare);


// ====Tink_L====
function playTink(e) {
  if (e.code === 'KeyL') {
    tink.currentTime = 0;
    tink.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playTink);


// ====Tom_K====
function playTom(e) {
  if (e.code === 'KeyK') {
    tom.currentTime = 0;
    tom.play();
    const time = Date.now();
    channel1.push({
      key: e.code,
      time,
    });
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playTom);













//====================================================
//======RECORD=====

// record.oneclick = e =>
// {
// console.log('I was clicked')
// record.disabled = true;
// record.style.backgroundColor = "blue";
// stoprecord.disabled = false;
// audioChunks = [];
// record.start();
// }


// stopRecord.oneclick = e =>
// {
// console.log("I Was Clicked")
// record.disabled = false;
// stop.disabled = true;
// record.style.backgroundColor = "red";
// record.stop();
// }

// navigator.mediaDevices.getSupportedConstraints.UserMedia({audio:true})
// .then(stream => {handFunction(stream)})

