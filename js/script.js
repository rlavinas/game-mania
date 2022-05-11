$(document).ready(function() {

})

function AbreMenu() {
    if ($("#div_menubar").hasClass("div_menubar_exibe")) {
        $("#div_menubar").removeClass("div_menubar_exibe");
        $("#navbar").removeClass("div_menubar_exibe");        
    } else {
        $("#div_menubar").addClass("div_menubar_exibe");
        $("#navbar").addClass("div_menubar_exibe");
    }
}

window.addEventListener('resize', function(event) {
    if ($("#div_menubar").hasClass("div_menubar_exibe")) {
        $("#div_menubar").removeClass("div_menubar_exibe");
        $("#navbar").removeClass("div_menubar_exibe");  
    }
}, true);

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