const select = document.querySelector("#date");
select.innerHTML = `<strong>Last Updated</strong>: ${document.lastModified}`;
const date = document.querySelector("#year");
let d = new Date();
date.innerHTML = `&copy;${d.getFullYear()} Kouadio Ange Konan :|: Abidjan`;
const lig = document.querySelector("hr");
lig.style ='margin-top: -20px';

