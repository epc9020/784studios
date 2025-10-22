/* worlds most complex way of using <a> tags

so what this does is that basically
1. reads the hash in the url every time it updates (e.g a link is clicked on the sidenav)
2. based on that, it fetches a corresponding html file
3. puts the html file into the .viewer element on index.html

this makes development of the site easier since i dont have to be inserting the same ol nav, headers, and footers in all pages
i also made it more convinient to end users to link to pages, so like, its all very seamless, yes yes

this script i fucked over to work in whimsical ways for the wire
original script is located in /en/scripts/fetch.js

searchlist:
airtxt redirections
primary pages

*/

function loadPage(url, title, callback) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('viewer').innerHTML = html;
            document.getElementById('title').innerText = title || "THE WIRE - ONLY TRUSTWORTHY NEWS SOURCE TODAY";
            window.scrollTo(0,0);
            if (typeof callback === "function") callback();
        })
        .catch(err => {
            document.getElementById('viewer').innerHTML = "<p>Page load failure. If problem persists, contact the webmaster.</p>";
        });
}

// this function is used exclusively in this site
function airtxt() {
  const hash = window.location.hash;
  fetch('https://airtxt.784studios.net/stillalive.txt')
  .catch(() => {
    return;
  })
    .then(response => response.text())
    .then(text => {
      if (text && text.includes("thisWasATriumph")) {
        if (hash === "#local") {
          document.getElementById('teltxt').innerHTML = "<iframe class='newsect' src='https://airtxt.784studios.net/?service=airtxt&page=315' width='433' height='600'></iframe>";
        } else if (hash === "#regional") {
          document.getElementById('teltxt').innerHTML = "<iframe class='newsect' src='https://airtxt.784studios.net/?service=airtxt&page=302' width='433' height='600'></iframe>";
        } else if (hash === "#national") {
          document.getElementById('teltxt').innerHTML = "<iframe class='newsect' src='https://airtxt.784studios.net/?service=airtxt&page=303' width='433' height='600'></iframe>";
        } else if (hash === "#world") {
          document.getElementById('teltxt').innerHTML = "<iframe class='newsect' src='https://airtxt.784studios.net/?service=airtxt&page=304' width='433' height='600'></iframe>";
        } else {
          document.getElementById('teltxt').innerHTML = "<iframe class='filler' src='https://airtxt.784studios.net/?service=airtxt&page=390&fullscreen' width='433' height='333'></iframe><iframe src='https://airtxt.784studios.net/?service=airtxt&page=300&fullscreen' width='433' height='333'></iframe><iframe src='https://airtxt.784studios.net/?service=airtxt&page=305&fullscreen' width='433' height='333'></iframe><iframe class='filler' src='https://airtxt.784studios.net/?service=airtxt&page=301&fullscreen' width='433' height='333'></iframe><iframe class='exfiller' src='https://airtxt.784studios.net/?service=airtxt&page=303&fullscreen' width='433' height='333'></iframe><iframe class='exfiller' src='https://airtxt.784studios.net/?service=airtxt&page=304&fullscreen' width='433' height='333'></iframe>";
          document.getElementById('telink').style="position: absolute; left: 0; width: 100%; height: 682px;z-index: 10;text-decoration: none;color: inherit;";
          document.getElementById('telink-style').innerHTML = "#telink {top:160px} @media (max-width:1023px) {#telink {top:193px;}@media(max-width:753px){#telink{top:225px;}}@media(max-width:699px){#telink{top:264px;}@media(max-width:443px){#telink{top:297px;}}}"
        }
      }
    });
  return;
}

