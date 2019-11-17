$(document).ready(function(){
	obtenerDatos();
});

function obtenerDatos(){
	let url=`https://jsonplaceholder.typicode.com/posts`;
	const api = new XMLHttpRequest();
	api.open('GET',url,true);
	api.send();
	api.onreadystatechange = function(){
		if (this.status==200 && this.readyState==4) {
			console.log(this.responseText);
		}
	}
}