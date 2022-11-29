const toggleSwitch = document.querySelector('#dark-mode');
var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        document.querySelector('#dark-mode .icons.fas').classList.remove('fa-moon');
        document.querySelector('#dark-mode .icons.fas').classList.add('fa-sun');
    }
} else {
    currentTheme = localStorage.setItem('theme', 'light')
}

function switchTheme() {
    currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        currentTheme = localStorage.getItem('theme');
        document.querySelector('#dark-mode .icons.fas').classList.remove('fa-moon');
        document.querySelector('#dark-mode .icons.fas').classList.add('fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        currentTheme = localStorage.getItem('theme');
        document.querySelector('#dark-mode .icons.fas').classList.remove('fa-sun');
        document.querySelector('#dark-mode .icons.fas').classList.add('fa-moon');
    }
}

toggleSwitch.addEventListener('click', switchTheme, false);

window.onload = function() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches && !localStorage.getItem('prefers-color-scheme-dark')) {
        localStorage.setItem('theme', 'light');
        switchTheme();
        localStorage.setItem('prefers-color-scheme-dark', true);
    }
};
