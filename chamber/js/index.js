const headerDate = document.querySelector(".date");
const now = new Date();
const headerfulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
headerDate.innerHTML = `<em>${headerfulldate}</em>`;

function toggleMenu() {
    document.getElementById("hamburgerButton").classList.toggle("open");
    document.getElementById("navUl").classList.toggle("open");
    

}
const x = document.getElementById("hamburgerButton");
x.onclick = toggleMenu;


const date = document.querySelector("#footerYear");
let d = new Date();
date.innerHTML = `${d.getFullYear()}`;

const select = document.querySelector("#lastDateModif");
select.innerHTML = `: ${document.lastModified}`;



