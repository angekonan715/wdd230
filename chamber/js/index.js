const headerDate = document.querySelector(".date");
const now = new Date();
const headerfulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
/*headerDate.innerHTML = `<em>${headerfulldate}</em>`;*/

/*function toggleMenu() {
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
    document.getElementById("dateTime").value = d.toDateString() + hours + ":" + mins + ":" + seconds ;*/

//json 

const requestURL = 'https://angekonan715.github.io/wdd230/chamber/data/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const companies = jsonObject['companies'];
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    companies.forEach(displaycompanies);
  });

  function displaycompanies(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let p = document.createElement('p');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.innerHTML = `<span class = 'prophetName'>${company.name}</span> ${company.creation} `;
    p.innerHTML = `${company.address} <span class =birthdayCss>${company.phone}</span>`
    
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', `Portait of ${company.name } ${company.creation}`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }
  


