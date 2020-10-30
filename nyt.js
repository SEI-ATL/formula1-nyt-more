console.log(API_KEY);


// Write code here
fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`)
.then(response => response.json())
.then(data =>{
    console.log(data);
})


async function nyt(){
    const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`)
const json = await res.json()

return nyt
}

console.log(nyt());

////returned promise "fulfilled"