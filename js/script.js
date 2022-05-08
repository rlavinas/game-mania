function AbreMenu() {
    if (document.getElementById("navbar").style.display == 'none') {
        document.getElementById("div_menubar").style.display = 'flex';
        document.getElementById("navbar").style.display = 'flex';
    } else {
        document.getElementById("div_menubar").style.display = 'none';
        document.getElementById("navbar").style.display = 'none';
    }
}

function myFunction(x) {
    document.getElementById("div_menubar").style.display = 'none';
    document.getElementById("navbar").style.display = 'none';
    if (x.matches) { // If media query matches
        document.getElementById("div_menubar").style.display = 'flex';
        document.getElementById("navbar").style.display = 'flex';
    }
}
  
var x = window.matchMedia("(min-width: 768px)");
myFunction(x);
x.addListener(myFunction);