function articletxt() {
  const hash = window.location.hash;
  const queryString = window.location.search;
  const airtxt = "https://airtxt.784studios.net/?service=airtxt&page=";
  fetch('https://airtxt.784studios.net/stillalive.txt')
    .then(response => {
      if (!response || !response.ok) return null;
      return response.text();
    })
    .then(text => {
      const airtitle = document.getElementById("airtitle");
      const airparg = document.getElementById("airparg");
      if (!text) {
        if (airtitle) airtitle.innerHTML = "AIRTXT IS OFF-AIR ((x))";
        if (airparg) airparg.innerHTML = "This article is an AIRTXT exclusive. Please try reading this article again later during @500 - @132.";
        return;
      }
      if (text.includes("thisWasATriumph")) {
        if (queryString === "?directed=false" || queryString === "") {
          const newUrl = window.location.pathname + "?directed=true" + window.location.hash;
          window.history.replaceState({}, '', newUrl);

          // airtxt redirections

          if (hash === "#miku-corolla-2011") {
          open(airtxt + "333", "_self");
        }

        } else if (queryString === "?directed=true") {
          open("wire.html", "_self");
        }
      } else {
        if (airtitle) airtitle.innerHTML = "AIRTXT IS OFF-AIR ((x))";
        if (airparg) airparg.innerHTML = "This article is an AIRTXT exclusive. Please try reading this article again later during @500 - @132. <a href='wire.html'>Go back to frontpage</a>";
      }
    })
    .catch(() => {
      const airtitle = document.getElementById("airtitle");
      const airparg = document.getElementById("airparg");
      if (airtitle) airtitle.innerHTML = "AIRTXT IS OFF-AIR ((x))";
      if (airparg) airparg.innerHTML = "This article is an AIRTXT exclusive. Please try reading this article again later during @500 - @132. <a href='wire.html'>Go back to frontpage</a>";
    });
}

// this other function is used universally

function handleHash() {
    const hash = window.location.hash;
    // primary pages
    if (hash === "#home" || hash === "#" || hash === "") {
      loadPage('news/pages/main.html', 'THE WIRE - ONLY TRUSTWORTHY NEWS SOURCE TODAY', airtxt);
      return;
    }

    // local
    if (hash === "#local") {
      loadPage('news/l/index.html', 'LOCAL NEWS - THE WIRE', airtxt);
      return;
    }
    if (hash === "#kid-named-finger") {
      loadPage('news/l/kid-named-finger.html', 'KID NAMED FINGER - THE WIRE');
      return;
    }

    // regional
    if (hash === "#regional") {
      loadPage('news/r/index.html', 'REGIONAL NEWS - THE WIRE', airtxt);
      return;
    }

    // national
    if (hash === "#national") {
      loadPage('news/n/index.html', 'NATIONAL NEWS - THE WIRE', airtxt)
    }
    
    if (hash === "#machines-give-less-to-no-shits") {
      loadPage('news/n/machines-give-less-to-no-shits.html', 'MACHINES 40% MORE EFFICIENT IN NOT GIVING A SHIT - THE WIRE');
      return;
    }

    if (hash === "#measles-is-back-again") {
      loadPage('news/n/measles-is-back-again.html', 'MEASLES: "GUESS WHO&#39;S BACK AGAIN?"');
      return;
    }

    if (hash === "#clorox-new-consumable-bleach") {
      loadPage('news/n/clorox-new-consumable-bleach.html', 'CLOROX COMPANY INTRODUCES NEW LINE OF CONSUMABLE PRODUCTS - THE WIRE');
      return;
    }
    // world
    if (hash === "#world") {
      loadPage('news/w/index.html', 'WORLD NEWS - THE WIRE', airtxt)
    }

    // investigative
    if (hash === "#miku-corolla-2011") {
      loadPage('news/pages/airtxt-redirect.html', 'REDIRECTING TO AIRTXT... - THE WIRE', articletxt);
      return;
    }



    if (hash === "#404") {
      loadPage('/404.html', '404 - THE WIRE')
    }
}

/*  hash thing temp
    if (hash === "#news") {
      loadPage('news/news.html', 'HEADLINE - THE WIRE')
    }
*/

window.addEventListener('DOMContentLoaded', handleHash);
window.addEventListener('hashchange', handleHash);
