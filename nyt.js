const API_KEY = "mGeVe1buL5vhRO97Md0I5WhBHT9e62x4"

fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)
.then(response => response.json()).then((json) => {
    console.log(json)
})
