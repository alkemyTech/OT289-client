import Swal from 'sweetalert2';

export function alertConfirmation(){
    Swal.fire("Confirmación!", "Operación exitosa!", "success");
}

export function alertInfo(mensaje){
    Swal.fire("Información!", mensaje, "info");
}

export function alertError (mensaje){
    Swal.fire({
        title: "Disculpa Hubo un Error",
        icon: "error",        
        text: mensaje
      });
}