/*abstract class genMonster {
  static numMonster = 0
  constructor(
    public id: string,
    public name: string,
    public weaknesses: string[],
    public location: string,
    public challenge: number,
    public mortality: boolean = false,
    public safety: number,
  ) {
    genMonster.numMonster++
    id
  }
  monsterLogger() {
    return this
  }
  //range challenge from 1-10
  // 1 being like squashing a bug and 10 being cooking a macaron for the first time
  set challengeVal(n: number) {
    if (n > 0 && n <= 10) {
      this.challenge = n;
    }
  }
  get challengeVal() {
    return this.challenge;
  }

  //range safety from 1-10
  set safetyVal(n: number) {
    if (n > 0 && n <= 10) {
      this.safety = n;
    }
  }
  get safetyVal() {
    return this.safety;
  }
  static getMonName(){
    return this.id
  }
  static getMonsterNumber() {
    return this.numMonster
  }

}

class ghost extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: string, challenge: number, mortality: boolean, safety: number, public type: string, public signs: string[]) {
    super(id, name, weaknesses, location, challenge, mortality, safety);
  }
  get info() {
    return console.log(this.name, this.type, this.signs);
  }
}
const Jerry = new ghost("0234", "Jerry", ["soap", "attractive people"], "-74.4835, 171.4803",  3, false, 2, "boring", ["libra", "ectoplasm puddles", "yamaha piano music"]);
const Patricia = new ghost("8765", "Patricia", ["being sent to the corner", "milk and cookies"], "-89.3921, -30.4079",  1, false, 2, "spooky", ["stray drawing supplies", "messy living rooms", "spilled milk"]);
const Lola = new ghost("4569", "Lola", ["makeup remover", "tied shoelaces"], "-61.6134, -90.1008",  10, false, 10, "boss music", ["water tasting like cotton candy", "spontaneous laughing", "socks mysteriously necoming fun and colorful"]);
//Jerry.monsterLogger()
let ghostlist = [Jerry, Patricia, Lola];


class beast extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: string, challenge: number, mortality: boolean, safety: number,  public habitat: string, public defensives: string[]){
    super(id, name, weaknesses, location, challenge, mortality, safety)
  }
  get beastInfo() {
    return this.habitat, this.defensives
  }
}
const Chupaleco = new beast("5804", "Chupaleco", ["raw meat", "garden knomes"], "32.5149° N, 117.0382° W", 7, true, 6, "Tijuana", ["sprays acid spit, sorta like a cricket but much much worse, very fast"])
const Rollorino = new beast("4574", "Rollorino", ["needles", "soap and deodorant"], "27.6648° N, 81.5158° W", 7, true, 1, "Florida", ["reality warping, manual adrenaline rush, spicy food tolerance"])
const SpiderDog = new beast("3467", "SpiderDog", ["peanut butter", "rolled up newspaper"], "32.3182° N, 86.9023° W", 7, true, 5, "Alabama", ["general spider abilities, general dog abilities, "])
//Chupaleco.monsterLogger()
let beastslist = [Chupaleco, Rollorino, SpiderDog];



enum compliance {
  ally = "ally",
  friendly = "friendly",
  neutral = "neutral",
  unfriendly = "unfriendly",
  hostile = "hostile"
}

class humanoid extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: string, challenge: number, mortality: boolean, safety: number,  public humanness: number, public compliance: compliance){
    super(id, name, weaknesses, location, challenge, mortality, safety);
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
const Dracula = new humanoid("999", "Dracula", ["sunlight", "wood"], "46.1841° N, 25.2224° E", 9, false, 2, 8, compliance.hostile);
const MummyMan = new humanoid("976", "MummyMan", ["cats", "bathrooms"], "-55.2136, -177.1905", 7, false, 2, 8, compliance.unfriendly)
const John = new humanoid("362", "Joe", ["catfood", "deadlines"], "82.4746, 113.9271", 10, false, 2, 8, compliance.hostile)
const TheManBehindtheSlaughter = new humanoid("293", "stranger", ["unknown"], "40°42'02.7”N 75°52'00.2”W", 10, false, 2, 8, compliance.hostile)
let humanoidslist = [Dracula, MummyMan, John];



//console.log(sorted);
//console.log(genMonster.getMonsterName());

console.log(genMonster.getMonName());

*/

