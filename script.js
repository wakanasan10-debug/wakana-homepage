// ページ切り替え

function showPage(pageId){

    const pages=document.querySelectorAll(".page");

    pages.forEach(function(page){

        page.style.display="none";

    });

    document.getElementById(pageId).style.display="block";

}

// ホームを最初に表示

window.onload=function(){

    showPage("home");

};

/* ===== BGM ===== */

const musicList = [
    { title: "bgm01.mp3", file: "music/bgm01.mp3" },
    { title: "bgm02.mp3", file: "music/bgm02.mp3" },
    { title: "bgm03.mp3", file: "music/bgm03.mp3" }
];

const bgmPlayer = document.getElementById("bgmPlayer");
const bgmSelect = document.getElementById("bgmSelect");
const nowPlaying = document.getElementById("nowPlaying");
const volumeControl = document.getElementById("volumeControl");

musicList.forEach((music, index) => {

    const option = document.createElement("option");

    option.value = index;

    option.textContent = music.title;

    bgmSelect.appendChild(option);

});

bgmPlayer.volume = 0.5;

function playBGM(){

    const music = musicList[Number(bgmSelect.value)];

    bgmPlayer.pause();
    bgmPlayer.currentTime = 0;

    bgmPlayer.src = music.file;

    bgmPlayer.load();

    bgmPlayer.play();

    nowPlaying.textContent = "♪ 再生中 : " + music.title;

}

function pauseBGM(){

    bgmPlayer.pause();

}

function stopBGM(){

    bgmPlayer.pause();

    bgmPlayer.currentTime = 0;

}

volumeControl.addEventListener("input", function(){

    bgmPlayer.volume = this.value;

});