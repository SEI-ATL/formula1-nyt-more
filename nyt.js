

// Write code here


fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`)
.then((res) => res.json()).then((json) => {
    console.log(json);
});



async function getAPI() {
    const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`)
    const json = await res.json();
    console.log(json)
}

getAPI();