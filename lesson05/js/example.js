const link = document.querySelector('a');
link.textContent = 'Church of Jesus Christ of latter days saints';
link.href = 'https://www.churchofjesuschrist.org';
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);
para.setAttribute('class' ,'highlight');
