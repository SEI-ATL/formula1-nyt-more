console.log(API_KEY);

// Write code here
fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${API_KEY}`)
.then(response => response.json())
.then((data) => {
    console.log(data.results);
    // using the spread operator to add each element as a copy to this new element
    let movieReviewArray = [...data.results];
    console.log('Movie Array');
    console.log(movieReviewArray);
    
    for(let i = 0; i < movieReviewArray.length; i++) {
        let movieObject = movieReviewArray[i];
        
        // Destructuring - take key out of an object and being able to reference those keys without saying movieObject['display_title]
        let { display_title, mpaa_rating, critics_pick } = movieObject;
        
        const eachMovie = new Movie(display_title, mpaa_rating, critics_pick);
        console.log('Movie');
        console.log(eachMovie);
        
    }

});

const king = 'Stephen+King'

fetch(`https://api.nytimes.com/svc/books/v3/reviews.json?author=${king}&api-key=${API_KEY}`)
.then(response => {
    // console.log(response);
    return response.json();
})
.then(nytData => {
    console.log('New York Times Book Review Data');
    console.log(nytData);
})

// byLine, headline, summaryShort, publicationData, openingDate, dateUpdated, link, ultimedia
function Movie(displayTitle, mmpaRating, criticsPick) {
    this.displayTitle = displayTitle;
    this.mmpaRating = mmpaRating;
    this.criticsPick = criticsPick;
    // this.byLine = byLine;
    // this.headline = headline;
    // this.summaryShort = summaryShort;
    // this.publicationData = publicationData;
    // this.openingDate = openingDate;
    // this.link = link;
    // this.dateUpdated = dateUpdated;
    // this.ultimedia = ultimedia;
}

const fetchTopStories = async function () {
    const topStoriesData = await fetch(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${API_KEY}`)
    const data = await topStoriesData.json();
    console.log('Science Topics');
    console.log(data.results);
    
}

fetchTopStories();

// Resources:
// https://stackoverflow.com/questions/7486085/copy-array-by-value
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment