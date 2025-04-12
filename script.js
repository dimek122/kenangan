const music = new Audio('u.mp3');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
playBtn.addEventListener('click', () => {
 music.play();
 playBtn.style.display = 'none';
 pauseBtn.style.display = 'block';
});
pauseBtn.addEventListener('click', () => {
 music.pause();
 playBtn.style.display = 'block';
 pauseBtn.style.display = 'none';
});