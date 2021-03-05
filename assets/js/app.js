const closeBtn = document.getElementById("close--btn");
const openBtn = document.getElementById("open--btn");

const desktopHeader = document.getElementById("desktop--header");
const mobileHeader = document.getElementById("mobile--header");

openBtn.addEventListener("click", () => {
    mobileHeader.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    mobileHeader.style.display = "none";
});
