      (await function () {
        const headerHTMLRequest = await fetch('/pagefile/header.html');
        const headerHTML = await headerHTMLRequest.text();
        document.querySelector('.header-container').innerHTML = headerHTML;
      })();
