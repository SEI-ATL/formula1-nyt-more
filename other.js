/* ## Class & Promise
- Practicing using the above 2 problems make a `class` and make a few instances inside of the `other.js` file
- Practicing make a Promise inside `other.js` with the above two problems in a creative way and make sure that it is working */

// Write code here

class Review {
    constructor(movieTitle, author, headline, url, pubDate) {
        this.movieTitle = movieTitle;
        this.author = author;
        this.headline = headline;
        this.url = url;
        this.pubDate = pubDate;
    }

    //create new element
    createNewElement(tagName, text) {
        const newElement = document.createElement(tagName);
        newElement.textContent = text;
        return newElement;
    }

    createReview() {
        const title = this.createNewElement('h2', this.movieTitle);
        const author = this.createNewElement('h5', `Review by: ${this.author}`);
        const headline = this.createNewElement('h4', this.headline);
        const url = this.createNewElement('a', 'Read it here!');
        url.setAttribute('href', this.url);
        url.setAttribute('target', '_blank');
        const card = this.createNewElement('div');
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(headline);
        card.appendChild(url);
        return card;
    }

}

const checkPubDate = (review) => new Promise(
    function(resolve, reject) {
        if (review.pubDate.slice(5, 7) === '10') {
            //if written this month
            reviewElement = review.createReview();
            resolve(reviewElement);
        } else {
            reject('Not current review');
        }
    })

async function makeMoviesList() {
    const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json?api-key=${credentials}`);
    const data = await response.json();
    critPickList = data.results;
    const suggestions = critPickList.map(function(review) {
        suggestion = new Review(review.display_title, review.byline, review.headline, review.link.url, review.publication_date);
        return suggestion;
    });
    suggestions.forEach(function(review) {
        checkPubDate(review).then(reviewElement => document.body.appendChild(reviewElement)).catch(error => console.log(error))
    })
}
makeMoviesList();