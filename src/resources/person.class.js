export class Person {
    constructor(name, 
        birth_year,
        url,
        homeWorld,
        planetName = "ook",
        isFavorite = false,
        ranking = 0){
            this.characterName = name;
            this.characterBirthday = birth_year;
            let splitUrl = url.split('/').filter((item) => item.length > 0);
            this.id = parseInt(splitUrl[splitUrl.length - 1]);
            this.homeWorld = homeWorld;
            this.planetName = planetName;
            this.isFavorite = isFavorite;
            this.ranking = ranking;
        }
    setPlanetName(planetName){
        this.planetName = planetName;
    }
    setFavorite() {
        this.isFavorite = true;
    }
    setUnFavorite() {
        this.isFavorite = false;
        this.ranking = 0;
    }
    setRanking(newRanking){
        this.ranking = newRanking;
    }
}