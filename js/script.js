
// hamburger menu toggle
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.querySelectorAll('.navbar.mini ul')[0]

toggleButton.addEventListener('click', () =>{
    console.log("clicked")
    navbarLinks.classList.toggle('active');
});

// Sticky scroll
const navbar = Array.from(document.querySelectorAll('.navbar')).filter(s =>
    window.getComputedStyle(s).getPropertyValue('display') !== 'none'
)[0];
const navTop = navbar.offsetTop;
function stickyNav() {
    if(window.scrollY >= navTop){
        document.body.classList.add("fixed-nav");
        navbar.style.background("white");
    }else{
        document.body.classList.remove("fixed-nav");
    }
}

window.addEventListener('scroll', stickyNav)