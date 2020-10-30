const credentials = API_KEY;
console.log(credentials);

// Write code here
fetch(`https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=${credentials}`)
.then(response => response.json())
.then(data => console.log(data));