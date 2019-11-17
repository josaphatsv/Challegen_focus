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
			var i=0;
			for (let item of datos) {
				//direccion de la Api
				let user=`https://jsonplaceholder.typicode.com/users/${item.id}`;
				let username='';
				//creamos el objeto api
				const apinfo = new XMLHttpRequest();
				apinfo.open('GET',user,true);
				apinfo.send();
				apinfo.onreadystatechange = function(){
					if (apinfo.status==200 && apinfo.readyState==4) {
						//convertimos el dato en Json para manipularlo
						let userInfo = JSON.parse(apinfo.responseText);
						username=userInfo.name;
						
					}

				}
				i++;
				resultado.innerHTML+= `<div class="col-md-4 mt-5" >
										 <img src="..." alt="..." class="img-thumbnail"> 
										 id: ${item.id}
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