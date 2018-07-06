# Incorporando Página e Links com JS
Este projeto tem o intuito de auxiliar o desenvolvedor na importação de páginas (do próprio site) para outras páginas, semelhante ao que é feito com IFRAME, porém, este método é feito com Java Script e permite incorporar um elemento / div / id específico da página.

## O que é preciso para implementar?
Para implementar o código é necessário apenas os seguintes passos:

* Criar uma página em html (que receberá a incorporação)
* Chamar a biblioteca JQuery nesta página: `<script type="text/javascript" src="http://code.jquery.com/jquery-1.5.js"></script>`
* Criar uma segunda página em html (será a página incorporada)
* Criar o arquivo JS com o código de implementação (ou adicionar o mesmo direto no html que receberá a incorporação)

## Qual comando será usado do JS?
O comando usado para executar essa função será o `.load`.

>Este comando não deverá funcionar sem um servidor sendo executado. Para que funcione localmente, deverá criar um servidor localhost!

## Função de Exemplo
Caso você já seja experiente e queira simplesmente utilizar a função sem seguir o passo a passo, poderá utilizar o script:

```
$(document).ready(function() {
    $(function() {
        $("elementoDivIDdaPaginaQueReceberaIncorporacao").load("LocaldoArquivoQueSeraIncorporado/arquivo.html #elementoDivIDdaPaginaQueSeraIncorporada");
    });
});
```

## O que eu posso criar com esse projeto
Conforme citado acima, este é um projeto para fazer incorporação de página, dependendo da sua criatividade, é possível fazer diversos "elementos padrões" e utilizar em vários locais sem a necessidade de recriá-los. Este projeto é semelhante ao REACT, onde existem elementos padrões e até props (que serão usadas aqui também). Veja alguns exemplos que eu criei usando este projeto:

###### Botões
É possível padronizar botões, permitindo a criação genérica ou usando props específicas. (clique aqui para ver como funciona)

###### Tabelas de dados
Em alguns projetos, é necessário usar os mesmos dádos / elementos em diversas páginas, no meu caso não foi diferente, criei uma página exclusiva para os dados de uma tabela, e em seguida incorporei essa tabela em diversas páginas. (clique aqui para ver como funciona)

###### Links
Links são sempre usados em diversas páginas e muitas vezes sendo repetidos, onde precisamos estar sempre usando o `<a href` e seus props, tornando isso cansativo. Com esse projeto, é possível criar um página somente com os links que você deseja utilizar em suas páginas e depois apenas incorporá-los. (clique aqui para ver como funciona)

###### Span e outras demais elementos
Assim como os links usados com `<a href`, temos o `<span`, `<code`, `<pre` e qualquer outro elemento que pode ser criado como padrão e ser chamado em outras páginas, com ou sem props.

*** 