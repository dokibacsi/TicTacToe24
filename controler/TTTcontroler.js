
import TTTmodel from "../model/TTTmodel.js";
import Palya from "../view/Palya.js";

class TTTcontroler {
    constructor() {
        this.TTTModel = new TTTmodel()
        this.szuloElem = $("#palya")
        new Palya(this.TTTModel.getList(), this.szuloElem)
        this.esemenyKezelo()

    }
    esemenyKezelo() {
        $(window).on("katt", (event) => {
            console.log(event.detail)
            this.TTTModel.Lepteto(event.detail)
            console.log(this.TTTModel.getList())
            new Palya(this.TTTModel.getList(), this.szuloElem)
            
        })
    }



}

export default TTTcontroler