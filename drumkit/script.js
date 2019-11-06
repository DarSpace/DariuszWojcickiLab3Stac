
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

const aClap = document.querySelector("#aClap1");
const sBoom = document.querySelector("#sBoom1");
const pHihat = document.querySelector("#pHihat1");
const dKick = document.querySelector("#dKick1");
const iOpenhat = document.querySelector("#iOpenhat1");
const oRide = document.querySelector("#oRide1");
const jSnare = document.querySelector("#jSnare1");
const lTink = document.querySelector("#lTink1");
const kTom = document.querySelector("#kTom1");

function checkRecrdings(key) {
  if (isRecording1) {
    //{time: Date.now() - czasTerazniejszy1, key: key}
    listaCzasow1.push(Date.now() - czasTerazniejszy1); // zapamiętuje kiedy nagrany jest dzwięk
    listaDzwiekow1.push(key);
  }

  if (isRecording2) {
    listaCzasow2.push(Date.now() - czasTerazniejszy2);
    listaDzwiekow2.push(key);
  }

  if (isRecording3) {
    listaCzasow3.push(Date.now() - czasTerazniejszy3);
    listaDzwiekow3.push(key);
  }

  if (isRecording4) {
    listaCzasow4.push(Date.now() - czasTerazniejszy4);
    listaDzwiekow4.push(key);
  }
}


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
    checkRecrdings('#aClap');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playClap);
document.body.addEventListener("keydown", event => {      //animacja 
  if (event.keyCode === "A".charCodeAt(0)) {
    aClap.classList.add("aClap-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "A".charCodeAt(0)) {
    aClap.classList.remove("aClap-active");
  }
});


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

    checkRecrdings('#sBoom');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playBoom);
document.body.addEventListener("keydown", event => {       //animacja 
  if (event.keyCode === "S".charCodeAt(0)) {
    sBoom.classList.add("sBoom-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "S".charCodeAt(0)) {
    sBoom.classList.remove("sBoom-active");
  }
});                                                     // animacja 


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

    checkRecrdings('#pHihat');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playHihat);
document.body.addEventListener("keydown", event => {    //animacja 
  if (event.keyCode === "P".charCodeAt(0)) {
    pHihat.classList.add("pHihat-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "P".charCodeAt(0)) {
    pHihat.classList.remove("pHihat-active");
  }
});                                                     // animacja 



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

    checkRecrdings('#dKick');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playKick);
document.body.addEventListener("keydown", event => {   //animacja 
  if (event.keyCode === "D".charCodeAt(0)) {
    dKick.classList.add("dKick-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "D".charCodeAt(0)) {
    dKick.classList.remove("dKick-active");
  }
});                                                     // animacja 


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

    checkRecrdings('#iOpenhat');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playOpenhat);
document.body.addEventListener("keydown", event => {     //animacja 
  if (event.keyCode === "I".charCodeAt(0)) {
    iOpenhat.classList.add("iOpenhat-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "I".charCodeAt(0)) {
    iOpenhat.classList.remove("iOpenhat-active");
  }
});                                                     // animacja 



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

    checkRecrdings('#oRide');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playRide);
document.body.addEventListener("keydown", event => {    //animacja 
  if (event.keyCode === "O".charCodeAt(0)) {
    oRide.classList.add("oRide-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "O".charCodeAt(0)) {
    oRide.classList.remove("oRide-active");
  }
});                                                     // animacja 



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

    checkRecrdings('#jSnare');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playSnare);
document.body.addEventListener("keydown", event => {    //animacja 
  if (event.keyCode === "J".charCodeAt(0)) {
    jSnare.classList.add("jSnare-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "J".charCodeAt(0)) {
    jSnare.classList.remove("jSnare-active");
  }
});                                                     // animacja 


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

    checkRecrdings('#lTink');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playTink);
document.body.addEventListener("keydown", event => {     //animacja 
  if (event.keyCode === "L".charCodeAt(0)) {
    lTink.classList.add("lTink-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "L".charCodeAt(0)) {
    lTink.classList.remove("lTink-active");
  }
});                                                     // animacja 



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

    checkRecrdings('#kTom');
  }
  console.log(channel1);
}
document.body.addEventListener('keypress', playTom);
document.body.addEventListener("keydown", event => {   //animacja 
  if (event.keyCode === "K".charCodeAt(0)) {
    kTom.classList.add("kTom-active");
  }
});
document.body.addEventListener("keyup", event => {
  if (event.keyCode === "K".charCodeAt(0)) {
    kTom.classList.remove("kTom-active");
  }
});              // animacja 



