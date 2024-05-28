import Elem from "./Elem.js";

export default class Jatekter{
   gridMeret;
   jatekterELEM;
   fenyek = [];

   constructor(gridMeret, jatekterELEM){
    this.gridMeret = gridMeret;
    this.jatekterELEM = jatekterELEM;
    this.fenyek = [];
    this.initJatek();
   }

    initJatek(){
        this.fenyek = [];
        this.jatekterELEM.innerHTML = '';
        for (let sor = 0; sor < this.gridMeret; sor++) {
            let sorTomb = [];
            for (let oszlop = 0; oszlop < this.gridMeret; oszlop++) {
                const feny = new Elem(sor, oszlop, this);
                this.jatekterELEM.appendChild(feny.element);
                sorTomb.push(feny);
            }
            this.fenyek.push(sorTomb);
        }
    }

    fenyekKapcsolo(sor, oszlop){
        this.fenyKapcsolo(sor, oszlop);
        if (sor > 0) this.toggleLight(sor - 1, oszlop);
        if (sor < this.gridMeret - 1) this.fenyKapcsolo(sor + 1, oszlop);
        if (oszlop > 0) this.toggleLight(sor, oszlop - 1);
        if (oszlop < this.gridMeret - 1) this.fenyKapcsolo(sor, oszlop + 1);
    }

    fenyKapcsolo(sor, oszlop) {
        const feny = this.feny[sor][oszlop];
        feny.kapcsol();
    }

}

document.addEventListener('DOMContentLoaded', () => {
    const jatekterELEM = document.getElementById('.jatekter');
    const jatekter = new Jatekter(5, jatekterELEM);
});

