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

// ===== ギャラリー画像をクリックすると拡大 =====

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function(img){

    img.addEventListener("click", function(){

        document.getElementById("lightbox-img").src = this.src;

        document.getElementById("lightbox").style.display = "flex";

    });

});

function closeLightbox(){

    document.getElementById("lightbox").style.display = "none";

}

// ===== BGM再生・停止 =====

const bgm = document.getElementById("bgm");
const bgmButton = document.getElementById("bgmButton");

function toggleBGM() {

    if (bgm.paused) {

        bgm.play();

        bgmButton.textContent = "⏸️ BGMを停止";

    } else {

        bgm.pause();

        bgmButton.textContent = "🎵 BGMを再生";

    }

}