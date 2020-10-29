// Write code here


class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
}
const activePlayers = []

let lebron = new Player("lebron james", "35", "6'9", "250")
activePlayers.push(lebron)
let kd = new Player("kevin durant", "32", "6'10", "240")
activePlayers.push(kd)


let newPromise = new Promise(function(resolve, reject) {
    if (0 < 5 === true) {
        let melo = new Player("carmelo anthony", "36", "6'8", "240")
        activePlayers.push(melo)
        return resolve()
    } else {
        return reject()
    }
})

console.log(activePlayers)