abstract class genMonster {
  constructor(
    public id: string,
    public name: string,
    public weaknesses: string[],
    public location: string,
    public challenge: number,
    public mortality: boolean = false,
    public safety: number,
  ) {}
  monsterLogger() {
    return this
  }
  //range challenge from 1-10
  // 1 being like squashing a bug and 10 being cooking a macaron for the first time
  set challengeVal(n: number) {
    if (n > 0 && n <= 10) {
      this.challenge = n;
    }
  }
  get challengeVal() {
    return this.challenge;
  }

  //range safety from 1-10
  set safetyVal(n: number) {
    if (n > 0 && n <= 10) {
      this.safety = n;
    }
  }
  get safetyVal() {
    return this.safety;
  }

}

class ghost extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: string, challenge: number, mortality: boolean, safety: number, public type: string, public signs: string[]) {
    super(id, name, weaknesses, location, challenge, mortality, safety);
  }
  get info() {
    return console.log(this.name, this.type, this.signs);
  }
}
const Jerry = new ghost("0234", "Jerry", ["soap", "attractive people"], "-74.4835, 171.4803",  3, false, 2, "boring", ["libra", "ectoplasm puddles", "yamaha piano music"]);
const Patricia = new ghost("8765", "Patricia", ["being sent to the corner", "milk and cookies"], "-89.3921, -30.4079",  1, false, 2, "spooky", ["stray drawing supplies", "messy living rooms", "spilled milk"]);
const Lola = new ghost("4569", "Lola", ["makeup remover", "tied shoelaces"], "-61.6134, -90.1008",  10, false, 10, "boss music", ["water tasting like cotton candy", "spontaneous laughing", "socks mysteriously necoming fun and colorful"]);
//Jerry.monsterLogger()
let ghostlist = [Jerry, Patricia, Lola];


class beast extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: string, challenge: number, mortality: boolean, safety: number,  public habitat: string, public defensives: string[]){
    super(id, name, weaknesses, location, challenge, mortality, safety)
  }
  get beastInfo() {
    return this.habitat, this.defensives
  }
}
const Chupaleco = new beast("5804", "Chupaleco", ["raw meat", "garden knomes"], "32.5149° N, 117.0382° W", 7, true, 6, "Tijuana", ["sprays acid spit, sorta like a cricket but much much worse, very fast"])
const Rollorino = new beast("4574", "Rollorino", ["needles", "soap and deodorant"], "27.6648° N, 81.5158° W", 7, true, 1, "Florida", ["reality warping, manual adrenaline rush, spicy food tolerance"])
const SpiderDog = new beast("3467", "SpiderDog", ["peanut butter", "rolled up newspaper"], "32.3182° N, 86.9023° W", 7, true, 5, "Alabama", ["general spider abilities, general dog abilities, "])
//Chupaleco.monsterLogger()
let beastslist = [Chupaleco, Rollorino, SpiderDog];



enum compliance {
  ally = "ally",
  friendly = "friendly",
  neutral = "neutral",
  unfriendly = "unfriendly",
  hostile = "hostile"
}

class humanoid extends genMonster {
  constructor(id: string, name: string, weaknesses: string[], location: string, challenge: number, mortality: boolean, safety: number,  public humanness: number, public compliance: compliance){
    super(id, name, weaknesses, location, challenge, mortality, safety);
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
const Dracula = new humanoid("999", "Dracula", ["sunlight", "wood"], "46.1841° N, 25.2224° E", 9, false, 2, 8, compliance.hostile);
const MummyMan = new humanoid("976", "MummyMan", ["cats", "bathrooms"], "-55.2136, -177.1905", 7, false, 2, 8, compliance.unfriendly)
const John = new humanoid("362", "Joe", ["catfood", "deadlines"], "82.4746, 113.9271", 10, false, 2, 8, compliance.hostile)
const TheManBehindtheSlaughter = new humanoid("293", "stranger", ["unknown"], "40°42'02.7”N 75°52'00.2”W", 10, false, 2, 8, compliance.hostile)
let humanoidslist = [Dracula, MummyMan, John];


class organize extends genMonster{
  constructor(id: string, name: string, weaknesses: string[], location: string, challenge: number, mortality: boolean, safety: number){
    super(id, name, weaknesses, location, challenge, mortality, safety)
  }
  public static getNames(){
    return this.name
  }
}
console.log(organize.getNames());
//logs the name organize
//need it to log the names of the monsters

