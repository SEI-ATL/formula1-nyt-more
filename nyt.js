// Write code here
console.log(API_KEY);


async function nytApi() {
    console.log('I should be before the cats data');
    
    const res = await fetch('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=DCxFehJ4eM4eYT04XkAxRgvy3XyTFsNE')
    const json1 = await res.json()
    console.log('this is the nyt data', json1);
nytApi();

fetch('https://api.nytimes.com/svc/mostpopular/v2/shared/1/facebook.json?api-key=DCxFehJ4eM4eYT04XkAxRgvy3XyTFsNE')
.then((res) => res.json()).then((json) => console.log(json))
console.log('this is the nyt data');