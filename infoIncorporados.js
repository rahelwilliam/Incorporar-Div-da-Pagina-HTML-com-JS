$(document).ready(function() {
    // Função para chamar outros elementos (ex: <infoFacebook>), o elemento que estiver no .load da Página + Div (ex: pagina infoIncorporados.html e a id será #infoFacebook)
    $(function() {
        $("infoFacebook").load("infoIncorporados.html #infoFacebook");
    });

    $(function() {
        $("infoTwitter").load("infoIncorporados.html #infoTwitter");
    });

    $(function() {
        $("infoYouTube").load("infoIncorporados.html #infoYouTube");
    });

    $(function() {
        $("infoLinkedin").load("infoIncorporados.html #infoLinkedin");
    });

    $(function() {
        $("infoInstagram").load("infoIncorporados.html #infoInstagram");
    });
});