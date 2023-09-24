// SKILLS, EXPERIENCE, EDUCATION SECTION
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// SHOW MORE, SHOW LESS
function toggleProjects(action) {
    let hiddenProjects = document.querySelectorAll('.hidden-project');
    let hiddenDrawings = document.querySelectorAll('.hidden-drawing');
    let hiddenDigitals = document.querySelectorAll('.hidden-digital');

    if (action === 'programming-more') {
        hiddenProjects.forEach(project => {
            project.style.display = 'block';
        });
        document.getElementById('programming-more').style.display = 'none';
        document.getElementById('programming-less').style.display = 'block';
    } else if (action === 'programming-less') {
        hiddenProjects.forEach(project => {
            project.style.display = 'none';
        });
        document.getElementById('programming-more').style.display = 'block';
        document.getElementById('programming-less').style.display = 'none';
    } else if (action === 'drawing-more') {
        hiddenDrawings.forEach(drawing => {
            drawing.style.display = 'block';
        });
        document.getElementById('drawing-more').style.display = 'none';
        document.getElementById('drawing-less').style.display = 'block';
    } else if (action === 'drawing-less') {
        hiddenDrawings.forEach(drawing => {
            drawing.style.display = 'none';
        });
        document.getElementById('drawing-more').style.display = 'block';
        document.getElementById('drawing-less').style.display = 'none';
    } else if (action === 'digital-more') {
        hiddenDigitals.forEach(digital => {
            digital.style.display = 'block';
        });
        document.getElementById('digital-more').style.display = 'none';
        document.getElementById('digital-less').style.display = 'block';
    } else if (action === 'digital-less') {
        hiddenDigitals.forEach(digital => {
            digital.style.display = 'none';
        });
        document.getElementById('digital-more').style.display = 'block';
        document.getElementById('digital-less').style.display = 'none';
    }
}
    
// EXPANDING DRAWING 
document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('.lightbox-link');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            let imgSrc = this.querySelector('img').getAttribute('src');
            openLightbox(imgSrc);
        });
    });
});

function openLightbox(imgSrc) {
    let lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <img src="${imgSrc}" alt="Zoomed Image">
        <span class="close" onclick="closeLightbox()">&times;</span>
    `;

    document.body.appendChild(lightbox);
    lightbox.style.display = 'flex';

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox || event.target.className === 'close') {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    let lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.remove();
    }
}

// SIDE MENU FOR SMALL SCREEN
var sidemenu = document.getElementById("sidemenu");

function toggleMenu() {
    if (sidemenu.style.right === "0px") {
        sidemenu.style.right = "-200px";
    } else {
        sidemenu.style.right = "0";
    }
}

function closemenu(){
    sidemenu.style.right = "-200px";
}

// CONTACT FORM
const scriptURL = 'https://script.google.com/macros/s/AKfycbz-1AAKrka1_ro3jItiUm_88FyIBGAZkUWCzeYjiI1Z8TgNh5oTrrTm9dMI9_j62YslGg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("confirmation")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})