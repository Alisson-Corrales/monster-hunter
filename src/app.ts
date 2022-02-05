abstract class genMonster {
  constructor(
    public id: string,
    public name: string,
    public weaknesses: string[],
    public location: [number, number] = [0, 0],
    public challenge: number,
    public mortality: boolean = false,
    public safety: string = "no"
  ) {}
  monsterLogger() {
    console.log(
      this
    );
  }
  set challengeVal(n: number) {
    if (n > 0 && n <= 10) {
      this.challenge = n;
    }
  }
  get challengeVal() {
    return this.challenge;
  }
}

class ghost extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: [number, number], challenge: number, public type: string, public signs: string[]) {
    super(id, name, weaknesses, location, challenge);
  }
  get info() {
    return console.log(this.name, this.type, this.signs);
  }
}
const Jerry = new ghost("0234", "Jerry", ["soap"], [33, 33],  9, "spooky", ["libra", "slime", "yamaha piano music"]);
//Jerry.monsterLogger()



class beast extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: [number, number], challenge: number, public habitat: string, public defensives: string[]){
    super(id, name, weaknesses, location, challenge)
  }
  get beastInfo() {
    return this.habitat, this.defensives
  }
}
const Chupaleco = new beast("5804", "Chupaleco", ["raw meat", "garden knomes"], [0, 9], 7, "Tijuana", ["sprays acid spit, sorta like a cricket but much much worse, very fast"])
//Chupaleco.monsterLogger()




enum compliance {
  ally = "ally",
  friendly = "friendly",
  neutral = "neutral",
  unfriendly = "unfriendly",
  hostile = "hostile"
}

class humanoid extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: [number, number], challenge: number, public humanness: number, public compliance: compliance){
    super(id, name, weaknesses, location, challenge);
  }
  set valueHumany(n: number) {
    if(n >= 0 && n <= 10){
      this.humanness = n; 
    }
  }
  get humanishInfo(){
    return this.humanness, this.compliance
  }
}
const Dracula = new humanoid("999", "Dracula", ["sunlight", "wood"], [46, 25], 10, 8, compliance.unfriendly)
//console.log(Dracula.monsterLogger());



const monsterList = [Dracula.name, Chupaleco.name, Jerry.name]

const sorted = monsterList.sort()
//console.log(sorted);
console.log(Dracula.name);


