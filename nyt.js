let searchParam = 'computer'
console.log(API_KEY);
const container = document.querySelector('.container')
// Write code here
//https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

// fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchParam}&api-key=${API_KEY}`).then(response=> return response.json()).then(data =>console.log(data))
fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchParam}&api-key=${API_KEY}`).then(response=>{return response.json()}).then(data=>console.log(data.response.docs))

async function returnResults(str){ 
    let response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${str}&api-key=${API_KEY}`)
    let data = await response.json()
    console.log(data.response.docs[0]);
    const div = document.createElement('div')
    container.textContent = ` ${data.response.docs[0].abstract} \n ${data.response.docs[0].byline.original}`

}
returnResults(searchParam)