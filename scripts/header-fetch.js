      (async function () {
        const headerHTMLRequest = await fetch('/header.html');
        const headerHTML = await headerHTMLRequest.text();
        document.querySelector('.header-container').innerHTML = headerHTML;
      })();
