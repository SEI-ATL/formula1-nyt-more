//console.log(credentials);

// Write code here
class BestSeller {
    constructor(title, author, rank, coverImage) {
        this.title = title;
        this.author = author;
        this.rank = rank;
        this.coverImage = coverImage;
    }
}

//books API
let keyword = 'hardcover-fiction';

/* With .then
fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${keyword}.json?api-key=${credentials}`)
    .then(response => response.json())
    .then(data => {
        bestSellerList = data.results.books;
        const bestSellers = bestSellerList.map(function(book) {
            bestSeller = new BestSeller(book.title, book.author, book.rank, book.book_image);
            return bestSeller;
        });
        console.log(bestSellers);
    })
*/

async function makeBestSellersList() {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${keyword}.json?api-key=${credentials}`);
    const data = await response.json();
    bestSellerList = data.results.books;
    const bestSellers = bestSellerList.map(function(book) {
        bestSeller = new BestSeller(book.title, book.author, book.rank, book.book_image);
        return bestSeller;
    });
    console.log(bestSellers);
}
makeBestSellersList();