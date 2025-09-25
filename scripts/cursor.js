// suffer, forevermore
// script by elite784, using some other shits maybe.... 

function cursor() {
    var cur = document.createElement("canvas");
    var pointer = document.createElement("canvas");
    var span = document.createElement("canvas");

    cur.width = 30
    cur.height = 50
    pointer.width = 30
    pointer.height = 50
    var point = cur.getContext("2d");
    var link = pointer.getContext("2d");
    var span = span.getContext("2d")

    
    
    point.fillStyle = "black";
    point.font = "35px teletext";
    link.font = "28px teletext";
    point.fillText("🮰", -3, 24);
    point.fillText("🮰", -3, 23);
    point.font = "28px teletext";
    point.fillStyle = "white";
    point.fillText("🮰", -3, 20);

    link.fillStyle = "black";
    link.fillText("↖", -3, 24);
    link.fillText("↖", -3, 23);
    link.fillStyle = "white";
    link.fillText("↖", -3, 20);
    document.body.style.cursor = "url('" + cur.toDataURL() + "'), default";
    var alink = document.getElementsByClassName("a");
    var thebutton = document.getElementsByClassName("button");
    for (var i = 0; i < thebutton.length; i++ ) {
        thebutton[i].style.cursor = "url('" + pointer.toDataURL() + "'), pointer";
    }
    (async function () {
        for (var i = 0; i < alink.length; i++ ) {
        alink[i].style.cursor = "url('" + pointer.toDataURL() + "'), pointer";
        }
    })();
}

