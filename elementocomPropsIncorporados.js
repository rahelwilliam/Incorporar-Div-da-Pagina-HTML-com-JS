// "author": "Rahel William"
//  "license": "ISC"

$(document).ready(function() {
    // Função para chamar outros elementos e possibilitando adicionar props neles, nesse caso, o elemento será criado direto, sem a necessidade de usar uma página html para o mesmo
    $("btn").each(function() {

        // criando as variáveis, que levarão nome próprio (ex: classe) em seguida indicando que ela receberá o valor de dados indicados mas propriedades respectivas (ex: class)
        var classe = $(this).data('class');
        var color = $(this).data('color');
        var bgColor = $(this).data('bgcolor');
        var title = $(this).data('title');

        // Aqui será criado o elemento (em nosso exemplo um span), bastando adicionar as informações das variáveis
        $(this).append('<span class="' + classe + '" style="color:' + color + '; background-color:' + bgColor + ';">' + title + '</span> <br><br>');

    // exemplo usado em html '<btn data-class="classeCSS" data-color="CORdaFonte" data-bgColor="CORdoFundo" data-title="DescriçãodoElemento" />'
    // Nenhuma das propriedades é obrigatoria, ou seja, é possível usar o botão adicionando apenas algumas das props

    });
});
