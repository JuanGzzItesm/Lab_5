
function newbox(){

		//Declaracion de elementos que se necesitan para la lista
	
		let nuevo = $("#nuevoitem").val();

		let bullet = document.createElement("li");

		let itemL = document.createTextNode(nuevo);

		let listo = document.createElement("button");

		let formato = document.createElement("div");

		let borrar = document.createElement("button");


// Agregar el formato de los botones


		
		$(borrar).text("DELETE");

		$(borrar).addClass("borrar");

		$(listo).text("CHECK");

		$(listo).addClass("listo");



//Realizar un append a cada uno de los elementos de acuerdo con el formato requerido, primero los bullet y despues los botones


		$(bullet).append(itemL);

		$(bullet).append(formato)

		$(bullet).append(listo);

		$(bullet).append(borrar);

		$("ul").append(bullet);


//Eventos de click para cada uno de los botones, uno de ellos hace toggle a la funcion rayado que marca el elemento en la lista y el otro lo elimina



		listo.addEventListener('click',( event ) =>{

				$(bullet).toggleClass("rayado");
				
		});


		borrar.addEventListener('click',( event ) =>{

				$(bullet).remove();
		});

}




function init(){


	submit.addEventListener('click',( event ) =>{

				 event.preventDefault();
		 		 newbox();
		});

}

init();
