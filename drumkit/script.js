
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


    const aClap = document.querySelector("#aClap1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "A".charCodeAt(0)) {
        aClap.classList.add("aClap-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "A".charCodeAt(0)) {
        aClap.classList.remove("aClap-active");
      }
    });                                                     // animacja 
                                                      

  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playClap, );






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
    const sBoom = document.querySelector("#sBoom1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "S".charCodeAt(0)) {
        sBoom.classList.add("sBoom-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "S".charCodeAt(0)) {
        sBoom.classList.remove("sBoom-active");
      }
    });                                                     // animacja 
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
    const pHihat = document.querySelector("#pHihat1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "P".charCodeAt(0)) {
        pHihat.classList.add("pHihat-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "P".charCodeAt(0)) {
        pHihat.classList.remove("pHihat-active");
      }
    });                                                     // animacja 
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
    const dKick = document.querySelector("#dKick1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "D".charCodeAt(0)) {
        dKick.classList.add("dKick-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "D".charCodeAt(0)) {
        dKick.classList.remove("dKick-active");
      }
    });                                                     // animacja 
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
    const iOpenhat = document.querySelector("#iOpenhat1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "I".charCodeAt(0)) {
        iOpenhat.classList.add("iOpenhat-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "I".charCodeAt(0)) {
        iOpenhat.classList.remove("iOpenhat-active");
      }
    });                                                     // animacja 
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
    const oRide = document.querySelector("#oRide1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "O".charCodeAt(0)) {
        oRide.classList.add("oRide-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "O".charCodeAt(0)) {
        oRide.classList.remove("oRide-active");
      }
    });                                                     // animacja 
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
    const jSnare = document.querySelector("#jSnare1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "J".charCodeAt(0)) {
        jSnare.classList.add("jSnare-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "J".charCodeAt(0)) {
        jSnare.classList.remove("jSnare-active");
      }
    });                                                     // animacja 
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
    const lTink = document.querySelector("#lTink1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "L".charCodeAt(0)) {
        lTink.classList.add("lTink-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "L".charCodeAt(0)) {
        lTink.classList.remove("lTink-active");
      }
    });                                                     // animacja 
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
    const kTom = document.querySelector("#kTom1");          //animacja 
    document.body.addEventListener("keydown", event => {
      if (event.keyCode === "K".charCodeAt(0)) {
        kTom.classList.add("kTom-active");
      }
    });
    document.body.addEventListener("keyup", event => {
      if (event.keyCode === "K".charCodeAt(0)) {
        kTom.classList.remove("kTom-active");
      }
    });                                                     // animacja 
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

