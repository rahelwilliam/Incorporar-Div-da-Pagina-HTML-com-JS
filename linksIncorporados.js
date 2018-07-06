// "author": "Rahel William"
//  "license": "ISC"

$(document).ready(function() {
    // Função para chamar na tag (ex: <linkFacebook>), o elemento que estiver no .load da Página + Div (ex: pagina linkIncorporados.html e a id será #linkFacebook)
    $(function() {
        $("linkFacebook").load("linksIncorporados.html #linkFacebook");
    });

    $(function() {
        $("linkTwitter").load("linksIncorporados.html #linkTwitter");
    });

    $(function() {
        $("linkYouTube").load("linksIncorporados.html #linkYouTube");
    });

    $(function() {
        $("linkLinkedin").load("linksIncorporados.html #linkLinkedin");
    });

    $(function() {
        $("linkInstagram").load("linksIncorporados.html #linkInstagram");
    });
});
