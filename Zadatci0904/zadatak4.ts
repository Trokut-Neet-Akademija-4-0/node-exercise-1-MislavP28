
abstract class KucniLjubimac {
    public ime!: string 
    abstract glasajSe(): string
}

class Pas extends KucniLjubimac {
    private zvuk: string

    constructor(){
        super()
        this.zvuk = "Vauuuu"
        this.ime = "Pas"
        
    }
    glasajSe(): string {
        return this.zvuk
    }
}

class Mačka extends KucniLjubimac {
    private zvuk: string

    constructor(){
        super()
        this.zvuk = "Mjaaaauuuuuu"
        this.ime = "Mačka"
        
    }
    glasajSe(): string {
        return this.zvuk
    }
}

const pas = new Pas ()
console.log(pas.glasajSe())

const mačka = new Mačka ()
console.log(mačka.glasajSe())