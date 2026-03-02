/* worlds most complex way of using <a> tags

so what this does is that basically
1. reads the hash in the url every time it updates (e.g a link is clicked on the sidenav)
2. based on that, it fetches a corresponding html file
3. puts the html file into the .viewer element on index.html

this makes development of the site easier since i dont have to be inserting the same ol nav, headers, and footers in all pages
i also made it more convinient to end users to link to pages, so like, its all very seamless, yes yes

this script i fucked over to work in whimsical ways for the wire and adapted for corodat records
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
            document.getElementById('title').innerText = title || "CORODAT RECORDS";
            window.scrollTo(0,0);
            if (typeof callback === "function") callback();
        })
        .catch(err => {
            document.getElementById('viewer').innerHTML = "<p>Page load failure. If problem persists, contact the webmaster.</p>";
        });
}

// to do: repurpose. dont really know if i want to use this, but that would mean putting in new pages in airtxt. hahahahaha i like complicating myself x3 commenting it out for now

/* function airtxt() {
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
          document.getElementById('teltxt').innerHTML = "<iframe class='filler' src='https://airtxt.784studios.net/?service=airtxt&page=705&fullscreen' width='433' height='333'></iframe><iframe src='https://airtxt.784studios.net/?service=airtxt&page=300&fullscreen' width='433' height='333'></iframe><iframe src='https://airtxt.784studios.net/?service=airtxt&page=305&fullscreen' width='433' height='333'></iframe><iframe class='filler' src='https://airtxt.784studios.net/?service=airtxt&page=301&fullscreen' width='433' height='333'></iframe><iframe class='exfiller' src='https://airtxt.784studios.net/?service=airtxt&page=303&fullscreen' width='433' height='333'></iframe><iframe class='exfiller' src='https://airtxt.784studios.net/?service=airtxt&page=304&fullscreen' width='433' height='333'></iframe>";
          document.getElementById('telink').style="position: absolute; left: 0; width: 100%; height: 682px;z-index: 10;text-decoration: none;color: inherit;";
          document.getElementById('telink-style').innerHTML = "#telink {top:160px} @media (max-width:1023px) {#telink {top:193px;}@media(max-width:753px){#telink{top:225px;}}@media(max-width:699px){#telink{top:264px;}@media(max-width:443px){#telink{top:297px;}}}"
        }
      }
    });
  return;
}
*/

// this other function is used universally
// ^ what other function?
function handleHash() {
    const hash = window.location.hash;
    // primary pages
    if (hash === "#home" || hash === "#" || hash === "") {
      loadPage('corodat/index.html', 'CORODAT RECORDS'); // this usually has the airtxt function at the end, but i ain using it rn
      return;
    }
    if (hash === "#records") {
      loadPage('corodat/records.html', 'PHONOGRAPHS @ CORODAT RECORDS')
    }
    if (hash === "#news") {
      loadPage('corodat/news.html', 'NEWS @ CORODAT RECORDS')
    }
    if (hash === "#about") {
      loadPage('corodat/about.html', 'ABOUT CORODAT RECORDS')
    }
    if (hash === "#artists") {
      loadPage('corodat/artists.html', 'ARTISTS @ CORODAT RECORDS')
    }
    
}

/*  hash thing temp
    if (hash === "#news") {
      loadPage('news/news.html', 'HEADLINE - THE WIRE')
    }
*/

window.addEventListener('DOMContentLoaded', handleHash);
window.addEventListener('hashchange', handleHash);
