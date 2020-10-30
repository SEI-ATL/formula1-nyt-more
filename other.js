// Write code here
let topStories = []

class TopStories {
    constructor(section, title, url) {
    this.section = section;
    this.title = title;
    this.url = url;
    }
}

function topStoriesArray (array) {
    for (i = 0; i < array.length; i++) {
      topStories.push(new TopStories(array[i].section, array[i].title, array[i].url))
    }
}

async function newYorkTimes() {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)

    const json = await res.json();

    const json2 = (json.results)

    topStoriesArray(json2)

    return topStories
}
  
  
console.log(newYorkTimes())