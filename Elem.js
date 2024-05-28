import Jatekter from "./Jatekter.js";

export default class Elem{
    sor;
    oszlop;
    jatek;

    constructor(sor, oszlop, jatek){
       this.sor = sor;
       this.oszlop = oszlop;
       this.jatek = jatek;
       this.element = document.createElement('div');
       this.element.classList.add('feny');
       this.element.addEventListener('click', ()=> this.jatek.fenyekKapcsolo(this.sor, this.oszlop));
    }


    kapcsol(){
       this.element.classList.kapcsol('be');
    }


    get isBe(){
        return this.element.classList.contains('be');
    }
}