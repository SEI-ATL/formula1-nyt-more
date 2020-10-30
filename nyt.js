console.log(API_KEY);

// Write code here

//https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=PyWtFBv1oJZZ3mPMNAElEkZoeIh6nbun

async function nycAPI() {
  const results = await fetch(
    `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${API_KEY}`
  );
  const json = await results.json();
  return json;
}

// const nycAPI = async() =>{
//     const results = await fetch('https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=PyWtFBv1oJZZ3mPMNAElEkZoeIh6nbun');
//     const json = await results.json();
//     return json;

// }

class Article {
  constructor(title, abstract, publishDate, section, url) {
    this.title = title;
    this.abstract = abstract;
    this.publishDate = publishDate;
    this.section = section;
    this.url = url;
  }

  printSummary() {
    console.log(
      `Title: ${this.title}, Abstract: ${this.abstract}, Date: ${this.publishDate}, Section: ${this.section}, URL: ${this.url}`
    );
  }
}

const main = async () => {
  const json = await nycAPI();
  const data = json.results;
  console.log(data);
  console.log(data[0].title);

    const articlesClass = data.map((a) => {
      return new Article(
        a.title,
        a.abstract,
        a.first_published_date,
        a.section,
        a.url
      );
    });

    for (let i=0; i< articlesClass.length; i++){
        articlesClass[i].printSummary();
    }

//   for (let i = 0; i < data.length; i++) {
//     const a = new Article(
//       data[i].title,
//       data[i].abstract,
//       data[i].first_published_date,
//       data[i].section,
//       data[i].url
//     );
//     a.printSummary();
//   }
};

main();

//notes
//anonymous function - waits for nycapi to fulfill its promise
// then prints it
// call anonymous function by ending ()

// can only await inside an sync function
// async function >>> returning a promise
// you await a promise inside in async func



