function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function date() {
    // Obtén la referencia al elemento <p>
    var parrafo = document.getElementById("fecha_vigencia");

    // Actualiza el contenido del párrafo con la fecha actual entre corchetes
    parrafo.innerHTML = "Fecha de vigencia: " + new Date().toLocaleDateString() + "";
}

function current_year() {
    // Obtén la referencia al elemento <p>
    var parrafo = document.getElementById("año_actual");

    // Actualiza el contenido del párrafo con la fecha actual entre corchetes
    parrafo.innerHTML = "&copy; " + new Date().getFullYear() + " MyScraper";
}

function updateFadeEffect() {
    var scrollY = window.scrollY;
    var fadeRange = window.innerHeight;

    var header = document.querySelector('header');
    var hero = document.querySelector('.hero');
    var mobile = document.querySelector('.mobile-container');
    var content = document.querySelector('.content');

    // Header
    if (scrollY < fadeRange) {
        header.style.opacity = 1 - (scrollY / fadeRange);
        header.style.transform = 'translateY(' + (-scrollY / 2) + 'px)';
    } else {
        header.style.opacity = 0;
        header.style.transform = 'translateY(-' + (fadeRange / 2) + 'px)';
    }

    // Hero
    if (scrollY < fadeRange) {
        hero.style.opacity = 1 - (scrollY / fadeRange);
        var scale = 1 - (scrollY / (fadeRange * 5));
        hero.style.transform = 'scale(' + scale + ')';
    } else {
        hero.style.opacity = 0;
        hero.style.transform = 'scale(0.8)';
    }

    // Mobile image
    if (scrollY < fadeRange) {
        mobile.style.opacity = 1 - (scrollY / fadeRange);
        var translateY = (scrollY / fadeRange) * 50;
        mobile.style.transform = 'translateY(-50%, -' + translateY + 'px)';
    } else {
        mobile.style.opacity = 0;
        mobile.style.transform = 'translateY(-50%, -50px)';
    }



    const steps = document.querySelectorAll('.step');

    steps.forEach((step, i) => {
        const rect = step.getBoundingClientRect();
        const isFirst = step.classList.contains("step-1");

        const inView = isFirst
            ? rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.1 // más largo
            : rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.3;

        if (inView) {
            step.classList.add("visible");
        } else {
            step.classList.remove("visible");
        }
    });

    // Control de scroll horizontal + fade en Panel 2
    const scrollContainer = document.querySelector('.presentation-scroll');
    const scrollStart = scrollContainer.offsetTop;
    const scrollEnd = scrollStart + scrollContainer.offsetHeight - window.innerHeight;

    const progress = Math.min(1, Math.max(0, (window.scrollY - scrollStart) / (scrollEnd - scrollStart)));

    // Si scroll > 10%, empieza a sacar elementos
    if (progress > 0.5) {
        document.querySelectorAll('.scroll-left').forEach(el => el.classList.add('out'));
        document.querySelectorAll('.scroll-right').forEach(el => el.classList.add('out'));
    } else {
        document.querySelectorAll('.scroll-left').forEach(el => el.classList.remove('out'));
        document.querySelectorAll('.scroll-right').forEach(el => el.classList.remove('out'));
    }

    const logos = document.querySelectorAll('.crypto-logo');

logos.forEach((logo) => {
    const rect = logo.getBoundingClientRect();
    const visibleThreshold = window.innerHeight * 0.85;

    if (rect.top < visibleThreshold) {
        logo.classList.add('visible');
    } else {
        logo.classList.remove('visible');
    }
});


}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener('scroll', updateFadeEffect);
window.addEventListener('load', updateFadeEffect);

document.addEventListener("DOMContentLoaded", function () {
    current_year();
    date();
});

document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!sessionStorage.getItem('cookiesAccepted')) {
        popup.classList.remove('hidden');
    }

    acceptBtn.addEventListener('click', () => {
        sessionStorage.setItem('cookiesAccepted', true);
        popup.classList.add('hidden');
    });

});

  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider .slide');
    let index = 0;

    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 3000); // cambia cada 3 segundos
  });
