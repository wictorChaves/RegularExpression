$(function () {
    function verificar() {

        //Converte String para expressão regular
        var expressao = new RegExp($(".expressao").val().toString());

        //Pega o valor do campo
        var valor = $(".teste").val();

        //Verifica se a expressão e verdadeira
        if (valor.match(expressao)) {
            $(".verdadeiro").css('display', 'block');
            $(".falso").css('display', 'none');
        } else {
            $(".verdadeiro").css('display', 'none');
            $(".falso").css('display', 'block');
        }
    }

    $(".btnVE").click(function () {
        verificar();
    });
    $(".teste").keyup(function () {
        verificar();
    });
    $(".expressao").keyup(function () {
        verificar();
    });
});