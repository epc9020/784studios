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


function handleHash() {
    const hash = window.location.hash;
    // primary pages
    if (hash === "#index") {
      loadPage('home.html', '784 STUDIOS')
    }
    if (hash === "#network") {
        loadPage('pages/network.html', 'MEDIA NETWORK - 784 STUDIOS');
    }
    if (hash === "#service") {
      loadPage('pages/services.html', 'SERVICES - 784 STUDIOS')
    }
    if (hash === "#about") {
      loadPage('pages/about.html', 'ABOUT - 784 STUDIOS')
    }
    if (hash === "#blog") {
      loadPage('pages/blog.html', 'BLOG - 784 STUDIOS')
    }
    if (hash === "#social") {
      loadPage('pages/social.html', 'SOCIAL NETWORK ACCOUNTS - 784 STUDIOS')
    }
    if (hash === "#contact") {
      loadPage('pages/contact.html', 'CONTACT - 784 STUDIOS')
    }
    if (hash === "#aim") {
      loadPage('pages/aim.html', 'AIM SERVICE - 784 STUDIOS')
    }
    if (hash === "#websites") {
      loadPage('pages/websites.html', 'WEBSITES - 784 STUDIOS')
    }
    
    //services pages
    if (hash === "#dac-service") {
      loadPage('pages/services/dac.html', 'DIGITAL TO ANALOG SERVICE - 784 STUDIOS')
    }
    if (hash === "#caption-service") {
      loadPage('pages/services/captioning.html', 'CAPTIONING SERVICE - 784 STUDIOS')
    }
    if (hash === "#vhs2digital-service") {
      loadPage('pages/services/vhs-digitization.html', 'VHS TO DIGITAL SERVICE - 784 STUDIOS')
    }

    // temp redir main page
    if (hash === "#teltest") {
      loadPage('pages/teltest.html', 'HELP: TELTEST - 784 STUDIOS')
    }
}

/*  hash thing temp
    if (hash === "#service") {
      loadPage('pages/services.html', 'SERVICES - 784 STUDIOS')
    }
*/

window.addEventListener('DOMContentLoaded', handleHash);
window.addEventListener('hashchange', handleHash);
