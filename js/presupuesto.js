var boton = document.getElementById("enviar");
var form = document.getElementById("formulario");

boton.addEventListener("click",(evento)=>{       //desactivar botón enviar
    evento.preventDefault();
     
    valido=validar();

    if(valido==true){    //creamos una condición para que envie el formulario si todo está correcto
        form.submit();
    }   
})

function validar(){  //función para validar el presupuesto
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var privacidad = document.getElementById("privacidad");
    var correo = document.getElementById("correo").value;
    var productos = document.getElementsByName('producto');
    
   ////CONDICIONES PARA EL NOMBRE

    if(nombre == null || nombre == ""){
        alert("El nombre no puede estar en blanco.");
        return false;
    }
    let nameRe =/^[a-zA-Z]{2,15}$/;
    if(!nameRe.exec(nombre)){
        alert("El nombre sólo puede estar compuesto por letras y no puede tener una longitud de más de 15 caracteres");
        return false;
    }
    ////CONDICONES PARA EL APELLIDO

    if(apellidos == null || apellidos ==""){
        alert("Los apellidos no pueden estar en blanco.");
        return false;
    }
    let apellidoRe =/^[a-zA-Z]{2,40}$/;
    if(!apellidoRe.exec(apellidos)){
        alert("Los apellidos sólo pueden estar compuestos por letras y no pueden tener una longitud de más de 40 caracteres ")
        return false;
    }
    ////CONDICIONES PARA EL TELÉFONO

    if (telefono == null || telefono == ""){
        alert("El teléfono no puede estar en blanco");
        return false;
    }
    let tel_re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/
    if(!tel_re.exec(telefono)){
        alert("El campo teléfono sólo admite números y debe contener 9 caracteres.");
        return false;
    }
    //////CONDICIONES PARA EL CORREO
    if(correo == null || correo == ""){
        alert("El email no puede estar en blanco");
        return false;
    }
    let email_re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(!email_re.exec(correo)){
        alert("Los datos introducidos en el campo email no son correctos");
        return false;
    }
    /////CONDICIONES PARA EL PRODUCTO

    let productoSeleccionado = false;

    for (let producto of productos) {
        if (producto.checked) {
            productoSeleccionado = true;
            break;
        }
    }

    if (!productoSeleccionado) {
        alert('Por favor, selecciona una opción de producto.');
        e.preventDefault();
    }
    ////CONDICONES PARA LA POLITICA DE PRIVACIDAD

    if(!privacidad.checked){
        alert("Tienes que aceptar las condiciones");
        return false;
    }
    
        return true;////si todo esta correcto valida el formulario
}



//////////////CALCULAR PRESUPUESTO/////////////////////////////


const descuentos = { 
    '1': 0, // Sin descuento para 1 mes 
    '3': 10, // 10% de descuento para 3 meses 
    '12': 20, // 20% de descuento para 12 meses }
};

document.getElementById('formulario').addEventListener('change', calcularTotal);

function calcularTotal() {
    let total = 0;
    
    const productos = document.getElementsByClassName('productos')[0].getElementsByTagName('input');
        for (let producto of productos) {
            if (producto.checked) {
                total += parseFloat(producto.value);
            }
        }

    const extras = document.getElementsByClassName('extras')[0].getElementsByTagName('input');
        for (let extra of extras) {
            if (extra.checked) {
                total += parseFloat(extra.value);
            }
        }

        const suscripcion = document.getElementById('suscripcion').value; 
        const descuento = descuentos[suscripcion]; 
        total = total - (total * (descuento / 100)); 
        document.getElementById('total').value = total.toFixed(2); 
    }   

    document.getElementById('total').value = total;


    

