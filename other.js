// Write code here
class Driver {
    constructor(player, rank, team, number, points) {
        this.player = player;
        this.rank = rank;
        this.team = team;
        this.number = number;
        this.points = points;
    }
};
const lewis = new Driver(drivers[0].player, drivers[0].rank, drivers[0].team, drivers[0].number, drivers[0].points);
const conditionalPromise1 = (points) => new Promise(function(resolve, reject) {
    if (points >= 50) {
        resolve(lewis);
    } else {
        reject('This driver has too few points');
    }
});

console.log(conditionalPromise1(lewis.points));


class Story {
    constructor(title, abstract, location, publishedDate, updatedDate, url) {
        this.title = title;
        this.abstract = abstract;
        this.location = location;
        this.publishedDate = publishedDate;
        this.updatedDate = updatedDate;
        this.url = url;
    }
};

async function getWorldTopStories() {
    const sectionRes = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${API_KEY}`);
    const topStoriesData = await sectionRes.json();
    const topStories = topStoriesData.results;

    const story = new Story(topStories[0].title, topStories[0].abstract, topStories[0].geo_facet, topStories[0].published_date, topStories[0].updated_date, topStories[0].url);

    const conditionalPromise2 = (publishedDate, updatedDate) => new Promise(function(resolve, reject) {
        if (publishedDate !== updatedDate) {
            resolve(story);
        } else {
            reject('This story has not been updated');
        }
    });

    console.log(story);
    console.log(conditionalPromise2(story.publishedDate, story.updatedDate));
}

getWorldTopStories()