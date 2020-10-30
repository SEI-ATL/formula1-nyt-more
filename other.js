// class for formula 1 problem


class Driver {
    constructor(player, team, country) {
        this.player = player;
        this.team = team;
        this.country = country;
        }
    }
const formDrivers = new Driver('Tony Bologna','Golden Ealges', 'United States')
console.log(formDrivers);


// class for promise

// let credentials = API_KEY;

function myFetch(url) {
    const promise = new Promise(function(resolve, reject){
        const data = fetch(url)
        if (data.statusCode <400) {
            resolve();
        }else if(400 >= data.statusCode <= 599) {
            reject();
        }
    })
    return promise
}
myFetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`).then(...myFetch).catch(...myFetch)
