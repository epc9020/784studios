// script taken from https://medium.com/@nohanabil/building-a-multilingual-static-website-a-step-by-step-guide-7af238cc8505
// stylesheet change modified to actually function correctly

// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
        setTimeout(useless, 6000)
        
    });
}

// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`/language/${lang}.json`);
    return response.json();
}

// Function to change language
async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    toggleStylesheet(lang); // switch stylesheets
}

// Function to toggle stylesheet based on language selection

function toggleStylesheet(lang) {
    // the original script removes the stylesheet link tag if it were id'd #styles-link, resulting in an unstyled page. it wouldnt be until you ran the function agait that it would apply the stylesheet. this wouldnt be very convinient for visitors who dont know a damn thing about the console, so i instead modified this function to change the css src value if the user prefered language equaled to any one listed below. i think it's much more simpler than the original. if your site's design is dark, it might white sometimes, so you'll have to add background color style attributes to all your pages body tags.
    const link = document.querySelector('#styles-link');

    if (lang === 'es-PR') {
        link.id = 'styles-link';
        link.href = '/style/style-esPR.css'; 
    }
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    await fetch('/pagefile/header.html');
    await fetch('/textfile/updates.html');
    const userPreferredLanguage = localStorage.getItem('language');
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
    toggleStylesheet(userPreferredLanguage);
    
});

function useless() {
    
    fetch('/assets/useless-file-that-does-nothing.txt');
}