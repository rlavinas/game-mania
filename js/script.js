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
    if (document.getElementById("div_menubar") != null) {
        document.getElementById("div_menubar").style.display = 'none';
        document.getElementById("navbar").style.display = 'none';
        if (x.matches) { // If media query matches
            document.getElementById("div_menubar").style.display = 'flex';
            document.getElementById("navbar").style.display = 'flex';
        }
    }
}
  
var x = window.matchMedia("(min-width: 768px)");
myFunction(x);
x.addListener(myFunction);

if (document.getElementById("edtEmail") != null) {

    function limpMsg() {
        $("#msgErro").html("");
    }

    var email = document.getElementById("edtEmail");

    email.addEventListener("click", limpMsg);
    email.addEventListener("mouseover", limpMsg);
}

if (document.getElementById("edtSenha") != null) {

    function limpMsg() {
        $("#msgErro").html("");
    }

    var email = document.getElementById("edtSenha");

    email.addEventListener("click", limpMsg);
    email.addEventListener("mouseover", limpMsg);
}

function envLogin(){
    if (valLogin()) {
        $("#formLogin").submit();
    };
};

function valLogin() {
var lret = true;

    if ($("#edtEmail").val() == "") {
        $("#msgErro").html("Necessário informar o e-mail.");
        lret = false;
    }

    if (lret)  {
        if ($("#edtSenha").val() == "") {
            $("#msgErro").html("Necessário informar a senha.");
            lret = false;
        }   
    }

    return (lret);
};