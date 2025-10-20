/* so what this does is that basically
1. reads the hash in the url every time it updates (e.g a link is clicked on the sidenav)
2. based on that, it fetches a corresponding html file
3. puts the html file into the .viewer element on index.html

this makes development of the site easier since i dont have to be inserting the same ol nav, headers, and footers in all pages
i also made it more convinient to end users to link to pages, so like, its all very seamless, yes yes

this one is for the wire, but everything is essentially the same
*/

function loadPage(url, title) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('viewer').innerHTML = html;
            document.getElementById('title').innerText = title || "784 STUDIOS";
        })
        .catch(err => {
            document.getElementById('viewer').innerHTML = "<p>Page load failure. If problem persists, contact the webmaster.</p>";
        });
}

// this function is used exclusively in this site
function airtxt() {
  fetch('https://airtxt.784studios.net/stillalive.txt')
  .catch(() => {
    return;
  })
    .then(response => response.text())
    .then(text => {
      if (text.includes("thisWasATriumph")) {
        document.getElementById('teltxt').innerHTML = "<iframe class='filler' src='https://airtxt.784studios.net/?service=airtxt&page=390&fullscreen' width='433' height='333'></iframe><iframe src='https://airtxt.784studios.net/?service=airtxt&page=300&fullscreen' width='433' height='333'></iframe><iframe src='https://airtxt.784studios.net/?service=airtxt&page=305&fullscreen' width='433' height='333'></iframe><iframe class='filler' src='https://airtxt.784studios.net/?service=airtxt&page=301&fullscreen' width='433' height='333'></iframe><iframe class='exfiller' src='https://airtxt.784studios.net/?service=airtxt&page=303&fullscreen' width='433' height='333'></iframe><iframe class='exfiller' src='https://airtxt.784studios.net/?service=airtxt&page=304&fullscreen' width='433' height='333'></iframe>";
        document.getElementById('telink').style="position: absolute;top: 160px; left: 0; width: 100%; height: 666px;z-index: 10;text-decoration: none;color: inherit;";
      } else {
        null;

      }
    })

  return;
}
function articletxt() {
  const hash = window.location.hash;
  fetch('https://airtxt.784studios.net/stillalive.txt')
    .catch(() => {
      return;
    })
      .then(response => response.text())
      .then(text => {
      if (text.includes("thisWasATriumph")) {
        if(hash === "#miku-corolla-2011"){
          document.getElementById('article').innerHTML = "<iframe src='https://airtxt.784studios.net/?service=airtxt&page=350' style='border:none;width:100%;height:80vh;'></iframe>";
        }
      } else {
       null;
     }
  })
  return;
}

// this other function is used universally

function handleHash() {
    const hash = window.location.hash;
    // primary pages
    if (hash === "#home" || hash === "#" || hash === "") {
      loadPage('news/pages/main.html', 'THE WIRE');
      setTimeout(airtxt, 500);
      return;
    }

    // local
    if (hash === "#local") {
      loadPage('news/l/index.html', 'LOCAL NEWS - THE WIRE')
    }
    if (hash === "#kid-named-finger") {
      loadPage('news/l/kid-named-finger.html', 'KID NAMED FINGER - THE WIRE');
    }


    // regional
    

    // national
    if (hash === "#machines-give-less-to-no-shits") {
      loadPage('news/n/machines-give-less-to-no-shits.html', 'MACHINES 40% MORE EFFICIENT IN NOT GIVING A SHIT - THE WIRE')
    }


    // world


    // investigative
    if (hash === "#miku-corolla-2011") {
      loadPage('news/investigation/miku-corolla-2011.html', 'INVESTIGATION: MIKU DROVE A 2011 TOYOTA COROLLA? - THE WIRE');
      setTimeout(articletxt(), 200);
    }

}

/*  hash thing temp
    if (hash === "#news") {
      loadPage('news/news.html', 'HEADLINE - THE WIRE')
    }
*/

window.addEventListener('DOMContentLoaded', handleHash);
window.addEventListener('hashchange', handleHash);
