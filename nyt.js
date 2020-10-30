

// Write code here


async function newYorkTimes() {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)

    const json = await res.json();

    console.log(json)
}



fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${API_KEY}`)
.then((res) => res.json())
.then((json) => console.log(json))