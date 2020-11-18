class Racer{
    constructor(name,country,rank){
        this.name = name
        this.country = country
        this.rank = rank
    }
}


new Promise((resolve,reject)=>{
    console.log('initial');
    async function nyt(){
        let res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=computers&api-key=${API_KEY}`)
        let data = await res.json()
        data.response.docs.forEach(item=>{
            console.log(item.abstract);
        })
        

    }
    nyt()
    resolve()
})


