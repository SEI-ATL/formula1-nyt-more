

// Write code here



// fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${API_KEY}`)
// .then((res) => res.json()).then((json) => {
//     console.log(json);
// })








async function nyt() {


const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=riot&api-key=${API_KEY}`);
const json = await res.json();

console.log(json)

}

nyt();