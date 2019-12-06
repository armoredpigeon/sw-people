import React from 'react';
import { Person } from '../resources/person.class';
import { pageSize } from '../App.settings';
//import axios from 'axios';

let personList = [];
let planetList = [];
const basePeopleUrl = 'https://swapi.co/api/people/';
const basePlanetsUrl = 'https://swapi.co/api/planets/';
//possible todo: add a last pulled date so that we can check if the list is over N days old and re-pull it

export async function initializePeopleList(){
    await getPeopleData(basePeopleUrl);

    await getPlanetData(basePlanetsUrl);
}

async function getPeopleData(url){
    await fetch(url)
    .then(resp => resp.json())
    .then((data) =>{
        setPeopleList(data.results);
        if(data.next){
          getPeopleData(data.next);
        }
      })
}



const getPlanetData = async (url) => {
    await fetch(url)
    .then(resp => resp.json())
    .then((data) => {
        setPlanetList(data.results);
        if(data.next){
            getPlanetData(data.next);
        }
    })
}

function setPeopleList(people){
    for(let person of people){
        person.id = pullIdOutOfUrl(person.url);
        person.planetId = pullIdOutOfUrl(person.homeworld);
        person.ranking = !person.ranking ? 0 : person.ranking;
        person.isFavorite = !person.isFavorite ? false : person.isFavorite;
    }
    personList = personList.concat(people);
}

function setPlanetList(planets){
    let simplePlanetList = [];
    for(let planet of planets){
        let simplePlanet = {};
        simplePlanet.id = pullIdOutOfUrl(planet.url);
        simplePlanet.name = planet.name;
        simplePlanetList.push(simplePlanet);
    }
    planetList = planetList.concat(simplePlanetList);
}

function pullIdOutOfUrl(url){
    let splitUrl = url.split('/').filter((item) => item.length > 0);
    return parseInt(splitUrl[splitUrl.length - 1]);
}

function getPlanetNameById(planetId){
    return planetList.filter((planet) => planet.id === planetId)[0].name;
}

export function getPeople(pageNumber = 0){
    if(personList.length === 0){
        return [];
    }
    
    let startIndex = pageNumber * pageSize;
    let endIndex = (startIndex + pageSize) > personList.length ? personList.length : (startIndex + pageSize);

    let personChunk = personList.slice(startIndex, endIndex);
    personChunk = personChunk.map((person) => {
        person.planetName = (!person.planetName) ? getPlanetNameById(person.planetId) : person.planetName
    });

    return personChunk;
}

export const getFavoritesList = async() => {
    //todo: this will return the list of people who have isFavorite === true, sorted by ranking
    //await getPeopleFromSwapi();
    
    return personList.filter((item) => item.isFavorite).sort((item1, item2) => item1.ranking - item2.ranking);
}

export const markAsFavorite = async(personId) => {
    //todo: make this find the person from the list with the matching id, and update that person's isFavorite to true
    //await getPeopleFromSwapi();

    personList.map((person) => {
        if(person.id === personId){
            person.setFavorite();
        }
    })
}

export const unFavorite = async(personId) => {
    //todo: make this find the person from the list with the matching id, and update that person's isFavorite to false
    //todo: this will also set the ranking back to zero.
    //await getPeopleFromSwapi();

    personList.map((person) => {
        if(person.id === personId){
            person.setUnFavorite();
            person.setRanking(0);
        }
    })
}

export const setRanking = async(personId, ranking) => {
    //todo: this will find the favorites list sorted by ranking, find the person by id in that list, and set its ranking, adjusting all after that
    //await getPeopleFromSwapi();
    let updatingRankings = false;
    let favoriteList = getFavoritesList();
    for(let index in favoriteList){
        let favorite = favoriteList[index];
        if(favorite.id === personId){
            favorite.ranking = ranking;
            updatingRankings = true;
        }
        if(updatingRankings){
            favorite.ranking = favoriteList[index - 1].ranking + 1;
        }
    }
}
