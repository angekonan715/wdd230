const headerDate = document.querySelector("#date");
const now = new Date();
const headerfulldate = new Intl.DateTimeFormat("en-US", { dateStyle: 'short' }).format(now);
headerDate.innerHTML = `<em>${headerfulldate}</em>`;