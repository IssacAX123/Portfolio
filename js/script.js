
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
    }else{
        document.body.classList.remove("fixed-nav");
    }
}

window.addEventListener('scroll', stickyNav)


// //padding
// let about = document.querySelector("#about-me");
// if navbar.display

// certificates
let certificates =
    {
        "Advanced Python": {
            "url": "assets/certificates/CertificateOfCompletion_Advanced Python.pdf",
            "tags": ["Python"]},
        "Data Structures": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations Data Structures.pdf",
            "tags": ["Computer Science"]},
        "Algorithm": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations Algorithms.pdf",
            "tags": ["Computer Science"]},
        "Database Developer": {
            "url": "assets/certificates/CertificateOfCompletion_Become a Database Developer.pdf",
            "tags": ["Database"]},
        "Network CompTIA Prep 1": {
            "url": "assets/certificates/CertificateOfCompletion_CompTIA Network N10007 Cert Prep 1 Understanding Networks.pdf",
            "tags": ["Networking"]},
        "Crafting Meaningful HTML": {
            "url": "assets/certificates/CertificateOfCompletion_Crafting Meaningful HTML.pdf",
            "tags": ["Web"]},
        "Java 8 Essential Training": {
            "url": "assets/certificates/CertificateOfCompletion_Java 8 Essential Training.pdf",
            "tags": ["Java"]},
        "Git Essential Training Basics": {
            "url": "assets/certificates/CertificateOfCompletion_Git Essential Training The Basics.pdf",
            "tags": ["Computer Science"]},
        "MongoDB": {
            "url": "assets/certificates/CertificateOfCompletion_Learning MongoDB.pdf",
            "tags": ["Database"]},
        "Design Patterns": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations Design Patterns.pdf",
            "tags": ["Computer Science"]},
        "HTML Essential Training": {
            "url": "assets/certificates/CertificateOfCompletion_HTML Essential Training.pdf",
            "tags": ["Web"]},
        "MySQL": {
            "url": "assets/certificates/CertificateOfCompletion_Learning MySQL Development.pdf",
            "tags": ["Database"]},
        "HTML5 Structure Syntax and Semantics": {
            "url": "assets/certificates/CertificateOfCompletion_HTML5 Structure Syntax and Semantics.pdf",
            "tags": ["Web"]},
        "Discrete Mathematics": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations Discrete Mathematics.pdf",
            "tags": ["Computer Science"]},
        "Programming Beyond Foundations": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations Beyond the Fundamentals.pdf",
            "tags": ["Computer Science"]},
        "SQL": {
            "url": "assets/certificates/CertificateOfCompletion_Learning MySQL Development.pdf",
            "tags": ["Database"]},
        "Github": {
            "url": "assets/certificates/CertificateOfCompletion_Learning GitHub.pdf",
            "tags": ["Computer Science"]},
        "Networking Basics": {
            "url": "assets/certificates/CertificateOfCompletion_Networking Foundations Networking Basics.pdf",
            "tags": ["Networking"]},
        "Database Foundations": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations Databases.pdf",
            "tags": ["Database"]},
        "Python": {
            "url": "assets/certificates/CertificateOfCompletion_Learning Python.pdf",
            "tags": ["Python"]},
        "Java": {
            "url": "assets/certificates/CertificateOfCompletion_Learning Java.pdf",
            "tags": ["Java"]},
        "Python Generators": {
            "url": "assets/certificates/CertificateOfCompletion_Learning Python Generators.pdf",
            "tags": ["Python"]},
        "Programming Fundamentals": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations Fundamentals.pdf",
            "tags": ["Computer Science"]},
        "Programming Real World Examples": {
            "url": "assets/certificates/CertificateOfCompletion_Programming Foundations RealWorld Examples.pdf",
            "tags": ["Computer Science"]},
        "Dictionaries with Python": {
            "url": "assets/certificates/CertificateOfCompletion_Python Data Structures Dictionaries.pdf",
            "tags": ["Computer Science", "Python"]},
        "Linked Lists with Python": {
            "url": "assets/certificates/CertificateOfCompletion_Python Data Structures  Linked Lists.pdf",
            "tags": ["Computer Science", "Python"]},
        "Stacks & Queues with Python": {
            "url": "assets/certificates/CertificateOfCompletion_Python Data Structures  Stacks Queues and Deques.pdf",
            "tags": ["Computer Science", "Python"]},
        "Decorators in Python": {
            "url": "assets/certificates/CertificateOfCompletion_Python Decorators.pdf",
            "tags": ["Computer Science", "Python"]},
        "Design Patterns with Python": {
            "url": "assets/certificates/CertificateOfCompletion_Python Design Patterns.pdf",
            "tags": ["Computer Science", "Python"]},
        "Python Essentials": {
            "url": "assets/certificates/CertificateOfCompletion_Python Essential Training.pdf",
            "tags": ["Python"]},
        "Object-Oriented Programming with Python": {
            "url": "assets/certificates/CertificateOfCompletion_Python ObjectOriented Programming.pdf",
            "tags": ["Computer Science", "Python"]},
        "Full Stack and Front End": {
            "url": "assets/certificates/CertificateOfCompletion_Succeeding in Web Development Full Stack and Front End.pdf",
            "tags": ["Web"]},
    };

