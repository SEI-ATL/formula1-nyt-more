const credentials = API_KEY;
console.log(credentials);

// Write code here

// Initial setup with 'then':
// fetch(`https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=${credentials}`)
// .then(response => response.json())
// .then(data => console.log(data));

// Altered setup with 'await':
async function nyt() {
    const result = await fetch(`https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=${credentials}`);
    const json = await result.json();
    console.log(json);
};

nyt();