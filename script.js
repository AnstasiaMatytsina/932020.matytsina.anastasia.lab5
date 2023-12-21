function myFunction (props) {
    if (props === 1) {
        document.getElementById("modal-news-1").style.visibility = "visible";
    }
    if (props === 2) {
        document.getElementById("modal-news-2").style.visibility = "visible";
    }
    if (props === 3) {
        document.getElementById("modal-news-3").style.visibility = "visible";
    }
}

document.onclick = function (event) {
    console.log(event.target.id);
    if (!(event.target.className == "modal" || event.target.id == "modal-title" || event.target.id == "modal-text" || event.target.className == "news-button")) {
        document.getElementById("modal-news-1").style.visibility = "hidden";
        document.getElementById("modal-news-2").style.visibility = "hidden";
        document.getElementById("modal-news-3").style.visibility = "hidden";
    };
};