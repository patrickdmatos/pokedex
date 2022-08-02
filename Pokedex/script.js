const pokemon_name = document.querySelector('.Pokemon_name');
const pokemon_num = document.querySelector('.Pokemon_number');
const pokemon_img = document.querySelector('.Pokemon_image');

const fetchPokemon = async (pokemon) => {

    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    const data = await APIresponse.json();

    return data;
}

const renderPokemon = async (pokemon) => {

    const data = await fetchPokemon(pokemon);

    pokemon_name.innerHTML = data.name;
    pokemon_num.innerHTML = data.id;
    pokemon_img.src = data['sprites']['versions']['generation-v']['black-white']['animated']
    ['front_default'];
}

renderPokemon('143')