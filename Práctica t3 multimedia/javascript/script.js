/**
 * Creación de elementos
 * Botones a la escucha
 * o como me gusta decir a mi "cast"botones
 */
const audio = document.getElementById("bgMusic");

const title = document.getElementById("songTitle");
const artist = document.getElementById("songArtist");

const prevBtn = document.getElementById("prevSong");
const nextBtn = document.getElementById("nextSong");
const muteBtn = document.getElementById("muteBtn");

const progressBar = document.getElementById("progressBar");
const currentTimeText = document.getElementById("currentTime");
const totalTimeText = document.getElementById("totalTime");


/**
 * lista de canciones
 * Cuenta como JSON?
 */
const songs = [
  {
    src: "https://www.bensound.com/bensound-music/bensound-dubstep.mp3",
    title: "Dubstep",
    artist: "Bensound"
  },
  {
    src: "https://www.bensound.com/bensound-music/bensound-epic.mp3",
    title: "Epic",
    artist: "Bensound"
  },
  {
    src: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
    title: "Energy",
    artist: "Bensound"
  }
];

let currentSong = Math.floor(Math.random() * songs.length);
let lastVolume = 0.5;

/**
 * Las canciones las guardamos en un arraylist llamado song
 * esta funcion se encarga de extrar una cancion meidente el indice de forma aleatoria
 * usando el math.ramdon dentro de otra arraylist
 * como el generador de enemigos del juego de rol
 * @param {*} i 
 */
function loadSong(i) {
  audio.src = songs[i].src;
  title.textContent = songs[i].title;
  artist.textContent = songs[i].artist;
  audio.volume = lastVolume;
  audio.play();
}
loadSong(currentSong);

/**
 * Sincronizacion de barra de progreso
 * y barra de tiempo
 */
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
}
/**
 * 
 */
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";

  currentTimeText.textContent = formatTime(audio.currentTime);
  totalTimeText.textContent = formatTime(audio.duration);
});

//<<<<-----A partir de aqui.. comienza lo cuestionable------------------------------->>
/**
 * Play/pause
 */
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

/**
 * 
 */
function updateVolumeBar() {
  volumeBar.style.width = (audio.volume * 100) + "%";
}

/**
 * Mutear y desmutear
 */
muteBtn.addEventListener("click", () => {
  if (audio.muted) {
    audio.muted = false;
    audio.volume = lastVolume;
  } else {
    audio.muted = true;
  }
  updateVolumeBar();
});

//Canción anterior
prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
});

//Canción siguiente
nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

/**
 * Teclado sin tocar
 */
document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") prevBtn.click();
  if (e.code === "ArrowRight") nextBtn.click();
  if (e.code === "Space") {
    e.preventDefault();
    muteBtn.click();
  }
});
