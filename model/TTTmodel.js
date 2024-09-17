import { LIST } from "../view/Lista.js";
export default class TTTmodel{

    #aktElem
    #lepes 
    constructor(){
        this.list_ = LIST
        this.#lepes = 0;
        this.#setAktElem()

    }

    #setAktElem(){
        if(this.#lepes % 2 == 0){
            this.#aktElem = "O"
        }else{
            this.#aktElem = "X"
        }
    }

    getAktElem(){
        return this.#aktElem
    }

    Lepteto(index){
        this.list_[index] = this.#aktElem
        this.#lepes++;
        this.#setAktElem(this.#aktElem)
    }

    getList(){
        return this.list_
    }

}