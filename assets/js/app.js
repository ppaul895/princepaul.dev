// TOGGLE NAVIGATION MENU AND ICONS
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');
const headerElement = document.getElementById('header');
const logoElement = document.querySelector('.logo');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
    if (headerElement.style.paddingBottom == "4.5rem") {
        headerElement.style.paddingBottom = "0rem";
        logoElement.style.paddingTop = "0rem";
    } else {
        headerElement.style.paddingBottom = "4.5rem";
        logoElement.style.paddingTop = "4.5rem";
    }
}
menuToggleButton.addEventListener('click', toggleMenu);

// REMOVE ACTIVE CLASS FROM ICON ON LINK CLICK
const  removeActiveLinkClass = e => {
    if (e.target.classList.contains('list-link')) {
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
        headerElement.style.paddingBottom = "0rem";
        logoElement.style.paddingTop = "0rem";
    }
}
document.addEventListener('click', removeActiveLinkClass);

// TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if (currentTheme) {
    bodyElement.classList.add('dark-theme');
}
const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');
    if (bodyElement.classList.contains('dark-theme')) {
        localStorage.setItem('darkTheme', 'active');
    } else {
        localStorage.removeItem('darkTheme');
    }
}
themeToggleButton.addEventListener('click', toggleTheme);

// SCROLL REVEAL