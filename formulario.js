window.addEventListener('load',function(){
    var formulario = document.querySelector('#formulario');
    var boxdashed = document.querySelector(".dashed");
	boxdashed.style.display = "none";

    formulario.addEventListener('submit',function(){
console.log('submit');
        let nombre =document.querySelector('#name').value;
        let email = document.querySelector('#mail').value;
        let phone = document.querySelector('#telefono').value;
        let mensaje =document.querySelector('#mensaje').value;
        boxdashed.style.display = "block";

		let datoNombre = document.querySelector('#dato_nombre span');
		let datoEmail = document.querySelector('#dato_email span');
		let datoPhone = document.querySelector('#dato_phone span');
        let datomensaje = document.querySelector('#dato_mensaje span')
		datoNombre.innerHTML = nombre;
		datoEmail.innerHTML = email;
		datoPhone.innerHTML = phone;
        datomensaje.innerHTML = mensaje;

    });
});
      

/*
	

		if(nombre.trim() == null || nombre.trim().length == 0){
			alert("El nombre no es válido");
			document.querySelector("#error_nombre").innerHTML = "El nombre no es valido";
			return false;
		}else{
			document.querySelector("#error_nombre").style.display = "none";
		}

		if(apellidos.trim() == null || apellidos.trim().length == 0){
			alert("Los apellidos no son válidos");
			return false;
		}

		console.log(edad);
		if(edad == null || edad <= 0 || isNaN(edad)){
			alert("La edad no es válida");
			return false;
		}

		box_dashed.style.display = "block";

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_edad = document.querySelector("#p_edad span");

		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_edad.innerHTML = edad;

		/*
		var datos_usuario = [nombre, apellidos, edad];
		var indice;
		for(indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		
		
	});

});*/