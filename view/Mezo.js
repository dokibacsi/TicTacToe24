class Mezo{
    #jel
    #index
    #szE
    constructor(jel, index, szE)
    {
        this.#jel = jel
        this.#index = index
        this.#szE = szE
        this.kiir(this.#jel, this.#index, this.#szE)
        const mezoElem = $(`.mezo${index}`)
        if(this.#jel == " "){
            this.esemenyKezelo(mezoElem)
        }
        
    }

    kiir(jel, index, szE){
        let text = `<div id="mezo" class="mezo${index}">${jel}</div>`
        szE.append(text)
    }

    esemenyKezelo(elem){
        $(elem).on("click", ()=>{
            const esemeny = new CustomEvent("katt", {detail: this.#index})
            window.dispatchEvent(esemeny)
        })
    }

}

export default Mezo