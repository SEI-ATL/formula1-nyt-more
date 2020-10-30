console.log(API_KEY);

// Write code here

async function nytAPI() {
    const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=riot&api-key=${API_KEY}`);
    const json = await res.json(); 
    console.log(json)
    }
    
    
    nytAPI(); 
    