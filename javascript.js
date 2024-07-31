console.log("welcome") ;
let songindex = 1;
let audioElement = new Audio('music/1.m4a') ;
let playPause = document.getElementById('playSong');
let ProgressBar = document.getElementById("ProgressBar");
let gif = document.getElementById("gif");
let fastfor = document.getElementById("forward");
let rewind = document.getElementById("rewind");
// let repeat = document.getElementById("repeat");
let songitems = Array.from(document.querySelectorAll(".songitem"));
let songlist = [
    {Name : "fitoor-bella", filePath: "music/1.m4a", coverPath : "fitoor.jpg"},
    {Name : "HOPE - NF", filePath: "music/2.m4a", coverPath : "nf.jpg"},
    {Name : "Prove Them Wrong - bella", filePath: "music/3.m4a", coverPath : "fitoor.jpg"},
    {Name : "Raakh Zamana Kar - bella", filePath: "music/4.m4a", coverPath : "fitoor.jpg"},
    {Name : "The Search - NF", filePath: "music/5.m4a", coverPath : "nf.jpg"},
    {Name : "When I Grow Up - NF", filePath: "music/6.m4a", coverPath : "nf.jpg"},
];

songitems.forEach((Elements , i)=>{
    Elements.getElementsByTagName("img")[0].src = songlist[i].coverPath;
    Elements.getElementsByClassName("songname")[0].innerHTML = songlist[i].Name;
})

// event listener to play or pause

playPause.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log(audioElement.duration); // for me and out of curosity
        playPause.classList.remove("fa-circle-play");
        playPause.classList.add("fa-circle-pause");
        console.log("timeupdate");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        playPause.classList.remove("fa-circle-pause");
        playPause.classList.add("fa-circle-play");
        gif.style.opacity = 0;
    }})
    //     // audio progress bar
audioElement.addEventListener("timeupdate", ()=>{
    Progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log("timeupdate");
    console.log(Progress);
    ProgressBar.value = Progress;
})

ProgressBar.addEventListener("change", ()=>{
    console.log(audioElement.currentTime = ProgressBar.value * audioElement.duration/100);
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        console.log("👍");
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })}
    
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        element.addEventListener("click" , (e)=>{
            makeAllPlays();
            console.log("👍");
            console.log(element.target);
            songindex = parseInt(e.target.id);
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            audioElement.src = `music/${songindex}.m4a`;
            audioElement.currentTime = 0;
            audioElement.play() ;
            playPause.classList.remove("fa-circle-play");
            playPause.classList.add("fa-circle-pause");
        }
    )}
)

// previous song

rewind.addEventListener("click", ()=>{
    if(audioElement.currentTime <= 2.00){
        songindex--;
        if(songindex == 0){
            songindex = 6;
        }
    }
    audioElement.src = `music/${songindex}.m4a`;
    audioElement.currentTime = 0;
    audioElement.play() ;
    playPause.classList.remove("fa-circle-play");
    playPause.classList.add("fa-circle-pause");
})

// next
fastfor.addEventListener("click", ()=>{
    if(songindex == 6){
        songindex = 1;
    } else {
        songindex += 1;
    }
    audioElement.src = `music/${songindex}.m4a`;
    audioElement.currentTime = 0;
    audioElement.play() ;
    playPause.classList.remove("fa-circle-play");
    playPause.classList.add("fa-circle-pause");
})

if(audioElement.currentTime == audioElement.duration){
    if(songindex == 6){
        songindex = 1;
    }
    songindex++;
    audioElement.src = `music/${songindex}.m4a`;
    audioElement.currentTime = 0;
    audioElement.play() ;
    playPause.classList.remove("fa-circle-play");
    playPause.classList.add("fa-circle-pause");
}