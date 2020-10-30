const drivers = [
    { player: 'Lewis Hamilton', rank: 1, team: 'Mercedes', number: 44, points: 256, country: 'United Kingdom' },
    { player: 'Valtteri Bottas', rank: 2, team: 'Mercedes', number: 77, points: 179, country: 'Finland' },
    { player: 'Max Verstappen', rank: 3, team: 'Red Bull Racing', number: 33, points: 256, country: 'United Kingdom' },
    { player: 'Daniel Ricciardo', rank: 4, team: 'Renault', number: 3, points: 80, country: 'Australia' },
    { player: 'Charles Leclerc', rank: 5, team: 'Ferrari', number: 16, points: 75, country: 'Monaco' },
    { player: 'Sergio Perez', rank: 6, team: 'Racing Point', number: 11, points: 74, country: 'Mexico' },
    { player: 'Lando Norris', rank: 7, team: 'McLaren', number: 4, points: 65, country: 'United Kingdom' },
    { player: 'Alexander Albon', rank: 8, team: 'Red Bull Racing', number: 23, points: 64, country: 'Thailand' },
    { player: 'Pierre Gasly', rank: 9, team: 'AlphaTauri', number: 10, points: 63, country: 'France' },
    { player: 'Carlos Sainz', rank: 10, team: 'McLaren', number: 55, points: 59, country: 'Spain' },
    { player: 'Lance Stroll', rank: 11, team: 'Mercedes', number: 18, points: 57, country: 'Canada' },
    { player: 'Esteban Ocon', rank: 12, team: 'Renault', number: 31, points: 40, country: 'France' },
    { player: 'Sebastian Vettel', rank: 13, team: 'Ferrari', number: 5, points: 18, country: 'Germany' },
    { player: 'Daniil Kvyat', rank: 14, team: 'AlphaTauri', number: 26, points: 14, country: 'Russian Federation' },
    { player: 'Nico Hulkenberg', rank: 15, team: 'Racing Point', number: 27, points: 10, country: 'Germany' },
    { player: 'Antonio Giovinazzi', rank: 16, team: 'Alfa Romeo', number: 99, points: 3, country: 'Italy' },
    { player: 'Kimi Räikkönen', rank: 17, team: 'Alfa Romeo', number: 7, points: 2, country: 'Finland' },
    { player: 'Romain Grosjean', rank: 18, team: 'Haas', number: 8, points: 2, country: 'France' },
    { player: 'Kevin Magnussen', rank: 19, team: 'Haas', number: 20, points: 1, country: 'Denmark' },
    { player: 'Nicholas Latifi', rank: 20, team: 'Williams', number: 6, points: 0, country: 'Canada' },
    { player: 'George Russell', rank: 21, team: 'Williams', number: 63, points: 0, country: 'United Kingdom' },
];



/* **************************************************************************************

  Write  a factory function FormulaOne that takes in 3 parameters (player, team, country) 
  and make an instance of every driver in the array of drivers from above. Hint: Iterator

******************************************************************************************/


// Write code here
//Build the class a class constructor function
class Driver {
  constructor(player, team, country){
    this.player = player;
    this.team = team;
    this.country = country;
  }
};
 function filterDrivers (array, first, second, third){
array.forEach(driver => {
  let p;
  let t;
  let c;

for (const prop in driver) {
 if (prop ===first) {
  // console.log(`${prop} = ${driver[prop]}`);
  p = driver[prop]
  }
  if (prop ===second) {
    // console.log(`${prop} = ${driver[prop]}`);
    t = driver[prop];
    }
    if (prop ===third) {
      // console.log(`${prop} = ${driver[prop]}`);
      c= driver[prop]; 
      }
  } 
  //////////////get the new instance here ////////////////
  let newDriver = new Driver(p,t,c);
  driver.profile = newDriver;
  ///////////////////////////
  

  ////////////OPTIONAL BELOW///////////////////
  //automated the functin to great web-page elements//
  //console.log(newDriver);
  //console.log(newDriver[first]);
  let card = document.createElement('div');
  card.setAttribute('class','card');
  let masterDiv = document.querySelector('.container')
  masterDiv.appendChild(card);
  let name = document.createElement('h3');
  let textName1 = `${first} : ${newDriver[first]}`;
  name.innerText = textName1
  name.setAttribute('class',`${first}`);
  card.appendChild(name);
  let text1 = document.createElement('h4');
  let textName2 = `${second} : ${newDriver[second]}`;
  text1.innerText = textName2;
  text1.setAttribute('class',`${second}`);
  card.appendChild(text1);
  let text2 = document.createElement('h4');
  let textName3 = `${third} : ${newDriver[third]}`;
  text2.innerText = textName3;
  text2.setAttribute('class',`${third}`);
  card.appendChild(text2);

});

}
///call function///
filterDrivers(drivers,'player','team','country');

//console.log(drivers);

