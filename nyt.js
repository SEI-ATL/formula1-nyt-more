class MovieReview {
  constructor(title, author, link) {
    this.title = title;
    this.author = author;
    this.link = link;
  }
}
const movieReviews = [];

//async method
async function movieReviewFetch(key) {
    const response = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${key}`)
    const json = await response.json();
    const movieReviewData = json.results;
    for (let i = 0; i < movieReviewData.length; i++) {
        let movieReviewObj = movieReviewData[i];
        let movieReview = new MovieReview(movieReviewObj.display_title, movieReviewObj.byline, movieReviewObj.link.url);
        movieReviews.push(movieReview);
    }
}

movieReviewFetch(API_KEY);
console.log(movieReviews);
/************************************************************************************************************************* 
FETCH METHOD

 fetch(
   `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=${API_KEY}`
 )
   .then((response) => {
     return response.json();
   })
   .then((json) => {
     for (let i = 0; i < json.results.length; i++) {
       let movieReviewData = json.results[i];
       let movieReview = new MovieReview(
         movieReviewData.display_title,
         movieReviewData.byline,
         movieReviewData.link.url
       );
       movieReviews.push(movieReview);
     }
   });
 
 console.log(movieReviews);

***************************************************************************************************************************/


//console log returns


// 0: MovieReview {title: "The Black Godfather", author: "BEN KENIGSBERG", link: "http://www.nytimes.com/2019/06/06/movies/the-black-godfather-review.html"}
// 1: MovieReview {title: "Square Grouper: The Godfathers of Ganja", author: "RACHEL SALTZ", link: "http://www.nytimes.com/2011/04/15/movies/square-grouper-movie-review.html"}
// 2: MovieReview {title: "Tokyo Godfathers", author: "A. O. Scott", link: "http://www.nytimes.com/2004/01/16/movies/film-revi…-rescue-foundling-trash-anyone-have-pacifier.html"}
// 3: MovieReview {title: "The Godfather, Part III", author: "Janet Maslin", link: "http://www.nytimes.com/1990/12/25/movies/review-fi…try-to-go-straight-in-the-godfather-part-iii.html"}
// 4: MovieReview {title: "The Godfather, Part II", author: "VINCENT CANBY", link: "http://www.nytimes.com/1974/12/13/archives/godfather-part-ii-is-hard-to-define-the-cast.html"}
// 5: MovieReview {title: "The Black Godfather", author: "NORA SAYRE", link: "http://www.nytimes.com/1974/09/04/archives/screen-drug-traffickers-vie-in-black-godfather.html"}
// 6: MovieReview {title: "The Godfather", author: "Vincent Canby", link: "http://www.nytimes.com/movie/review?res=EE05E7DF1739E464BC4E52DFB5668389669EDE"}
// 7: MovieReview {title: "Three Godfathers", author: "BOSLEY CROWTHER", link: "http://www.nytimes.com/1949/03/04/archives/the-scr…ohn-wayne-harry-carey-jr-in-three-godfathers.html"}
// 8: MovieReview {title: "Miracle in the Sand", author: "J.T.M.", link: "http://www.nytimes.com/1936/03/09/archives/at-the-rialto.html"}
// 9: MovieReview {title: "El Compadre Mendoza", author: "Harry T. Smith", link: "http://www.nytimes.com/1934/11/19/archives/a-mexican-traged
