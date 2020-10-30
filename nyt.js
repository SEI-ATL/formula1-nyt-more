// Write code here
let credentials = API_KEY;

fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`)
.then((res) => res.json()).then((json) => {
    console.log(json);
    const nytData = json
    console.log(nytData);
});


async function nytMovies(){
    const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`) // new way to fetch
    const json = await res.json()
    console.log(json)
}
nytMovies();