
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
        img : './img/inicio.jpg',
        name : 'Avance para começar!',
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
    },
    {
        img : './img/007.jpg',
        name : 'Eye Of The Tiger ',
        artist : 'Survivor ',
        music : './music/007.mp3'
    },
    {
        img : './img/008.jpg',
        name : 'Cochise',
        artist : 'Audio Slave',
        music : './music/008.mp3'
    },
    {
        img : './img/009.jpg',
        name : 'Age Of Reason',
        artist : 'Black Sabbath ',
        music : './music/009.mp3'
    },
    {
        img : './img/011.jpg',
        name : 'Born For This ',
        artist : '? ',
        music : './music/011.mp3'
    },
    {
        img : './img/012.jpg',
        name : ' Cry Me A River',
        artist : 'Von Smith ',
        music : './music/012.mp3'
    },
    {
        img : './img/010.jpg',
        name : 'Iron Man ',
        artist : 'Black Sabbath ',
        music : './music/010.mp3'
    },
    {
        img : './img/013.jpg',
        name : ' Dream On ',
        artist : 'Morgan James  ',
        music : './music/013.mp3'
    },
    {
        img : './img/014.jpg',
        name : 'Everywhere I Go ',
        artist : 'Hollywood_Undead ',
        music : './music/014.mp3'
    },
    {
        img : './img/015.jpg',
        name : 'Intergalactic',
        artist : 'Robyn Adele',
        music : './music/015.mp3'
    },
    {
        img : './img/016.jpg',
        name : "Don't Tell Me How To Live",
        artist : 'Kid Rock  ',
        music : './music/016.mp3'
    },
    {
        img : './img/018.jpg',
        name : 'Bad To The Bone ',
        artist : 'Larkin Poe ',
        music : './music/018.mp3'
    },
    {
        img : './img/020.jpg',
        name : 'Watch Me',
        artist : 'The Phantoms',
        music : './music/020.mp3'
    },
    {
        img : './img/021.jpg',
        name : 'I Need You ',
        artist : 'Lynyrd Skynyrd  ',
        music : './music/021.mp3'
    },
    {
        img : './img/019.jpg',
        name : 'Fly Away ',
        artist : 'Larkin Poe ',
        music : './music/019.mp3'
    },
    {
        img : './img/022.jpg',
        name : 'Marcha Imperial ',
        artist : 'Metallica ',
        music : './music/022.mp3'
    },
    {
        img : './img/017.jpg',
        name : ' Johnny B Good',
        artist : 'Larkin Poe ',
        music : './music/017.mp3'
    },
    {
        img : './img/023.jpg',
        name : 'The Sea',
        artist : 'Morcheeba',
        music : './music/023.mp3'
    },
    {
        img : './img/024.jpg',
        name : 'Hellraiser ',
        artist : 'Ozzy',
        music : './music/024.mp3'
    },
    {
        img : './img/026.jpg',
        name : 'The Bomb',
        artist : 'Pigeon John',
        music : './music/026.mp3'
    },
    {
        img : './img/025.jpg',
        name : 'Changes',
        artist : 'Ozzy & Kelly',
        music : './music/025.mp3'
    },
    {
        img : './img/027.jpg',
        name : 'Peter Gunn',
        artist : "Rock N' Roll Racing",
        music : './music/027.mp3'
    },
    {
        img : './img/028.jpg',
        name : 'House of SAMCRO',
        artist : 'Sons of Anarchy',
        music : './music/028.mp3'
    },
    {
        img : './img/029.jpg',
        name : 'Sound of silence',
        artist : '? ',
        music : './music/029.mp3'
    },
    {
        img : './img/030.jpg',
        name : 'Diesel Power',
        artist : 'The Prodigy',
        music : './music/030.mp3'
    },
        {
        img : './img/031.jpg',
        name : 'We Will Rock You',
        artist : 'Max Raabe',
        music : './music/031.mp3'
    },
    
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