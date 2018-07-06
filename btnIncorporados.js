$(document).ready(function() {
    // Função para chamar na tag (ex: <btnFacebook>), o elemento que estiver no .load da Página + Div (ex: pagina btnIncorporados.html e a id será #btnFacebook)
    $(function() {
        $("btnFacebook").load("btnIncorporados.html #btnFacebook");
    });

    $(function() {
        $("btnTwitter").load("btnIncorporados.html #btnTwitter");
    });

    $(function() {
        $("btnYouTube").load("btnIncorporados.html #btnYouTube");
    });

    $(function() {
        $("btnLinkedin").load("btnIncorporados.html #btnLinkedin");
    });

    $(function() {
        $("btnInstagram").load("btnIncorporados.html #btnInstagram");
    });
});