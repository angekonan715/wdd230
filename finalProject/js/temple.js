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


//json 

const requestURL = 'https://angekonan715.github.io/wdd230/finalProject/data/project.json';
const cards = document.querySelector('.cards');


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
        temples.forEach(displaytemples);
       
    });

function displaytemples(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `<span class = 'templeName'>${temple.name}</span> <br> Temple Closure: ${temple.Closures}`;
    p.innerHTML = `<span class='templeAddress'>${temple.address}</span> <br> <span class = 'templePhone'>${temple.phone}</span>`;
    p.innerHTML = `Announced:${temple.announced}<br> Groundbreaking: ${temple.Groundbreaking}<br> Dedication:${temple.Dedication}`
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', temple.image);
    portrait.setAttribute('alt', `image of ${temple.name }`);
    portrait.setAttribute('loading', 'lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p);


    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
}
