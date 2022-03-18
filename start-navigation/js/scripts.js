function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hambuggerButton").classList.toggle("open");
    
}
const x = document.getElementById("hambuggerButton");
x.onclick = toggleMenu;