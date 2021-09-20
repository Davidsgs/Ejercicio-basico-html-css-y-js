var boton = document.getElementById("boton");

boton.addEventListener("click", () => {
    if(validarUsuario() && validarPassword()){
        window.location.href = "./principal.html";
    }
});

function validarUsuario() {
    var salida = true;
    var inputUsuario = document.getElementById("usuario");
    var reg = new RegExp("^[0-9]+$");
    if(inputUsuario.value.length < 8){
        alert("El usuario debe tener 8 o mas caracteres.");
        salida = false;
    }else if(!reg.test(inputUsuario.value)){
        console.log("Hola");
        alert("El usuario debe ser solo numeros.");
        salida = false;
    }
    return salida;
}

function validarPassword() {
    var salida = true;
    var inputContrasena = document.getElementById("contra");
    var reg = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])");
    if(inputContrasena.value.length < 6){
        alert("La contraseña debe tener 6 o mas caracteres.");
        salida = false;
    }else if(!reg.test(inputContrasena.value)){
        console.log("Hola");
        alert("La contraseña debe tener al menos un numero y/o una letra.");
        salida = false;
    }
    return salida;
}