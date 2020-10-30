// Write code here

// Link with Formula One file:
const racing = drivers;
console.log(racing);

// Formula One class:
class Driver {
    constructor(player, team, country) {
        this.player = player;
        this.team = team;
        this.country = country;
        this.introduction = function() {
            console.log(`My name is ${this.player}, and I drive for ${this.team} in ${this.country}.`);
        };
    };
};

const seventhDriver = new Driver(racing[6].player, racing[6].team, racing[6].country);
seventhDriver.introduction();
const eleventhDriver = new Driver(racing[10].player, racing[10].team, racing[10].country);
eleventhDriver.introduction();
const thirteenthDriver = new Driver(racing[12].player, racing[12].team, racing[12].country);
thirteenthDriver.introduction();

// Attempt with NYT:
// const articles = [];
// articles.push(nyt());
// console.log(articles);

let articles = [];

async function getArticles() {
    const result = await fetch(`https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=${credentials}`);
    const json = await result.json();
    // console.log(json);
    for (item in json) {
        articles.push(item);
    }
    
    // articles.push(json.response.docs);

    return articles;
};

getArticles();
console.log(articles);

class Article {
    constructor(title, section, link) {
        this.title = title;
        this.section = section;
        this.link = link;
        this.description = function() {
            console.log(`The article entitled ${title} from the ${section} section can be found at ${link}.`);
        };
    };
};

const seventhArticle = new Article(articles.response.docs[6].headline.main, articles.response.docs[6].section_name, articles.response.docs[6].web_url);
seventhArticle.description();