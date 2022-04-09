const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=3ec7b2ce8e79c58476a89423f1b07239&units=metric`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.querySelector('#current-temp').textContent = jsObject.main.temp;
        document.querySelector('.weatherHead').textContent = jsObject.name;

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;


        const  div = document.querySelector('.weatherDiv');
        const p = document.createElement('p');
        p.setAttribute('class', 'lastPara');
        p.innerHTML = `Wind Speed: ${jsObject.wind.speed}km/h <br> Wind Chill: N/A`;
        div.appendChild(p);


    });