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



    // Set the value of the "date and Time " field
    var hours = d.getHours();
    var mins = d.getMinutes();
    var seconds = d.getSeconds();
    document.getElementById("dateTime").value = d.toDateString() + hours + ":" + mins + ":" + seconds ;




