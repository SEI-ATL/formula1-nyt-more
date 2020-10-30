console.log(API_KEY);

// Write code here


async function getBestSellers() {
  const res = await fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=rHFlwAw8HDW5gWDHrHBjbArCC0tgkdA6");
  const json = await res.json();
  console.log(`This is NYT Bestseller Data`, json);
}

getBestSellers();