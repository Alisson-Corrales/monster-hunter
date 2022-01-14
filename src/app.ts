abstract class genMonster {
  constructor(
    public id: string,
    public name: string,
    public location: [number, number] = [0, 0],
    public challenge: number = 5,
    public weaknesses: string = "salt",
    public mortality: boolean = false,
    public safety: string = "yes"
  ) {}
  monsterLogger() {
    console.log(
      this.id,
      this.name,
      this.location,
      this.challenge,
      this.weaknesses,
      this.mortality,
      this.safety,
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

  constructor(id: string, name: string, public type: string, public signs: string[]) {
    super(id, name);
  }

  get info() {
    return console.log(this.name, this.type, this.signs);
  }
}

const Jerry = new ghost("0234", "Jerry", "spooky", ['libra', 'missing thumbtacks']);

Jerry.monsterLogger()