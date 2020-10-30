// Write code here

// Classes practice

class Article {
  constructor(headline, authors, category, wordCount) {
    this.headline = headline;
    this.authors = authors;
    this.category = category;
    this.wordCount = wordCount;
  }
}

let articles = [];

async function getArticles() {
  let res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${apiKey}`);
  let data = await res.json();
  let dataArray = data.response.docs;
  dataArray.forEach(object => {
    let newArticle = new Article(object.headline['print_headline'], object.byline.original, object['subsection_name'], object['word_count']);
    articles.push(newArticle);
  });
  console.log(articles);
}

getArticles();


// Promises practice

let formulaOnePromise = (country) => new Promise((resolve, reject) => {
  let newArray = drivers.filter(object => {
    return object.country === country;
  });
  if (newArray.length !== 0) {
    resolve(newArray);
  } else {
    reject(`Sorry. There are no great Formula 1 drivers from the ${country}.`);
  }
});

formulaOnePromise('United Kingdom').then(console.log).catch(console.log);