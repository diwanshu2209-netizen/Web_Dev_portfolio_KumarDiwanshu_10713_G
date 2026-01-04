var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("mousemove", e => {
    const cursor = document.querySelector(".cursor");
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("active");
};