console.log("started")

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.querySelectorAll('.navbar.mini ul')[0]

toggleButton.addEventListener('click', () =>{
    console.log("clicked")
    navbarLinks.classList.toggle('active');
});