console.log(API_KEY);

const fetchQuery = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=rHFlwAw8HDW5gWDHrHBjbArCC0tgkdA6";

const topBooks = () => {
fetch(fetchQuery)
.then((response) => {
  if (response.ok) {
    return response.json();
  }
})
.then((data) => {
  //console.log(data.results.books[0].title);
  const bookTitles = data.results.books[0].title;
  console.log(`This book title is ${bookTitles}`);
}).catch((error) => {
    console.log(error);
   
});




}

topBooks();