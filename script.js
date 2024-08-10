const content = document.querySelector(".content"),
  playimage = content.querySelector(".music-img img"),
  musicName = content.querySelector(".music-titles .name"),
  musicArtist = content.querySelector(".music-titles .artis"),
  playbtn = content.querySelector(".play-pause"),
  playbtnIcon = content.querySelector(".play-pause span"),
  prevsbtn = content.querySelector("#prev"),
  nxtbtn = content.querySelector("#skip_next"),
  progressBar = content.querySelector(".progress-bar"),
  progressDetails = content.querySelector(".progress-details"),
  repeatBtn = content.querySelector("#repeat"),
  Audioo = document.querySelector(".main-song"),
  playlistmusicshower = document.getElementById("songlist"),
  durationofsong = document.getElementById("durationofsong"),
  playlist = document.getElementById("playlistmusic");
  

  var open= document.querySelector(".open");
  document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
      open.style.display="none";
    },2500)
  })

let index = 1;

window.addEventListener("load", () => {
  loadData(index);
});

function loadData(indexvalue) {
  musicName.innerHTML = songs[indexvalue - 1].name;
  musicArtist.innerHTML = songs[indexvalue - 1].artist;
  playimage.src = "./images/" + songs[indexvalue - 1].img + ".jpg";
  Audioo.src = "music/" + songs[indexvalue - 1].audio + ".mp3";
}
playbtn.addEventListener("click", () => {
  const isMuiscPaused = content.classList.contains("paused");
  if (isMuiscPaused) {
    pausesong();
  } else {
    playsong();
  }
});

function playsong() {
  content.classList.add("paused");
  playbtnIcon.innerHTML = "pause";
  Audioo.play();
}
function pausesong() {
  content.classList.remove("paused");
  playbtnIcon.innerHTML = "play_arrow";
  Audioo.pause();
}

nxtbtn.addEventListener("click", () => {
  nextsong();
});
prevsbtn.addEventListener("click", () => {
  prevsong();
});

function nextsong() {
  index++;
  if (index > songs.length) {
    index = 1;
  } 
  else {
    index = index;
  }
  loadData(index);
  playsong();
}

function prevsong() {
  index--;
  if (index <= 0) {
    index = songs.length;
  } else {
    index = index;
  }
  loadData(index);
  playsong();
}

Audioo.addEventListener("timeupdate", (e) => {
  const initialTime = e.target.currentTime;
  const finalTime = e.target.duration;

  let BarWidth = (initialTime / finalTime) * 100;
  progressBar.style.width = BarWidth + "%";

  progressDetails.addEventListener("click", (e) => {
    let progressValue = progressDetails.clientWidth;
    let clickedOffsetX = e.offsetX;
    let MusicDuration = Audioo.duration;

    Audioo.currentTime = (clickedOffsetX / progressValue) * MusicDuration;
  });

  Audioo.addEventListener("loadeddata", () => {
    let finalTimeData = content.querySelector(".final");

    let AudioDuration = Audioo.duration;
    let finalMinutes = Math.floor(AudioDuration / 60);
    let finalSeconds = Math.floor(AudioDuration % 60);
    if (finalSeconds < 10) {
      finalSeconds = "0" + finalSeconds;
    }
    finalTimeData.innerHTML = finalMinutes + ":" + finalSeconds;
  });

  let currentTimeData = content.querySelector(".current");
  let currentTime = Audioo.currentTime;
  let currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }
  currentTimeData.innerHTML = currentMinutes + ":" + currentSeconds;

  repeatBtn.addEventListener("click", () => {
    Audioo.currentTime = 0;
  });

  shuffle.addEventListener("click", () => {
    var randIndex = Math.floor(Math.random() * songs.length) + 1;

    loadData(randIndex);
    playsong();
  });

  Audioo.addEventListener("ended", () => {
    index++;
    if (index > songs.length) {
      index = 1;
    }
    loadData(index);
    playsong();
  });
});


playlist.addEventListener("click",()=>{
    playlistmusicshower.style.display = "block"
    // durationofsong.style.display = "none"
})
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");

