//Seleccionamos las variables
const formulario= document.querySelector(".formulario");
const mensaje= document.querySelector("#mensaje");

//Evento de validacion de formulario
formulario.addEventListener("submit", (e) => {

    const email= document.querySelector("#email").value.trim();

    //Comprobamos que el formulario esta vacio
    if (email === ""){
        mensaje.textContent= "Por favor ingrese su correo electronico";
        mensaje.classList.add("error");
        e.preventDefault();
    }
    //Comprobamos si el formulario no tiemne un contenido, una @, un punto, y una extencion
    else if (!/^\S+@\S+\.\S+$/.test(email)){
        mensaje.textContent= "El correo electronico no es valido";
        mensaje.classList.add("error");
        e.preventDefault();
    }
    //Si no se cumplen las anteriores el formulario cumple los requisitos y se envia
    else{
        mensaje.textContent= "";
        mensaje.classList.remove("error");
    }
});
