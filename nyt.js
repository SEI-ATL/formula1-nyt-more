// using .then
// fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${credentials}`)
// .then ((res) => res.json())
// .then ((json) => {
//     console.log(json);
// })


// async/await
async function nyt() {
    const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${credentials}`)
    const json = await res.json()
    console.log(json);
}
nyt();




console.log(credentials);