// main.js
// Funciones globales de UI
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function date() {
    var parrafo = document.getElementById("fecha_vigencia");
    if (parrafo) {
        parrafo.innerHTML = "Fecha de vigencia: " + new Date().toLocaleDateString();
    }
}

function current_year() {
    var parrafo = document.getElementById("año_actual");
    if (parrafo) {
        parrafo.innerHTML = "&copy; " + new Date().getFullYear() + " MyScraper";
    }
}

function updateFadeEffect() {
    const header = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const mobile = document.querySelector('.mobile-container');
    const steps = document.querySelectorAll('.step');
    const logos = document.querySelectorAll('.crypto-logo');

    if (!header || !hero || !mobile) return;

    let scrollY = window.scrollY;
    let fadeRange = window.innerHeight;

    header.style.opacity = scrollY < fadeRange ? 1 - (scrollY / fadeRange) : 0;
    header.style.transform = `translateY(${scrollY < fadeRange ? -scrollY / 2 : -fadeRange / 2}px)`;

    hero.style.opacity = scrollY < fadeRange ? 1 - (scrollY / fadeRange) : 0;
    hero.style.transform = `scale(${scrollY < fadeRange ? 1 - (scrollY / (fadeRange * 5)) : 0.8})`;

    mobile.style.opacity = scrollY < fadeRange ? 1 - (scrollY / fadeRange) : 0;
    mobile.style.transform = `translateY(-50%, -${scrollY < fadeRange ? (scrollY / fadeRange) * 50 : 50}px)`;

    steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        const isFirst = step.classList.contains("step-1");
        const inView = isFirst
            ? rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.1
            : rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.3;

        step.classList.toggle("visible", inView);
    });

    logos.forEach((logo) => {
        const rect = logo.getBoundingClientRect();
        const visibleThreshold = window.innerHeight * 0.85;
        logo.classList.toggle('visible', rect.top < visibleThreshold);
    });

    const scrollContainer = document.querySelector('.presentation-scroll');
    if (scrollContainer) {
        const scrollStart = scrollContainer.offsetTop;
        const scrollEnd = scrollStart + scrollContainer.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, (scrollY - scrollStart) / (scrollEnd - scrollStart)));

        const toggle = progress > 0.5;
        document.querySelectorAll('.scroll-left').forEach(el => el.classList.toggle('out', toggle));
        document.querySelectorAll('.scroll-right').forEach(el => el.classList.toggle('out', toggle));
    }
}

// Eventos generales
window.addEventListener('scroll', updateFadeEffect);
window.addEventListener('load', () => {
    updateFadeEffect();
    current_year();
    date();
});

// Cookies
document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
    if (popup && acceptBtn && !sessionStorage.getItem('cookiesAccepted')) {
        popup.classList.remove('hidden');
        acceptBtn.addEventListener('click', () => {
            sessionStorage.setItem('cookiesAccepted', true);
            popup.classList.add('hidden');
        });
    }
});

// Slider animado
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider .slide');
    let index = 0;
    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
});

// --- FORMULARIO: Delete Account ---
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("deleteAccountForm");

    if (form) {
        emailjs.init("gXuC4AL20b4j9bv36"); // PUBLIC_KEY

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = form.email.value;
            const reason = form.reason.value;
            const additional = form.additional.value || "No additional comments";
            const date = new Date().toLocaleDateString();

            emailjs.send("service_7em3x0p", "template_btpck0r", {
                email,
                reason,
                additional,
                date
            }).then(() => {
                showSuccessPopup();
            }).catch((error) => {
                alert("An error occurred while submitting the request. Please try again.");
                console.error("EmailJS Error:", error);
            });
        });
    }

    function showSuccessPopup() {
        const popup = document.createElement('div');
        popup.className = 'success-popup';

        popup.innerHTML = `<p class="presentation-p">Your request has been submitted successfully. 
            We will delete your personal data from our records.</p>
            <button id="popupCloseBtn">Continue</button>`;

        document.body.appendChild(popup);

        const closeButton = document.getElementById('popupCloseBtn');
        closeButton.addEventListener('click', () => {
            popup.remove();
        });
    }
});
