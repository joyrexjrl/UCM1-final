const toggleButton = document.getElementById(`darkModeButton`);
const htmlElement = document.documentElement;

function toggleMode(){
    if(htmlElement.classList.contains(`dark-mode`)) htmlElement.classList.remove(`dark-mode`);
    else htmlElement.classList.add(`dark-mode`);    
}

toggleButton.addEventListener('click', toggleMode);