certificate_container = document.querySelector("#certificate-container");
let certButton;
let certA;
let certSelect = document.querySelector("#certificates-dropdown");
certSelect.addEventListener('change', ()=>{
    showCertificates(certSelect);
});

function showCertificates(object){
    while (certificate_container.firstChild) {
        certificate_container.removeChild(certificate_container.lastChild);
    }
    for (let title in certificates) {
        console.log(object.value);
        if(object.value !== "All"){
            if(certificates[title]["tags"].includes(object.value)){
                showCertificate(title);
            }
        }else{
            showCertificate(title);
        }
    }
}

function showCertificate(title){
    certA = document.createElement("a");
    certA.href = certificates[title]["url"]
    certA.target = "_blank";
    certButton = document.createElement("button");
    certButton.textContent = title
    certButton.style.height = "3em";
    certButton.style.minWidth = "13em";
    certButton.style.margin = "1em";
    certA.appendChild(certButton);
    certificate_container.appendChild(certA);
}

certSelect.dispatchEvent(new Event('change'));

// Projects
let projects =
    {
        "Forex Trader (Pattern Recognition)": {
            "url": "#",
            "image": "assets/projects/forex-trader.jpg",
            "tags": ["Python", "parallel-programming", "Google Cloud Platform"],
            "displayTags": ["Python"],
            "notes":[
                "Interfaces with Oanda's Rest and Streaming API to get stock prices and access trading account",
                "Calculated mathematical indicators using pandas and NumPy",
                "Used multiprocessing to find and store patterns",
                "Used Multithreading when trading",
                "Used Cython to speed up code",
                "Deployed to GCP VM"]},
        "Djikstra's Shortest Path with Google Maps API": {
            "url": "https://github.com/IssacAX123/gmaps-djikstras-shortest-path",
            "image": "assets/projects/djikstra-google-maps.PNG",
            "tags": ["Java", "JavaFX", "OpenCV"],
            "displayTags": ["Java"],
            "notes":[
                "Interfaces with Google Maps API",
                "Used OpenCV to read Image",
                "Used Dijkstra's Algorithm to calculate the shortest path"]},
        "Sudoku Multiplayer Game": {
            "url": "https://github.com/IssacAX123/sudoku-server",
            "image": "assets/projects/sudoku.PNG",
            "tags": ["Python", "WebSockets", "MongoDB", "Java", "JavaFX", "HTML", "CSS", "Javascript"],
            "displayTags": ["Python", "Java", "Web"],
            "notes":[
                "Made a WebSocket server in Python",
                "Used Asynchronous Programming",
                "Used backtracking to calculate sudoku boards",
                "Used MongoDB to store running games",
                "Used Java/JavaFX to make desktop GUI client",
                "Used HTML,CSS,JavaScript to make web client"]},
        "Youtube Playlist Duration Extention": {
            "url": "https://chrome.google.com/webstore/detail/youtube-playlist-analyser/nocbnhlddghmkcagbnhpegjghahnjgnb",
            "image": "assets/projects/youtube-extention.PNG",
            "tags": ["Javascript", "CSS", "Chrome"],
            "displayTags": ["Web"],
            "notes":[
                "Uses Javascript to access YouTube DOM to retrieve the time of all videos in the playlist",
                "Manipulates YouTube's DOM to add results using CSS & HTML"]},
        "Matrices Calculator": {
            "url": "https://github.com/IssacAX123/Matrices-Calculator",
            "image": "assets/projects/matrix calculation.PNG",
            "tags": ["Python", "Mathematics", "TKinter"],
            "displayTags": ["Python"],
            "notes":[
                "Used Python to calculate matrix addition, subtraction, multiplication, determinant and point of intersection",
                "Used TKinter for GUI"]},
        "Pong Multiplayer": {
            "url": "https://github.com/IssacAX123/Pong-LAN-Multiplayer",
            "image": "assets/projects/pong.PNG",
            "tags": ["Python", "Pygame", "TCP/IP", "Sockets"],
            "displayTags": ["Python"],
            "notes":[
                "Used Python to create TCP/IP Server",
                "Used Asynchronous Programming",
                "Used Pygame to handle graphics",
                "Used multithreading to handle multiple games"]},
        "Reverse Polish Notation Calcultaor": {
            "url": "https://github.com/IssacAX123/RPN-Calculator-CML",
            "displayTags": ["Java"],
            "image": "assets/projects/rpn.PNG",
            "tags": ["Python", "Pygame", "TCP/IP", "Sockets"],
            "notes":[
                "Used Python to create TCP/IP Server",
                "Used Asynchronous Programming",
                "Used Pygame to make game",
                "Used multithreading to handle multiple games"]},
        "Portfolio Website": {
            "url": "https://github.com/IssacAX123/Portfolio",
            "displayTags": ["Web"],
            "image": "assets/projects/portfolio.PNG",
            "tags": ["HTML", "CSS", "JavaScript"],
            "notes":[]},
    };

