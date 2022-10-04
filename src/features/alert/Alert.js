import Swal from 'sweetalert2';

export function alertConfirmation(titulo, mensaje){
    Swal.fire({
        title: titulo,
        icon: "success",        
        text: mensaje
      });
}

export function alertInfo(titulo, mensaje){
    Swal.fire({
        title: titulo,
        icon: "info",        
        text: mensaje
      });
}

export function alertError (titulo, mensaje){
    Swal.fire({
        title: titulo,
        icon: "error",        
        text: mensaje
      });
}