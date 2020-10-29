// console.log(credentials);

// Write code here

fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${credentials}`)
.then(res => res.json())
.then(json => console.log(json.results))

async function getData(){
    let results = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${credentials}`)
    json = await results.json()
    // .then(json => console.log(json.results))
    console.log(json.results)
    }
    
    getData()