const formulario = document.querySelector("#formulario");
// crear el evento
formulario.addEventListener("submit", validarFormulario)

//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre=document.querySelector("#nombre").value
    const apellido=document.querySelector("#apellido").value
    const telefono=document.querySelector("#telefono").value
    const correo=document.querySelector("#correo").value
    const dato=document.querySelector("#dato").value
    const texto=document.querySelector("#texto").value
   
   const respuesta = document.getElementById("respuesta");
   respuesta.textContent = ${nombre} $(apellido) ${telefono} ${correo} ${dato} ${texto}
}



