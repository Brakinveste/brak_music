
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');
let track_num = document.querySelector('.track_num')

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
let isPlaying = true;
let isRandom = true;
let updateTimer;

const music_list = [
    
    {
        img : './img/Blues_Alive.jpg',
        name : 'Hoochie Coochie Man',
        artist : 'Blues Alive',
        music : './music/Blues Alive - Hoochie Coochie Man.mp3'
    },
    {
        img : "./img/AC-DC.jpg",
        name : "Back In Black",
        artist : 'AC-DC',
        music : './music/AC-DC - Back In Black.mp3'
    },
    {
        img : "./img/Alannah_Myles.jpg",
        name : "Black Velvet",
        artist : "Alannah Myles",
        music : './music/Alannah Myles - Black Velvet.mp3'
    },
    {
        img : "./img/Apache_Indian.jpg",
        name : "Boom Shack-a-Lak",
        artist : "Apache Indian",
        music : './music/Apache Indian - Boom Shack-a-Lak.mp3'
    },
    {
        img : "./img/Audio-Slave.jpg",
        name : "Cochise",
        artist : "Audio Slave",
        music : './music/Audio Slave - Cochise.mp3'
    },
    {
        img : "./img/Barns-Courtney.jpg",
        name : "Glitter & Gold",
        artist : "Barns Courtney",
        music : './music/Barns Courtney - Glitter & Gold.mp3'
    },
    {
        img : "./img/Bishop.jpg",
        name : "River",
        artist : "Bishop Briggs",
        music : './music/Bishop Briggs - River.mp3'
    },
    {
        img : "./img/Black-Sabbath.jpg",
        name : "Age Of Reason",
        artist : "Black Sabbath",
        music : './music/Black Sabbath - Age Of Reason.mp3'
    },
    {
        img : "./img/Black-Sabbath002.jpg",
        name : "Iron Man (LIVE)",
        artist : "Black Sabbath",
        music : './music/Black Sabbath - Iron Man (LIVE).mp3'
    },
    {
        img : "./img/Black-Sabbath003.jpg",
        name : "Iron Man",
        artist : "Black Sabbath",
        music : './music/Black Sabbath - Iron Man.mp3'
    },
    {
        img : "./img/Black-Sabbath004.jpg",
        name : "Paranoid",
        artist : "Black Sabbath",
        music : './music/Black Sabbath - Paranoid.mp3'
    },
    {
        img : "./img/Black-Sails.jpg",
        name : "Black Sails OST",
        artist : "",
        music : './music/Black Sails OST.mp3'
    },
    {
        img : "./img/Bluessaraceno.jpg",
        name : "The Devil You Know",
        artist : "Blues Saraceno",
        music : './music/Blues saraceno - the devil you know.mp3'
    },
    {
        img : "./img/CambioNegro.jpg",
        name : "A Profecia (1995)",
        artist : "Cambio Negro",
        music : './music/Cambio Negro - A Profecia (1995).mp3'
    },
    {
        img : "./img/CharlieBrownJR.jpg",
        name : "Pra Não Dizer Que Não Falei Das Flores",
        artist : "Charlie Brown JR.",
        music : './music/Charlie Brown JR. - Pra Não Dizer Que Não Falei Das Flores.mp3'
    },
    {
        img : "./img/Coolio.jpg",
        name : "Gangster's Paradise",
        artist : "Coolio",
        music : './music/Coolio - Gangsters Paradise.mp3'
    },
    {
        img : "./img/DeepPurple.jpg",
        name : "Highway Star",
        artist : "Deep Purple",
        music : './music/Deep Purple - Highway Star.mp3'
    },
    {
        img : "./img/Disturbed.jpg",
        name : "Stupify",
        artist : "Disturbed",
        music : './music/Disturbed - Stupify.mp3'
    },
    {
        img : "./img/DocHolliday.jpg",
        name : "Dead Man's Road",
        artist : "Doc Holliday",
        music : "./music/Doc Holliday - Dead Man's Road.mp3"
    },
    {
        img : "./img/DontSayGoodbye.jpg",
        name : "Don't Say Goodbye",
        artist : "",
        music : "./music/Don't Say Goodbye.mp3"
    },
    {
        img : "./img/Eminem.jpg",
        name : "Lose Yourself",
        artist : "Eminem",
        music : './music/Eminem - Lose Yourself.mp3'
    },
    {
        img : "./img/FingerEleven.jpg",
        name : "Stay In Shadow",
        artist : "Finger Eleven",
        music : './music/Finger Eleven - Stay In Shadow.mp3'
    },
    {
        img : "./img/GabrielFSB.jpg",
        name : "Cumê Agua",
        artist : "Gabriel FSB",
        music : './music/Gabriel FSB - Cumê agua.mp3'
    },
    {
        img : "./img/GangstasParadiseGOESHEAVY!.jpg",
        name : "Gangsta's Paradise GOES HEAVY!",
        artist : "",
        music : "./music/Gangsta's Paradise GOES HEAVY!.mp3"
    },
    {
        img : "./img/GaryClarkJr.jpg",
        name : "Come Together",
        artist : "Gary Clark Jr.",
        music : './music/Gary Clark Jr - Come Together.mp3'
    },
    {
        img : "./img/GeorgeThorogoodBad.jpg",
        name : "Bad to the Bone",
        artist : "George Thorogood",
        music : './music/George Thorogood - Bad to the Bone.mp3'
    },
    {
        img : "./img/GeorgeThorogoodIDrink.jpg",
        name : "I Drink Alone",
        artist : "George Thorogood",
        music : './music/George Thorogood - I Drink Alone.mp3'
    },
    {
        img : "./img/GeorgeThorogoodMove.jpg",
        name : "Move It On Over",
        artist : "George Thorogood",
        music : './music/George Thorogood - Move It On Over.mp3'
    },
    {
        img : "./img/GeorgeThorogoodMustang.jpg",
        name : "Mustang Sally",
        artist : "George Thorogood",
        music : './music/George Thorogood - Mustang Sally.mp3'
    },
    {
        img : "./img/GeorgeThorogoodRide.jpg",
        name : "Ride on",
        artist : "George Thorogood",
        music : './music/George Thorogood - Ride on.mp3'
    },
    {
        img : "./img/GeorgeThorogoodSummertime.jpg",
        name : "Summertime Blues",
        artist : "George Thorogood",
        music : './music/George Thorogood - Summertime Blues.mp3'
    },
    {
        img : "./img/GeorgeThorogoodTheSky.jpg",
        name : "The Sky Is Crying",
        artist : "George Thorogood",
        music : './music/George Thorogood - The Sky Is Crying.mp3'
    },
    {
        img : "./img/H-Blockx.jpg",
        name : "The Power",
        artist : "H-Blockx",
        music : './music/H-Blockx - The Power.mp3'
    },
    {
        img : "./img/HeavyYoungHeathens.jpg",
        name : "Heavy Young Heathens",
        artist : "",
        music : './music/Heavy Young Heathens - Lu.mp3'
    },
    {
        img : "./img/Henry-Mancin.jpg",
        name : "Peter Gun",
        artist : "Henry Mancini",
        music : './music/Henry Mancini - Peter Gun.mp3'
    },
    {
        img : './img/Hidden-Citizens.jpg',
        name : 'Run Run Rebel',
        artist : 'Hidden Citizens',
        music : './music/Hidden Citizens - Run Run Rebel.mp3'
    },
    {
        img : './img/Hollywood-Undead-Everywhere.jpg',
        name : 'Everywhere I Go',
        artist : 'Hollywood Undead',
        music : './music/Hollywood Undead - Everywhere I Go.mp3'
    },
    {
        img : './img/Hollywood-Undead-MyTown.jpg',
        name : 'My Town',
        artist : 'Hollywood Undead',
        music : './music/Hollywood Undead - My Town.mp3'
    },
    {
        img : "./img/James-Brown.jpg",
        name : "Papa's Got A Brand New Bag",
        artist : "James Brown",
        music : "./music/James Brown - Papa's Got A Brand New Bag.mp3"
    },
    {
        img : "./img/Jeremy-Camp.jpg",
        name : "Take My Life",
        artist : "Jeremy Camp",
        music : "./music/Jeremy Camp - Take My Life.mp3"
    },  
    {
        img : "./img/Joey-Deluxe.jpg",
        name : "Itsy Bitsy Spider",
        artist : "Joey Deluxe",
        music : "./music/Joey Deluxe - Itsy Bitsy Spider.mp3"
    },  
    {
        img : "./img/KidRock-Bawitdaba.jpg",
        name : "Bawitdaba",
        artist : "Kid Rock",
        music : "./music/Kid Rock - Bawitdaba.mp3"
    },  
    {
        img : "./img/KidRock-DontTell.jpg",
        name : "Don't Tell Me How To Live",
        artist : "Kid Rock",
        music : "./music/Kid Rock - Don't Tell Me How To Live.mp3"
    },  
    {
        img : "./img/KidRock-LetsRide.jpg",
        name : "Let's Ride",
        artist : "Kid Rock",
        music : "./music/Kid Rock - Let's Ride.mp3"
    },  
    {
        img : "./img/KidRock-Rockon.jpg",
        name : "Rock on",
        artist : "Kid Rock",
        music : "./music/Kid Rock - Rock on.mp3"
    },  
    {
        img : "./img/KimYeji-River.jpg",
        name : "River",
        artist : "Kim Yeji",
        music : "./music/Kim Yeji - River.mp3"
    },  
    {
        img : "./img/LV-Gangsta.jpg",
        name : "Gangsta's Paradise",
        artist : "L.V.",
        music : "./music/L.V. - Gangsta's Paradise.mp3"
    },  
    {
        img : "./img/Larkin-Poe-Bad.jpg",
        name : "Bad To The Bone",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Bad To The Bone.mp3"
    },  
    {
        img : "./img/Larkin-Poe-Bleach.jpg",
        name : "Bleach Blonde Bottle Blues",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Bleach Blonde Bottle Blues.mp3"
    },  
    {
        img : "./img/Larkin-Poe-Buddy.jpg",
        name : "Buddy Guy",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Buddy Guy.mp3"
    },  
    {
        img : "./img/Larkin-Poe-Fly.jpg",
        name : "Fly Away",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Fly Away.mp3"
    },  
    {
        img : "./img/Larkin-Poe-HardTimeKilling.jpg",
        name : "Hard Time Killing Floor Blues",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Hard Time Killing Floor Blues.mp3"
    },  
    {
        img : "./img/Larkin-Poe-JohnnyB.jpg",
        name : "Johnny B. Goode",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Johnny B. Goode.mp3"
    },  
    {
        img : "./img/Larkin-Poe-LookAway.jpg",
        name : "Look Away",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Look Away.mp3"
    },  
    {
        img : "./img/Larkin-Poe-Mississippi.jpg",
        name : "Mississippi",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Mississippi.mp3"
    },  
    {
        img : "./img/Larkin-Poe-NoParticular.jpg",
        name : "No Particular Place To Go",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - No Particular Place To Go.mp3"
    },  
    {
        img : "./img/Larkin-Poe-PreachinBlues.jpg",
        name : "Preachin Blues",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Preachin Blues.mp3"
    },  
    {
        img : "./img/Larkin-Poe-SugarHigh.jpg",
        name : "Sugar High",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Sugar High.mp3"
    },  
    {
        img : "./img/Larkin-Poe-Trouble.jpg",
        name : "Trouble In Mind",
        artist : "Larkin Poe",
        music : "./music/Larkin Poe - Trouble In Mind.mp3"
    },  
    {
        img : "./img/Lillgamlan-Badtothebone.jpg",
        name : "Bad to the bone",
        artist : "Lillgamlan",
        music : "./music/Lillgamlan - Bad to the bone.mp3"
    },  
    {
        img : "./img/Luke-Wylde-DevilsOnTheLoose.jpg",
        name : "Devils On The Loose",
        artist : "Luke Wylde",
        music : "./music/Luke Wylde - Devils On The Loose.mp3"
    },  
    {
        img : "./img/Lynyrd-Skynyrd-FreeBird.jpg",
        name : "Free Bird",
        artist : "Lynyrd Skynyrd",
        music : "./music/Lynyrd Skynyrd - Free Bird.mp3"
    },
    {
        img : "./img/godandguns.jpg",
        name : "God & Guns",
        artist : "Lynyrd Skynyrd",
        music : "./music/Lynyrd Skynyrd - God & Guns.mp3"
    },  
    {
        img : "./img/Lynyrd-Skynyrd-Ineedyou.jpg",
        name : "I need you",
        artist : "Lynyrd Skynyrd",
        music : "./music/Lynyrd Skynyrd - I need you.mp3"
    },  
    {
        img : "./img/Metallica-ImperialMarch.jpg",
        name : "Marcha Imperial",
        artist : "Metallica",
        music : "./music/Metallica - Imperial March.mp3"
    },  
    {
        img : "./img/Ozzy-Osbourne-Hellraiser.jpg",
        name : "Hellraiser",
        artist : "Ozzy Osbourne",
        music : "./music/Ozzy Osbourne - Hellraiser.mp3"
    },  
    {
        img : "./img/Pacific-Rim-Main-Theme.jpg",
        name : "Pacific Rim",
        artist : "",
        music : "./music/Pacific Rim Main Theme.mp3"
    },  
    {
        img : "./img/Papa-Roach-lastresort.jpg",
        name : "last resort",
        artist : "Papa Roach",
        music : "./music/Papa Roach - last resort.mp3"
    },  
    {
        img : "./img/Postmodern-Jukebox-DreamOn.jpg",
        name : "Dream On",
        artist : "Postmodern Jukebox",
        music : "./music/Postmodern Jukebox - Dream On.mp3"
    },  
    {
        img : "./img/Prodigy-Poison.jpg",
        name : "Poison",
        artist : "Prodigy",
        music : "./music/Prodigy - Poison.mp3"
    },  
    {
        img : "./img/Queen-WeWillRockYou.jpg",
        name : "We Will Rock You",
        artist : "Queen",
        music : "./music/Queen - We Will Rock You.mp3"
    },  
    {
        img : "./img/Rage-Against-The-Machine-KillingInTheName.jpg",
        name : "Killing In The Name",
        artist : "Rage Against The Machine",
        music : "./music/Rage Against The Machine - Killing In The Name.mp3"
    },  
    {
        img : "./img/RagnBone-Man-Human.jpg",
        name : "Human",
        artist : "Rag'n'Bone Man",
        music : "./music/Rag'n'Bone Man - Human.mp3"
    },  
    {
        img : "./img/Robin-Loxley-Jay-Hawke-cropwontevercome.jpg",
        name : "Crop Won't Ever Come",
        artist : "Robin Loxley & Jay Hawke",
        music : "./music/Robin Loxley & Jay Hawke - crop won't ever come.mp3"
    },  
    {
        img : "./img/Royal-Deluxe-Bad.jpg",
        name : "Bad",
        artist : "Royal Deluxe",
        music : "./music/Royal Deluxe - Bad.mp3"
    },  
    {
        img : "./img/Sons-of-Anarchy-HouseofSAMCRO.jpg",
        name : "House of SAMCRO",
        artist : "Sons of Anarchy",
        music : "./music/Sons of Anarchy - House of SAMCRO.mp3"
    },  
    {
        img : "./img/Sons-of-Anarchy-ThisLife.jpg",
        name : "This Life",
        artist : "Sons of Anarchy",
        music : "./music/Sons of Anarchy - This Life.mp3"
    },  
    {
        img : "./img/Steppenwolf-BornToBeWild.jpg",
        name : "Born To Be Wild",
        artist : "Steppenwolf",
        music : "./music/Steppenwolf - Born To Be Wild.mp3"
    },  
    {
        img : "./img/Stone-featGDyN-Speechless.jpg",
        name : "Speechless",
        artist : "Stone feat GDyN",
        music : "./music/Stone feat GDyN - Speechless.mp3"
    },  
    {
        img : "./img/Survivor-EyeOfTheTiger.jpg",
        name : "Eye Of The Tiger",
        artist : "Survivor",
        music : "./music/Survivor - Eye Of The Tiger.mp3"
    },  
     
    {
        img : "./img/The-Last-of-the-MohicansTURNSMETAL.jpg",
        name : "The Last of the Mohicans TURNS METAL",
        artist : "",
        music : "./music/The Last of the Mohicans TURNS METAL.mp3"
    },  
    {
        img : "./img/The-Phantoms-WatchMe.jpg",
        name : "Watch Me",
        artist : "The Phantoms",
        music : "./music/The Phantoms - Watch Me.mp3"
    },  
    {
        img : "./img/The-Prodigy-DieselPower.jpg",
        name : "Diesel Power",
        artist : "The Prodigy",
        music : "./music/The Prodigy - Diesel Power.mp3"
    },  
    {
        img : "./img/The-Score-BornForThis.jpg",
        name : "Born For This",
        artist : "The Score",
        music : "./music/The Score - Born For This.mp3"
    },  
    {
        img : "./img/The-Score-Legend.jpg",
        name : "Legend",
        artist : "The Score",
        music : "./music/The Score - Legend.mp3"
    },  
    {
        img : "./img/Tommee-Profitt-Canthelpfallinginlove.jpg",
        name : "Cant help falling in love (dark version)",
        artist : "Tommee Profitt",
        music : "./music/Tommee Profitt - Cant help falling in love (dark version).mp3"
    },  
    {
        img : "./img/Trans-Siberian-Orchestra-Metallica-Beethoven5thSymph.jpg",
        name : "5ª Simfonia de Beethoven",
        artist : "Trans-Siberian Orchestra & Metallica",
        music : "./music/Trans-Siberian Orchestra & Metallica - Beethoven's 5th Symph.mp3"
    },  
    {
        img : "./img/Velhas-Virgens-Abreessaspernaspramim.jpg",
        name : "Abre essas pernas pra mim",
        artist : "Velhas Virgens",
        music : "./music/Velhas Virgens - Abre essas pernas pra mim.mp3"
    },  
    {
        img : "./img/Velho-Opalao-GaragemBluseira.jpg",
        name : "Garagem Bluseira",
        artist : "Velho Opalão",
        music : "./music/Velho Opalao - Garagem Bluseira.mp3"
    },  
    {
        img : "./img/Warhall-Deadmanwalking.jpg",
        name : "Dead man walking",
        artist : "Warhall",
        music : "./music/Warhall - Dead man walking.mp3"
    },  
    {
        img : "./img/Willy-Moon-RailroadTrack.jpg",
        name : "Railroad Track",
        artist : "Willy Moon",
        music : "./music/Willy Moon - Railroad Track.mp3"
    },  
    {
        img : "./img/Zayde-Wolf-Newblood.jpg",
        name : "New Blood",
        artist : "Zayde Wolf",
        music : "./music/Zayde Wolf - New blood.mp3"
    },  
    
    
];

console.log(music_list)


loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    // aqui a imagem

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    //track_art.style.background-size = 'cover';


    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    track_num.textContent = track_index;
    

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
   // random_bg_color();
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