project_container = document.querySelector("#projects-container");
let projDiv;
let projImg;
let projP;
let projA;
let projSelect = document.querySelector("#projects-dropdown");
projSelect.addEventListener('change', ()=>{
    showProjects(projSelect);
});

function showProjects(object){
    while (project_container.firstChild) {
        project_container.removeChild(project_container.lastChild);
    }
    for (let title in projects) {
        if(object.value !== "All"){
            if(projects[title]["displayTags"].includes(object.value)){
                showProject(title);
            }
        }else{
            showProject(title);
        }
    }
}

function showProject(title){
    projA = document.createElement("a");
    projA.href = projects[title]["url"]
    projA.target = "_blank";

    projDiv = document.createElement("div");
    projDiv.style.height = "10em";
    projDiv.style.width = "15em";
    projDiv.style.display = "flex";
    projDiv.style.flexDirection = "column";

    projImg = document.createElement("img");
    projImg.src = projects[title]["image"]
    projImg.style.maxHeight = "80%";
    projImg.style.maxWidth = "auto";

    projP = document.createElement("p");
    projP.textContent = title
    projP.style.maxWidth = "100%";
    projP.style.maxHeight = "auto";
    projP.style.fontSize = "1.2em";

    projDiv.appendChild(projImg);
    projDiv.appendChild(projP);
    projA.appendChild(projDiv);
    project_container.appendChild(projA);
}

projSelect.dispatchEvent(new Event('change'));