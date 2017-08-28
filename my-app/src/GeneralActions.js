import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS
} from './Page.js';

function requestPokemons() {
  return {
    type: REQUEST_POKEMONS
  }
}

function receivePokemons(json) {
  return {
    type: RECEIVE_POKEMONS,
    pokemons: json.results
  }
}

export function fetchPokemons() {
    return fetch("https://pokeapi.co/api/v2/pokemon/?limit=784")
      .then(response => response.json())
      .then(response2 => {
        var data = response2.results;
        this.setState = {
          arrayData: data
        };

        var arrayData = new Array();
        for (var i = 0; i < data.length; i++) {
          arrayData.push([data[i].name,data[i].url]);
        }
        console.log(data);
        console.log(arrayData);
      })
      

      
}