
// console.log(credentials);
// //FETCH AND AWAIT;
// console.log(API_KEY);

console.log(credentials);
console.log(apiKey);


async function getArticles() {
    let res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${apiKey}`);
    let data = await res.json();
    console.log(data);
  }
  
  getArticles(); 

