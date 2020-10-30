// Write code here
// function myFetch(url) {
//     const myPromise = new Promise(function(resolve, reject) {
//         // grab the data from the web
//         const webData = somehowGetWebData()
//         // resolve via status codes!
//         if (webData.statusCode < 400) {
//             resolve()
//         } else if (400 >= webData.statusCode <= 599) {
//             reject()
//         }
//     })
//     return myPromise;
// }

// myFetch('some-url.com').then(...).catch(...) // invoking myFetch *returns* a promise

// const conditionalPromise = new Promise(function(resolve, reject){
//     if (5 < 10) {
//         resolve('this will flow into.then');
//     } else {
//         reject('this will flow into .catch');
//     }
// })