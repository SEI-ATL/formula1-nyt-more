//Wasn't sure what the exact task here is. I assume that by credentials we mean "COPYWRIGHT" I also ran the search that will pull up articles that are re;lated to credentials.
let userInput = 'credentials';
let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${userInput}&api-key=${APIkey}`

async function getTimes(url) {
 
const res = await fetch(url);
const json = await res.json();
const credentials = json.copyright;
console.log(credentials)
}

getTimes(url);




