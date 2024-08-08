// SKILLS, EXPERIENCE, EDUCATION SECTION
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// WORK EXPERIENCE AND EXTRACURRICULAR
function openExperience(evt, experienceName) {
    var i, experienceContents, experienceLinks;

    // Hide all elements with class="experience-contents"
    experienceContents = document.getElementsByClassName("experience-contents");
    for (i = 0; i < experienceContents.length; i++) {
        experienceContents[i].style.display = "none";
        experienceContents[i].classList.remove("experience-active-tab");
    }

    // Remove the class "experience-active-link" from all elements with class="experience-links"
    experienceLinks = document.getElementsByClassName("experience-links");
    for (i = 0; i < experienceLinks.length; i++) {
        experienceLinks[i].classList.remove("experience-active-link");
    }

    // Show the current tab, and add an "experience-active-link" class to the button that opened the tab
    document.getElementById(experienceName).style.display = "block";
    evt.currentTarget.classList.add("experience-active-link");
    document.getElementById(experienceName).classList.add("experience-active-tab");
}

// Set the default tab to be visible
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("work-experience").style.display = "block";
    document.getElementById("work-experience").classList.add("experience-active-tab");
});

// SHOW MORE, SHOW LESS
function toggleProjects(action) {
    let hiddenProjects = document.querySelectorAll('.hidden-project');
    let hiddenDrawings = document.querySelectorAll('.hidden-drawing');
    let hiddenDigitals = document.querySelectorAll('.hidden-digital');
    let hiddenArchitectures = document.querySelectorAll('.hidden-architecture');

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
    } else if (action === 'architecture-more') {
        hiddenArchitectures.forEach(architecture => {
            architecture.style.display = 'block';
        });
        document.getElementById('architecture-more').style.display = 'none';
        document.getElementById('architecture-less').style.display = 'block';
    } else if (action === 'architecture-less') {
        hiddenArchitectures.forEach(architecture => {
            architecture.style.display = 'none';
        });
        document.getElementById('architecture-more').style.display = 'block';
        document.getElementById('architecture-less').style.display = 'none';
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