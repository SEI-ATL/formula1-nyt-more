// Write code here
const searchForArticle = async (query) => {
  try {
    const request = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${credentials}`)
    if (!request.ok) throw new Error(request.statusText)

    return await request.json()
  } catch (e) {
    throw e
  }
}

const getArticleHeadlinesAndBylines = (data) => data.response.docs.map(doc => ({ headline: doc.headline.main, byline: doc.byline.original }))

class Article {
  constructor({ headline, byline }) {
    this.headline = headline
    this.byline = byline
  }

  static createArticles = (articles) => [].concat(articles).map(article => new Article(article))
}

const myArticleSearch = searchForArticle('obama')
myArticleSearch.then((res) => {
  const articleHeadlinesAndAuthors = getArticleHeadlinesAndBylines(res)

  const articleObjects = Article.createArticles(articleHeadlinesAndAuthors)
  console.log(articleObjects)
})