one.addEventListener("click", ()=>{
  index=1
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
two.addEventListener("click", ()=>{
  index=2
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
three.addEventListener("click", ()=>{
  index=3
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
four.addEventListener("click", ()=>{
  index=4
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
five.addEventListener("click", ()=>{
  index=5
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
six.addEventListener("click", ()=>{
  index=6
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
seven.addEventListener("click", ()=>{
  index=7
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
eight.addEventListener("click", ()=>{
  index=8
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})
nine.addEventListener("click", ()=>{
  index=9
  loadData(index);
  playsong();
  playlistmusicshower.style.display = "none"
})


function closeplaylist(){
  playlistmusicshower.style.display="none"
}

// vedio playing section

function playingyoutubevedio1(){
  var video = document.getElementById("vediomainbox1");
  var videoplay = document.getElementById("vedioplayingbox1");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon1(){
  var video = document.getElementById("vediomainbox1");
  var videoplay = document.getElementById("vedioplayingbox1");
  var video1 = document.getElementById("video1");

  video.style.display="none"
  videoplay.style.display="none"
  video1.pause();
}


function playingyoutubevedio2(){
  var video = document.getElementById("vediomainbox2");
  var videoplay = document.getElementById("vedioplayingbox1");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon2(){
  var video = document.getElementById("vediomainbox2");
  var videoplay = document.getElementById("vedioplayingbox2");
  var video2 = document.getElementById("video2");

  video.style.display="none"
  videoplay.style.display="none"
  video2.pause();
}

function playingyoutubevedio3(){
  var video = document.getElementById("vediomainbox3");
  var videoplay = document.getElementById("vedioplayingbox3");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon3(){
  var video = document.getElementById("vediomainbox3");
  var videoplay = document.getElementById("vedioplayingbox3");
  var video3 = document.getElementById("video3");

  video.style.display="none"
  videoplay.style.display="none"
  video3.pause();
}

function playingyoutubevedio4(){
  var video = document.getElementById("vediomainbox4");
  var videoplay = document.getElementById("vedioplayingbox4");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon4(){
  var video = document.getElementById("vediomainbox4");
  var videoplay = document.getElementById("vedioplayingbox4");
  var video4 = document.getElementById("video4");

  video.style.display="none"
  videoplay.style.display="none"
  video4.pause();
}

function playingyoutubevedio5(){
  var video = document.getElementById("vediomainbox5");
  var videoplay = document.getElementById("vedioplayingbox5");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon5(){
  var video = document.getElementById("vediomainbox5");
  var videoplay = document.getElementById("vedioplayingbox5");
  var video5 = document.getElementById("video5");

  video.style.display="none"
  videoplay.style.display="none"
  video5.pause();
}

function playingyoutubevedio6(){
  var video = document.getElementById("vediomainbox6");
  var videoplay = document.getElementById("vedioplayingbox6");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon6(){
  var video = document.getElementById("vediomainbox6");
  var videoplay = document.getElementById("vedioplayingbox6");
  var video6 = document.getElementById("video6");

  video.style.display="none"
  videoplay.style.display="none"
  video6.pause();
}

function playingyoutubevedio7(){
  var video = document.getElementById("vediomainbox7");
  var videoplay = document.getElementById("vedioplayingbox7");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon7(){
  var video = document.getElementById("vediomainbox7");
  var videoplay = document.getElementById("vedioplayingbox7");
  var video7 = document.getElementById("video7");

  video.style.display="none"
  videoplay.style.display="none"
  video7.pause();
}



function playingyoutubevedio8(){
  var video = document.getElementById("vediomainbox8");
  var videoplay = document.getElementById("vedioplayingbox8");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon8(){
  var video = document.getElementById("vediomainbox8");
  var videoplay = document.getElementById("vedioplayingbox8");
  var video8 = document.getElementById("video8");

  video.style.display="none"
  videoplay.style.display="none"
  video8.pause();
}



function playingyoutubevedio9(){
  var video = document.getElementById("vediomainbox9");
  var videoplay = document.getElementById("vedioplayingbox9");

  video.style.display = "block"
  videoplay.style.display="block"
}
function backicon9(){
  var video = document.getElementById("vediomainbox9");
  var videoplay = document.getElementById("vedioplayingbox9");
  var video9 = document.getElementById("video9");

  video.style.display="none"
  videoplay.style.display="none"
  video9.pause();
}