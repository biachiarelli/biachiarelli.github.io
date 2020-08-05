console.log("main")

var navbar = document.getElementById("navbar")
var home = document.getElementById("nav-home")
var project = document.getElementById("nav-project")
var service = document.getElementById("nav-service")
var about = document.getElementById("nav-about")
var contact = document.getElementById("nav-contact")

var navbarList = [home, project, about]


window.onload = function(e){ 
    home.classList.add("active")
}

home.onclick = function (e) {
    removeActive()
    home.classList.add("active")
}

project.onclick = function (e) {
    removeActive()
    project.classList.add("active")
    navbar.style.backgroundColor = "background-color: #F3EDE9;"

}

about.onclick = function (e) {
    removeActive()
    about.classList.add("active")
}


function removeActive() {
    for(item in navbarList){
        navbarList[item].classList.remove("active")
    }

    if(screen.width < 576) {
        document.getElementById("navbarCollapse").classList.remove("show")
    }

}

// Tab about
$('#bologna-list a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

// Navbar scroll
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

