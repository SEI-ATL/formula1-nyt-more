// Write code here

class MyCats {
    constructor(name, breed, color, personality) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.personality = personality;
    }
}

const stella = new MyCats('stella', 'tuxedo', 'black-white', 'mean');
const piper = new MyCats('piper', 'birman', 'cream', 'sweet');



class Movies {
    constructor(title, genre, rating) {
        this.title = title;
        this.genre = genre;
        this.rating = rating;
    }
}

const texasChainsawMassacre = new Movies('texasChainsawMassacre', 'horror', 'R');
const aceVentura = new Movies('aceVentura', 'comedy', 'PG-13');






// I HAVE NO IDEA WHAT IM SUPPOSED TO DO FOR THE SECOND PART OF THIS PROBLEM AND TA HOURS ARE ALREADY OVER IM SORRY!!!!
const idk = new Promise(function(resolve, reject) {
    if (name === stella) {
        resolve();
    } else {
        reject();
    }
})

console.log(idk);
