console.log(API_KEY);

// Write code here

fetch('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=WOJfAklv0gM51glSKvyZBo6iqAFXIkCI')
.then(response => {
    return response.json();
})
.then(nytData => {
    console.log(nytData);
})
.catch(error => {
    console.log(error);
});