console.log(API_KEY);

// Write code here

// fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`)
// .then((res) => res.json()).then((json) => {
//     console.log(json);
// });

async function getTopStories() {
    const sectionRes = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`);
    const topStories = await sectionRes.json();
    console.log(topStories);
}
getTopStories();

// const sections = ['arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 't-magazine', 'travel', 'upshot', 'us', 'world']
// async function getTopStories(section) {
//     const sectionRes = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`);
//     const topStories = await sectionRes.json();
//     console.log(topStories);
// }

// sections.forEach(element => getTopStories(element));