class Osoba {
    constructor(
      private ime: string,
      private dob: number,
    ) {}  setIme(ime: string): void {
      this.ime = ime
    }  
    setDob(dob: number): void {
      this.dob = dob
    }  
    getIme(): string {
      return this.ime
    }  
    public getDob(): number {
      return this.dob
    }
   
    public get imeIDob(){
      return `Moje ime je ${this.ime} i imam ${this.dob} jahre alt!`
    }
  }
  const osoba = new Osoba('test', 99)
  console.log(osoba)
  osoba.setIme('Mislav')
  osoba.setDob(25)
  console.log(osoba.getIme(), osoba.getDob())
  console.log(osoba.imeIDob)
  export default Osoba