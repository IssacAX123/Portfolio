
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
let button;
let a;
let select = document.querySelector("#certificates-dropdown");
select.addEventListener('change', ()=>{
    showCertificates(select);
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
    a = document.createElement("a");
    a.href = certificates[title]["url"]
    a.target = "_blank";
    button = document.createElement("button");
    button.textContent = title
    button.style.height = "3em";
    button.style.minWidth = "13em";
    button.style.margin = "1em";
    a.appendChild(button);
    certificate_container.appendChild(a);
}

select.dispatchEvent(new Event('change'));
