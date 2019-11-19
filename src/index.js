$(document).ready(function(){
	obtenerDatos();
});

function obtenerDatos(){
	//direccion de la Api
	let url=`https://jsonplaceholder.typicode.com/posts`;
	//creamos el objeto api
	const api = new XMLHttpRequest();
	api.open('GET',url,true);
	api.send();
	
	api.onreadystatechange = function(){
		if (this.status==200 && this.readyState==4) {
			
			//convertimos el dato en Json para manipularlo
			let datos = JSON.parse(this.responseText);
			let resultado = document.querySelector('#resultado');
			resultado.innerHTML='';
			let username='';
			var i=0;
			for (let item of datos) {
				i++;
				username=obtenerName(item.id);
				resultado.innerHTML+= `<div class="col-md-4 mt-5" >
										 <img src="..." alt="..." class="img-thumbnail"> 
										 <br/>
										 id: ${item.id}<br/>
										 <h4>${username}</h4>
    									<h5 >${item.title} </h5>
    									<p >${item.body}</p>
							          </div>`;

							 if (i>20) {
							 	break;
							 }
			}

			

		}
	}
}



function obtenerName(id){
	//direccion de la Api
	
	$.ajax({
			dataType:"JSON",
			url:"https://jsonplaceholder.typicode.com/users/",
			type:"GET",
			data:id,
			async: false,
			success:function(res){
				 var json = $.parseJSON(res);

				if (id == json.id) {
		   			return json.name;

				}
		}

		});
}

		