class BankovniRacun{
    private stanje: number;

    constructor(pocetnoStanje: number){ this.stanje = pocetnoStanje; }
    uplata(iznos: number) 
    {this.stanje += iznos;}
    
    isplata(iznos:number){
        if (iznos <= this.stanje){
            this.stanje -= iznos;
            return true;
        }
        else{ 
            return false;
        }
    }
    dohvatiStanje() {return this.stanje}
}
const xxx = new BankovniRacun(100);
console.log(xxx.dohvatiStanje());