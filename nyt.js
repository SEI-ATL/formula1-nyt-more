const apiKey = 'UkrAVOIWnWpk1AgPkC1YIUKtMqho8bXE';

// console.log(credentials);

// Write code here

// Access the NYT API using .then()

fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${apiKey}`)
.then(res => {
  return res.json();
})
.then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err);
})

// Access the NYT API using async and await

async function getArticles() {
  let res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${apiKey}`);
  let data = await res.json();
  console.log(data);
}

getArticles();