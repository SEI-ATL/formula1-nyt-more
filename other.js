//Cant use data from other js files here - ot sure why.... Tryed importing constants but I get a message that the vaiable has been declared. However all functions return "constant undefined";

const drivers1 = [
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
//////////////This class is equiped witha method that will tell what team the driver is on based on the name
class Car {
    constructor(name) {
        this.name = name
        this.findTeam = function(){
        drivers1.forEach(driver =>{
                if (driver.player ===this.name) {
                 console.log(`${driver.player} is on the ${driver.team} team`);
                 return false; //will use this later with a promise
                 }
        })
    }}}

    const kevin= new Car ('Kevin Magnussen');
    kevin.findTeam();

    const nico= new Car ('Nico Hulkenberg');
    nico.findTeam();

    const esteban= new Car ('Esteban Ocon');
    esteban.findTeam();


    //////////////Promise///
    //setting up the promise to return ERROR if the method of above instances WORKS to make sure all is wired up properly!!

   
  const conditionalPromise = new Promise (function(resolve, reject){
      if(kevin.findTeam()){
          resolve("the promise doesn't work");
      }else{
          reject('we are good here!');
      }
  })
  conditionalPromise.then((res) => console.log(res)).catch((err)=> console.error(err))
