import Swal from 'sweetalert2';

export function alertConfirmation(){
    Swal.fire("Confirmación!", "Operación exitosa!", "success");
}

export function alertInfo(mensaje){
    Swal.fire("Información!", mensaje, "info");
}

export function alertError (){
    Swal.fire("Error!", "Disculpe hubo un error, intente nuevamente!", "error");
}