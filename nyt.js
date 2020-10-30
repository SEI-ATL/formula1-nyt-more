 let credentials = API_KEY;
 
fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`)
.then((res) => res.json()).then((json) => {
    console.log(json);
});

async function getApi() {
    const url = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${credentials}`);
    const json = await url.json()
    console.log(json);
}
getApi();


//promises!!
// const successfulPromise = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//        resolve()
//     }, 3000)
    
// })
// console.log(successfulPromise);

// const unsuccessfulPromise = new Promise(function(resolve, reject) 
// {
//     setTimeout(reject, 300)
// })
// console.log(unsuccessfulPromise)

// setTimeout(function() {
//     console.log(successfulPromise);
//     console.log(unsuccessfulPromise);
// }), 4000;
