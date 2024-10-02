import { mCliente } from "./mCliente.js"
import { vCliente } from "./vCliente.js"
import { vTienda } from "./vTienda.js"
import { mTienda } from "./mTienda.js"




export class Cl_Controlador{
    constructor(){  
        this.vTienda = new vTienda();
        this.mTienda = new mTienda();
        this.vCliente = new vCliente();
        this.salida = document.getElementById("salida");
    }

    iniciar(){
        do{
            let datos = this.vCliente.leerDatos();
            let cliente = new mCliente(datos);
            this.mTienda.procesarCliente(cliente);
            this.vCliente.mostrarMensaje(this.salida, cliente._Cedula, cliente.Total());
        } while (confirm("¿Desea comprar otro producto?")) {
            this.vTienda.mostrarTienda(this.salida, this.mTienda.devolverMayor(), this.mTienda.devolverTotalFinal());
        }
    }

}