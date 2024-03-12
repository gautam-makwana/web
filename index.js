let typed = new Typed(".multiple",{
    strings: ["Frontend Developer" ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay:1000,
    loop: true
})
function contactbar() {
    window.open("contact.html", '_parent');
}
function home() {
    window.open("index.html", '_parent');
}
function resume() {
    window.open("resume.html", '_parent');
}
function gallery() {
    window.open("gallery.html", '_parent');
}
function biodata() {
    window.open("biodata.html", '_parent');
}
function phone() {
    window.open("tel:9157415103", '_parent');
}
function email() {
    window.open("mailto:gautammakwana0401@gmail.com", '_parent');
}
function facebook() {
    window.open("https://www.facebook.com/profile.php?id=100092457919126", '_parent');
}
function instagram() {
    window.open("https://www.instagram.com/gautam__04?igsh=MTJ6dGZ4cnl5Zml1aw==", '_blank');
}
function linkedin() {
    window.open("https://www.linkedin.com/in/gautam-makwana-03b147286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/", '_blank');
}
function parmarlocation(){
    window.open("https://maps.app.goo.gl/f4v12tQeDk9gdvaD8", '_blank');
}

function inside2() {
    let zoom = document.getElementsByClassName("contactbox2");
    let icon = document.getElementById("icon2");

    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoom.length; i++) {
        let contactbox2 = zoom[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox2).getPropertyValue("width");

        icon.style.fontSize = "22px";
        contactbox2.style.marginTop = "34px";
    }
}

function outside2() {
    let zoomout = document.getElementsByClassName("contactbox2");
    let iconout = document.getElementById("icon2");
    
    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoomout.length; i++) {
        let contactbox2 = zoomout[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox2).getPropertyValue("width");

        iconout.style.fontSize = "16px";
        contactbox2.style.marginTop = "40px";
    }
}
function inside() {
    let zoom = document.getElementsByClassName("contactbox1");
    let icon = document.getElementById("icon1");

    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoom.length; i++) {
        let contactbox1 = zoom[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox1).getPropertyValue("width");

        icon.style.fontSize = "22px";
        contactbox1.style.marginTop = "34px";
    }
}

function outside() {
    let zoomout = document.getElementsByClassName("contactbox1");
    let iconout = document.getElementById("icon1");
    
    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoomout.length; i++) {
        let contactbox1 = zoomout[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox1).getPropertyValue("width");

        iconout.style.fontSize = "16px";
        contactbox1.style.marginTop = "40px";
    }
}
function inside3() {
    let zoom = document.getElementsByClassName("contactbox3");
    let icon = document.getElementById("icon3");

    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoom.length; i++) {
        let contactbox3 = zoom[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox3).getPropertyValue("width");

        icon.style.fontSize = "22px";
        contactbox3.style.marginTop = "34px";
    }
}

function outside3() {
    let zoomout = document.getElementsByClassName("contactbox3");
    let iconout = document.getElementById("icon3");
    
    // Loop through each element with the class "contactbox12"
    for (let i = 0; i < zoomout.length; i++) {
        let contactbox3 = zoomout[i];

        // Get the computed width of contactbox12
        let computedWidth = window.getComputedStyle(contactbox3).getPropertyValue("width");

        iconout.style.fontSize = "16px";
        contactbox3.style.marginTop = "40px";
    }
}
function menubtn() {
    let swipmenu = document.getElementsByClassName('width30')[0]; // Assuming only one element with class 'width30'
    let opacityElement = document.getElementById('opacity');

    if (swipmenu.style.left === "0px") {
        swipmenu.style.left = "-270px";
        opacityElement.style.filter = "brightness(100%)";
    } else {
        swipmenu.style.left = "0px";
        opacityElement.style.filter = "brightness(50%)";
    }
}

function opacity() {
    let opacity1 = document.getElementById('opacity');
    let swipmenu = document.getElementsByClassName('width30')[0];

    if (swipmenu.style.left === "0px") {
        swipmenu.style.left = "-270px";
        opacity1.style.filter = "brightness(100%)";
    } 
}

