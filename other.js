
class Driver {
    constructor(player) {
        this.player = player;
        this.team = team;
        this.country = country;
    }
    present() {
        return this.player;
    }
}
document.getElementById('container').innerHTML = driver.show();



    let credentials = API_KEY;
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
myFetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`)
.then(...myFetch).catch(...myFetch)
