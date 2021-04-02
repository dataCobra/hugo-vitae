const toggleSwitch = document.querySelector('i.dark-mode.icons.fas');
var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        document.querySelector('i.dark-mode.icons.fas').classList.remove('fa-moon');
        document.querySelector('i.dark-mode.icons.fas').classList.add('fa-sun');
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
        document.querySelector('i.dark-mode.icons.fas').classList.remove('fa-moon');
        document.querySelector('i.dark-mode.icons.fas').classList.add('fa-sun');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        currentTheme = localStorage.getItem('theme');
        document.querySelector('i.dark-mode.icons.fas').classList.remove('fa-sun');
        document.querySelector('i.dark-mode.icons.fas').classList.add('fa-moon');
    }
}

toggleSwitch.addEventListener('click', switchTheme, false);
