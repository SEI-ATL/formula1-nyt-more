console.log(API_KEY);

// Write code here
fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${API_KEY}`)
.then(response => response.json())
.then((data) => {
    console.log(data.results);
    // const movieReviewArray = data.results;
    let movieReviewArray = [...data.results];
    movieReviewArray.push({name: 'Rome Bell', movie: 'Intense series. Making history.'});
    console.log(movieReviewArray);

    for(let i = 0; i < movieReviewArray.length; i++) {
        let movieObject = movieReviewArray[i];

        // let {  } = coolNewObject;
        let {display_title, mpaa_rating, critics_pick } = movieObject;

        const eachMovie = new Movie(display_title, mpaa_rating, critics_pick);
        console.log(eachMovie);
        console.log(eachMovie.mmpaRating);
        
    }

});

function Movie(displayTitle, mmpaRating, criticsPick) {
    // byLine, headline, summaryShort, publicationData, openingDate, dateUpdated, link, ultimedia
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