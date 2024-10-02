import {Cl_Controlador} from "./Cl_Controlador.js";

export class Cl_Main{
    constructor(){
        let controlador = new Cl_Controlador();
        controlador.iniciar();
    }
}