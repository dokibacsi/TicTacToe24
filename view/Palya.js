import Mezo from "./Mezo.js"

class Palya {
    #lista
    #szuloElem
    constructor(lista, szuloElem) {
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.mezoLetrehoz(this.#lista, this.#szuloElem)
    }

    mezoLetrehoz(lista, szuloElem) {
        lista.forEach((element, index) => {
            new Mezo(element, index, szuloElem)
        });
    }
}

export default Palya