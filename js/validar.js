function validar(id){
    var elemento = document.getElementById(id);
    if (elemento.checkValidity()){
        elemento.style.borderColor="blue";
    }else{
        elemento.style.borderColor="red";
    }
}

function enviarValidar(){

    var nombrevalido = document.getElementById('nombre').checkValidity();
    var correovalido = document.getElementById('correo').checkValidity();
    var mensajevalido = document.getElementById('mensaje').checkValidity();

    if (nombrevalido && correovalido && mensajevalido) {
        alert("Formulario procesado exitosamente.");
    }else{
        alert("No se ha podido procesar el formulario.");
    }
}