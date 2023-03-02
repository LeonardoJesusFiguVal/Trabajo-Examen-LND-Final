const datos= {
    email: ""
};

const email= document.querySelector("#email");

const formulario= document.querySelector("#formulario");

formulario.addEventListener("submit", function (event){
    event.preventDefault();
    const {email}=datos;
    if(email===""){
        const alerta= document.createElement("P");
        alerta.textContent= "El campo no puede estar vacio";
        alerta.classList.add("error");
        setTimeout(()=>{
            alerta.remove();
        },3000);
    }
});

email.addEventListener("input", comprobarTexto);

function comprobarTexto(event){
    datos[event.target.id]=event.target.value;
    console.log(event.target.id);
    console.log(datos);
}