export class vCliente {
    constructor(){ 
    }

    leerDatos(){
        let cedula = prompt("Cedula");
        let producto = prompt("Producto");
        let cantidad = prompt("Cantidad");
        return {cedula, producto, cantidad};
    }

    mostrarMensaje(salida, cedula, Total){
        salida.innerHTML += `
         El cliente ${cedula} debe de pagar ${Total}<br>
         `;
    }
}