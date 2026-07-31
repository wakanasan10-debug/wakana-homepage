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