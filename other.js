// Write code here

let obj = drivers[2].player

class f1Drivers {
    constructor(player, team, country) {
        this.player = player;
        this.team = team;
        this.country = country;
        this.hello = function() {
            console.log('The Driver is a ' + this.player + ' from ' + this.country);
        }
    }
}

new f1Drivers;

//HAD TO COMMENT OU BECAUSE I COULDNT GET IT TO WORK
// function myFetch(url) {
//     const promise = new Promise(function(resolve, reject){
    //         const data = fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`)
//         if (data.status === "OK") {
//             resolve();
//         } else if {
//             reject();
//     return promise
//     }
// )}