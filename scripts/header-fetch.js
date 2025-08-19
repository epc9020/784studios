//TODO: rehaul entire script to choose what file to get from what folder to fetch depending on the set language data



async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
    toggleStylesheet(lang); // switch stylesheets
}

(async function () {
    const headerHTMLRequest = await fetch(`/fetch/header.html`);
    const headerHTML = await headerHTMLRequest.text();
    document.querySelector('.header-container').innerHTML = headerHTML;
  })();




/*
(async function () {
  const headerHTMLRequest = await fetch('/textfile/updates.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('.updatestext').innerHTML = headerHTML;
})();

*/