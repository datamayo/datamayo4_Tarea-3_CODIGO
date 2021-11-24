function validar() {
	// body...
	var correo, telefono, expresion;
	correo= document.getElementById('txtEmail').value;
	telefono= document.getElementById('txtTelefono').value;
	expresion= /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
	if(!expresion.test(correo)){
		alert("El correo no es válido");
		return false;
	}
	
	else if(telefono.length!=10){
		alert("El telefono es incorrecto");
		return false;
	}
	else if(isNaN(telefono)){
		alert("El telefono ingresado no es un número");
		return false;
	}
	else{
		setTimeout( function() { window.location.href = "../index.html"; }, 1000 );
		alert("DATOS ENVIADOS CORRECTAMENTE !!!!!!");

	}
	
}
function checkSubmit() {
    document.getElementById("btnEnviar").value = "Enviando...";
    document.getElementById("btnEnviar").disabled = true;
    return true;
}