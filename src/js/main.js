console.log ( "WsTester Entrando App..." )
i = 0;
parametros = {};
contenido = "";
contenidoParams = "";
respuesta = "";
ws = "";
estado = "";
$ ( document ).ready ( function () {
    $ ( "#panelResult" ).hide ();
    $ ( "#submit" ).click ( function () {
        name = $ ( "#name" ).val ();
        value = $ ( "#value" ).val ();
        if ( name == "" || value == "" ) {
            $ ( "#submit" ).notify ( "Falta parametro name o value!", {
                position: "right-middle",
                style: "bootstrap",
                className: 'warning'
            } );

        } else if ( value == "" ) {
            value.notify ( "Falta Value" );

        } else {
            parametros[name] = value;
            showJson ();
            $ ( "#urlFinal" ).html ( (creaLaUrl ()) );
            $ ( "#submit" ).notify ( "Añadido!", {position: "right-middle", style: "bootstrap", className: 'success'} );
        }

    } );

    //para que consulte el get o lo muestre dependiendo de la opcion
    $ ( '#method' ).on ( 'change', function () {

        if ( this.value == "get" ) {
            $ ( '#urlGet' ).show ();
        } else {
            $ ( '#urlGet' ).hide ();
        }
    } )


    $ ( "#test" ).click ( function () {
        $ ( "#panelResult" ).show ();
        if ( estado != true ) {
            result = "No se dispone de datos para realizar la petición";
        } else {
            var params = {
                "ws": ws,
                "params": parametros,
                "method": $ ( "#method" ).val (),
            };
            $.ajax ( {
                data: params,
                url: '/ajax.php',
                type: 'post',
                success: function ( response ) {
                    $ ( '#result' ).html ( response );
                    guardaBBDD ();
                }
            } );
        }

    } );

    function creaLaUrl () {
        url = "?";
        urlAux = "";
        ws = $ ( "#wsUrl" ).val ();

        text = "";

        for ( x in parametros ) {
            urlAux = x + "=" + parametros[x] + "&";
            url = url + urlAux;
        }
        return ws + url.substr ( 0, url.length - 1 );

    }

    function showJson () {

        json = JSON.stringify ( parametros, null, 4 );

        $ ( "#params" ).html ( "<pre>" + json + "</pre>" );
        estado = true;
    }

    function guardaBBDD () {
        console.log ( "aquiero guardar en bbdd" );

        var insertParams = {
            "url": ws,
            "json": parametros
        };
        console.log ( insertParams );
        $.ajax ( {
            data: insertParams,
            url: './ajaxBD.php',
            type: 'post',
            success: function ( response ) {
                console.log ( response );
                $ ( '#insert' ).html ( response );
            }
        } );
    }


} );

