const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
        top: topo,
        behavior: "smooth"
    });
}

linksInternos.forEach(item => {
    item.addEventListener("click", scrollToSection);
});