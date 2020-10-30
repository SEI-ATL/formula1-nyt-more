let credentials = API_KEY;

fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`)
.then((res) => res.json()).then((json) => {
    console.log(json);
});

async function getApi() {
    const url = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`);
    const json = await url.json();
    console.log(json);
}
getApi(credentials);