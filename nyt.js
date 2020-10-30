console.log(credentials);

const QUERY_STRING = `q=election&api-key=${credentials}`

// With fetch
/* fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?${QUERY_STRING}`)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error) */


// With async/await
const searchForElectionArticles = async () => {
  try {
    const request = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?${QUERY_STRING}`)
    if (!request.ok) throw new Error(request.statusText)

    return await request.json()
  } catch (e) {
    throw e
  }
}

searchForElectionArticles()
  .then((data) => console.log(data))
  .catch((e) => console.error(e))
