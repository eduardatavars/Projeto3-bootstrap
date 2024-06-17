$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(99) 99999-9999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o aeu e-mail',
            mensagem: 'Por favor, escreva a sua menssagem'
        },
        invalidHandler: function(form, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos vazios.`)
            }
        }
    })
})