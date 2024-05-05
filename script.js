let isAwakeRunning = true;

function playAudio(url) {
    const audio = new Audio(url);
    audio.play();
}
function exitapps() {
    let firstframe = document.getElementById("firstframe");
    // firstframe.style.animation="exitapps 1s";
    firstframe.setAttribute("style", "display:none");
}

document.getElementsById("hi").addEventListener("click", exitapps);
function exitapps() {
    let firstframe = document.getElementById("firstframe");
    // firstframe.style.animation="exitapps 1s";
    firstframe.setAttribute("style", "display:none");
}
function awake() {
    function awakeclick() {
        document.getElementsByClassName("lockicon")[0].style.animation =
            "fingerprint 0.8s ";
        document.getElementsByClassName("inner")[0].style.animation =
            "innerawake 0.8s";
        playAudio("./the_unlock_sound.mp3");
        document.getElementsByClassName("inner")[0].style.opacity = 1;
    }
    awakeclick();
    let inner = document.getElementsByClassName("inner")[0];
    inner.ondblclick;
    setTimeout(function () {
        if (!isAwakeRunning) return;
        document.getElementsByClassName("inner")[0].style.animation =
            "innersleep 0.9s";
        setInterval(function () {
            window.location.reload();
        }, 800);
    }, 4000);
}

function show_time() {
    isAwakeRunning = false;

    document.getElementsByClassName("lockicon")[0].style.animation =
        "fingerprint 0.8s ";
    document.getElementsByClassName("inner")[0].style.animation =
        "innerawake 0.8s";
    playAudio("./the_unlock_sound.mp3");
    document.getElementsByClassName("inner")[0].style.opacity = 1;
    document.getElementsByTagName("iframe")[0].style.opacity = 1;
    document.getElementsByClassName("inner")[0].removeAttribute("onclick");
    let hide2 = (document.getElementsByClassName(
        "screen"
    )[0].style.animation = "show_time 0.5s");
    setInterval(function () {
        let hide = (document.getElementsByClassName(
            "screen"
        )[0].style.display = "none");
    }, 500);
    // document.getElementsByClassName("insta")[0].style.opacity = 1;
    document.querySelectorAll(".insta").forEach((i) => {
        i.style.opacity = 1;
    });

    document
        .getElementsByClassName("backbtn")[0]
        .setAttribute("style", "opacity:1");
    document
        .getElementsByClassName("searchbar")[0]
        .setAttribute("style", "opacity:1");

    //selecting app icon so addeventlistener and make iframe with respective links
    let instaElements = document.querySelectorAll(".insta");
    let links = [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.youtube.com/watch?v=W1yNgzTyITc",
        "https://www.amazon.in/",
        "https://www.flipkart.com/",
        "https://in.search.yahoo.com/?fr2=inr",
        "https://www.google.com/chrome/?brand=FKPE&gad_source=1&gclid=CjwKCAiA6KWvBhAREiwAFPZM7kkv-oXeOIFZMDx66HHkoBVhGpT0zs5hLOxsPSCB09NCLME5Be0VxxoCW98QAvD_BwE&gclsrc=aw.ds",
        "https://www.codewithharry.com/",
    ];
    instaElements.forEach((element, index) => {
        element.addEventListener("click", function () {
            let iframe = document.getElementById("firstframe");
            iframe.setAttribute("src", links[index]);
            iframe.style.display = "block";
            iframe.style.animation = "appsopen 0.3s";
        });
    });

    function update() {
        let hours = new Date().getHours() % 12 || 12;
        let min = new Date().getMinutes();
        if (min > 9) {
            document.getElementsByClassName("time")[0].innerHTML =
                hours + ":" + min;
        } else {
            document.getElementsByClassName("time")[0].innerHTML =
                hours + ":" + "0" + min;
        }

        let day = new Date().getDay();
        let date = new Date().getDate();
        let month = new Date().toLocaleString("default", { month: "short" });
        let array = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
        document.getElementsByClassName("time")[1].innerHTML =
            array[day] + " " + date + ", " + month;
    }
    update();
    setInterval(update, 1000);
}
