
function desktopGet() {
  (async function () {
    const headerHTMLRequest = await fetch('/pagefile/header.html');
    const headerHTML = await headerHTMLRequest.text();
    document.querySelector('.header-container').innerHTML = headerHTML;
  })();
}

function mobileGet() {
  (async function () {
    const headerHTMLRequest = await fetch('/pagefile/mobileheader.html');
    const headerHTML = await headerHTMLRequest.text();
    document.querySelector('.updatestext').innerHTML = headerHTML;
  })();
}



/*
(async function () {
  const headerHTMLRequest = await fetch('/textfile/updates.html');
  const headerHTML = await headerHTMLRequest.text();
  document.querySelector('.updatestext').innerHTML = headerHTML;
})();

*/