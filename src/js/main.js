console.log("WsTester Entrando App...")
i = 0;
parametros = {};
contenido = "";
contenidoParams = "";
respuesta = "";
ws = "";
estado = "";
$ ( document ).ready ( function () {

    $ ( "#submit" ).click ( function () {
        name = $ ( "#name" ).val ();
        value = $ ( "#value" ).val ();
        if ( name == "" || value == "" ) {
            $ ( "#submit" ).notify ( "Falta parametro name o value!", {
                position: "right-middle",
                style: "bootstrap",
                className: 'warning'
            });

        } else if ( value == "" ) {
            value.notify ( "Falta Value" );

        } else {
            parametros[name] = value;
            showJson ();
            $ ( "#urlFinal" ).html ( (creaLaUrl ()) );
            $ ( "#submit" ).notify ( "Añadido!", {position: "right-middle", style: "bootstrap", className: 'success'} );
        }

    } );


    $ ( "#test" ).click ( function () {
        if ( estado != true ) {
            result = "No se dispone de datos para realizar la petición";
        } else {
            var params = {
                "ws" : ws,
                "params" : parametros,
                "method" : $( "#method" ).val(),
            };
            $.ajax({
                data:  params,
                url:   '/ajax.php',
                type:  'post',
                success:  function (response) {
                    $('#result').html(response);
                    //$('#result').html('<pre>' + JSON.stringify ( $.parseJSON(response), null, 4  + '</pre>'));
                }
            });
        }

    } );


    function creaLaUrl () {
        url = "?";
        urlAux = "";
        ws =  $("#wsUrl").val();

        text = "";

        for ( x in parametros ) {
            urlAux = x + "=" + parametros[x] + "&";
            url = url + urlAux;
        }
        return ws + url.substr ( 0, url.length - 1 );

    }

    function showJson () {

        json = JSON.stringify ( parametros, null, 4 );
        console.log ( json );
        $ ( "#params" ).html ( "<pre>" + json + "</pre>");
        estado = true;
    }

} );
