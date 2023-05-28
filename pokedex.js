const pokemonContainer = document.querySelector(".pokemon-container")

let offset = 1;
let limit = 8;

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res => res.json()))
    .then((data) => {
      createPokemon(data);

    });
  }
function fetchPokemons (offset, limit) {
  for (let i = offset; i <= offset + limit; i++) {
  fetchPokemon(i);
   
  }
}
function createPokemon(pokemon) {

  
  const card = document.createElement('div')
  card.classList.add('pokemon-block');

  const SpriteContainer = document.createElement('div')
  SpriteContainer.classList.add('img-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default

  SpriteContainer.appendChild(sprite);

  const number = document.createElement('p');
  number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

  const name = document.createElement('p');
  name.classList.add('name');
  name.textContent = pokemon.name;

  card.appendChild(SpriteContainer);
  card.appendChild(number);
  card.appendChild(name);

  pokemonContainer.appendChild(card);
}



fetchPokemons(offset, limit); 

var nuevoContenedor = document.createElement('div');
document.body.appendChild(nuevoContenedor);

var botonAnterior = document.createElement('button');
botonAnterior.innerText = 'Anterior';
botonAnterior.addEventListener('click', () => {
  if (offset != 1){
  offset -= 9
  fetchPokemons (offset, limit);
  }
});

var botonSiguiente = document.createElement('button');
botonSiguiente.innerText = 'Siguiente';
botonSiguiente.addEventListener('click', () => {
  offset += 9
  fetchPokemons (offset, limit);

});

nuevoContenedor.appendChild(botonAnterior);
nuevoContenedor.appendChild(botonSiguiente);
