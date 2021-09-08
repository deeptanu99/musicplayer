const play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
//create a audio Element
let track = document.createElement('audio');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//All songs list
let All_song = [
  {
    name: "Kabira ",
    path: "music/song1.mp3",
    img: "image/img1.jpg",
    singer: "Arijit singh"
  },
  {
    name: "Tum Ho",
    path: "music/song2.mp3",
    img: "image/img2.jpg",
    singer: "Mohit Chauhan"
  },
  {
    name: "Yeh Dooriyan",
    path: "music/song3.mp3",
    img: "image/img3.jpg",
    singer: "Mohit Chauhan"
  },
  {
    name: "Kyon",
    path: "music/song4.mp3",
    img: "image/img4.jpg",
    singer: "Arijit Singh"
  },
  {
    name: "Tose Naina",
    path: "music/song5.mp3",
    img: "image/img5.jpg",
    singer: "Arijit Singh"
  }
];

//loading the songs
function loadsong(index_no) {

  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.src = All_song[index_no].path;
  present.innerHTML = index_no + 1;

  timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;

}
loadsong(index_no);

//muting the audio

function mute_sound() {
  volume_show.innerHTML = 0;
  recent_volume.value = 0;
  track.volume = 0;
}

//playing next song
function next_song() {
  if (index_no < All_song.length - 1) {
    index_no++;
    loadsong(index_no);
    playsong();

  } else {
    index_no = 0;
    loadsong(index_no);
    playsong();
  }
}

//playing previous song
function previous_song() {
  if (index_no == 0) {
    index_no = All_song.length - 1;
    loadsong(index_no);
    playsong();
  } else {
    index_no = index_no - 1;
    loadsong(index_no);
    playsong();
  }
}


//checking wheather the song is playing or not
function justplay() {
  if (Playing_song == false) {
    playsong();
  }
  else {
    pausesong();
  }

}


//playing the song
function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}


//for pausing song
function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


//changing the volume
function volume_change() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;

}


//the autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = "rgba(255,255,255,0.2)";
  } else {
    autoplay = 1;
    auto_play.style.background = "#FF8A65";
  }
}


//changing the duration of the audio
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

function range_slider() {

  let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (autoplay == 1) {
      index_no ++;
      load_track(index_no);
      playsong();
    }
  }
}



