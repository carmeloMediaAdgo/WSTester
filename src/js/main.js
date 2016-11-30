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




    $ ( "#test" ).click ( function () {
        if ( estado != true ) {
            result = "No se dispone de datos para realizar la petición";
        } else {

            $data = "ajax.php" + url.substr ( 0, url.length ) + "ws=" + ws;
            console.log ( $data );
            //se envia mediante ajax los parametros a  connection.php y recibimos la respuesta de la peticiónvar xmlhttp = new XMLHttpRequest();
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    $ ( '#result' ).html( this.responseText);
                }
                $ ( '#result' ).html( this.responseText);
            };
            xmlhttp.open("GET", $data, true);
            xmlhttp.send();
        }

    } );


    function creaLaUrl () {
        url = "?";
        urlAux = "";
        ws = "https://jsonplaceholder.typicode.com/posts"; //$("#wsUrl").val();

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
