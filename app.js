
let track_art = document.querySelector('.pic');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
//let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : './img/yoda.jpg',
        name : 'BRAK MUSIC',
        artist : '',
        music : './music/yoda.mp3'
    },
    {
        img : './img/aint_no_sunshine-canen.jpg',
        name : 'Aint No Sunshine',
        artist : 'Canen',
        music : './music/aint_no_sunshine-canen.mp3'
    },
    {
        img : './img/dont_say_goodbye-alok.jpg',
        name : "Don't Say Goodbye",
        artist : 'Alok',
        music : './music/dont_say_goodbye-alok.mp3'
    },
    {
        img : './img/duckTales-saturday_morning_slow_jams.jpg',
        name : 'DuckTales',
        artist : 'Saturday Morning Slow Jams',
        music : './music/duckTales-saturday_morning_slow_jams.mp3'
    },
    {
        img : './img/gangstas_paradise-lv.jpg',
        name : "Gangsta's Paradise",
        artist : 'L.V.',
        music : './music/gangstas_paradise-lv.mp3'
    },
    {
        img : './img/bad_to_the_bone-George_thorogood.jpg',
        name : 'Bad to the Bone',
        artist : 'George Thorogood',
        music : './music/bad_to_the_bone-George_thorogood.mp3'
    },
    {
        img : './img/001.jpg',
        name : 'Itsy Bitsy Spider',
        artist : 'Joey Deluxe',
        music : './music/001.mp3'
    },
    {
        img : './img/002.jpg',
        name : 'River',
        artist : 'Bishop Briggs',
        music : './music/002.mp3'
    },
    {
        img : './img/003.jpg',
        name : 'The Humbling River',
        artist : 'Puscifer',
        music : './music/003.mp3'
    },
    {
        img : './img/004.jpg',
        name : 'This Life',
        artist : 'Curtis Stigers & The Forest Ranger',
        music : './music/004.mp3'
    },
    {
        img : './img/005.jpg',
        name : 'Wicked Game',
        artist : 'Ursine Vulpine & Annaca',
        music : './music/005.mp3'
    },
    {
        img : './img/006.jpg',
        name : 'Velho Opalão',
        artist : 'Garagem Bluseira',
        music : './music/006.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    // aqui a imagem

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";


    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to left';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ',' + Color1 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
   // track_art.classList.add('rotate');
    //wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    //track_art.classList.remove('rotate');
   // wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

/*
function removeFistTrack() {
    music_list.shift()
} 
*/



function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
    //removeFistTrack()
       

}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}
playRandom()