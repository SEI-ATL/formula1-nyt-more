// Write code here


console.log(API_KEY);

async function nytApi() {
    console.log('I should be before the cats data');
    
    const res = await fetch('https://www.nytimes.com/search.json?query=news')
    const json1 = await res.json()
    console.log('this is the nyt data', json1);
nytApi();

fetch('https://www.nytimes.com/search.json?query=news')
.then((res) => res.json()).then((json) => console.log(json))
console.log('this is the nyt data');