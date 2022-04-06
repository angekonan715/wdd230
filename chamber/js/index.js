const headerDate = document.querySelector(".date");
const now = new Date();
const headerfulldate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full"
}).format(now);
headerDate.innerHTML = `<em>${headerfulldate}</em>`;

function toggleMenu() {
    document.getElementById("hamburgerButton").classList.toggle("open");
    document.getElementById("navUl").classList.toggle("open");
}


const x = document.getElementById("hamburgerButton");
x.onclick = toggleMenu;


const date = document.querySelector("#footerYear");
date.innerHTML = `${now.getFullYear()}`;

const select = document.querySelector("#lastDateModif");
select.innerHTML = `: ${document.lastModified}`;



// Set the value of the "date and Time " field
let dateTime = document.querySelector("#hiddenDate");
var hours = now.getHours();
var mins = now.getMinutes();
var seconds = now.getSeconds();
dateTime.value = `${now.toDateString()} ${hours} : ${mins} : ${seconds}`;