// nagrywanie ==========================================


var czasTerazniejszy1;
var listaCzasow1 = [];
var listaDzwiekow1 = [];
var isRecording1 = false; // domyslnie nie nagrywa ale nagrywa 

document.querySelector('#pRecord1').addEventListener("mousedown", (e) => {
  if (!isRecording1) {
    czasTerazniejszy1 = Date.now();
    listaCzasow1 = [];
    listaDzwiekow1 = [];
    isRecording1 = true;
    document.querySelector('#pRecord1').innerHTML = "Stop";
  }
  else {
    isRecording1 = false;
    document.querySelector('#pRecord1').innerHTML = "Record";
  }
})

document.querySelector('#pPlay1').addEventListener("mousedown", (e) => {
  for (let i = 0; i < listaDzwiekow1.length; i++) {
    setTimeout(() => {
      document.querySelector(listaDzwiekow1[i]).currentTime = 0; // rozpoczynanie "od nowa":)
      document.querySelector(listaDzwiekow1[i]).play();
    }, listaCzasow1[i])//opoznienie
  }
})






var czasTerazniejszy2;
var listaCzasow2 = [];
var listaDzwiekow2 = [];
var isRecording2 = false;

document.querySelector('#pRecord2').addEventListener("mousedown", (e) => {
  if (!isRecording2) {
    czasTerazniejszy2 = Date.now();
    listaCzasow2 = [];
    listaDzwiekow2 = [];
    isRecording2 = true;
    document.querySelector('#pRecord2').innerHTML = "Stop";
  }
  else {
    isRecording2 = false;
    document.querySelector('#pRecord2').innerHTML = "Record";
  }
})

document.querySelector('#pPlay2').addEventListener("mousedown", (e) => {
  for (let i = 0; i < listaDzwiekow2.length; i++) {
    //let dzwiek = lista2[i];
    setTimeout(() => {
      document.querySelector(listaDzwiekow2[i]).currentTime = 0;
      document.querySelector(listaDzwiekow2[i]).play();
    }, listaCzasow2[i])
  }
})




var czasTerazniejszy3;
var listaCzasow3 = [];
var listaDzwiekow3 = [];
var isRecording3 = false;

document.querySelector('#pRecord3').addEventListener("mousedown", (e) => {
  if (!isRecording3) {
    czasTerazniejszy3 = Date.now();
    listaCzasow3 = [];
    listaDzwiekow3 = [];
    isRecording3 = true;
    document.querySelector('#pRecord3').innerHTML = "Stop";
  }
  else {
    isRecording3 = false;
    document.querySelector('#pRecord3').innerHTML = "Record";
  }
})

document.querySelector('#pPlay3').addEventListener("mousedown", (e) => {
  for (let i = 0; i < listaDzwiekow3.length; i++) {
    //let dzwiek = lista3[i];
    setTimeout(() => {
      document.querySelector(listaDzwiekow3[i]).currentTime = 0;
      document.querySelector(listaDzwiekow3[i]).play();
    }, listaCzasow3[i])
  }
})





var czasTerazniejszy4;
var listaCzasow4 = [];
var listaDzwiekow4 = [];
var isRecording4 = false;

document.querySelector('#pRecord4').addEventListener("mousedown", (e) => {
  if (!isRecording4) {
    czasTerazniejszy4 = Date.now();
    listaCzasow4 = [];
    listaDzwiekow4 = [];
    isRecording4 = true;
    document.querySelector('#pRecord4').innerHTML = "Stop";
  }
  else {
    isRecording4 = false;
    document.querySelector('#pRecord4').innerHTML = "Record";
  }
})

document.querySelector('#pPlay4').addEventListener("mousedown", (e) => {
  for (let i = 0; i < listaDzwiekow4.length; i++) {
    //let dzwiek = lista4[i];
    setTimeout(() => {
      document.querySelector(listaDzwiekow4[i]).currentTime = 0;
      document.querySelector(listaDzwiekow4[i]).play();
    }, listaCzasow4[i])
  }
})