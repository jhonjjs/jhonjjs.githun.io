
function perico(event){
    alert("javascript correcto");
	event.preventDefault();
	var na=document.getElementById("nombre").value;
	var me=document.getElementById("contra").value;
	if (na==="jhon")
    {

    }
    else{
        alert("el nombre no se encuentra registrado");
        } 
         if (me==="123456") {
     	      window.location.href="inicio2.html";
         }
         else{
    	     alert("contraseña incorrecta");
             }
    
	
}