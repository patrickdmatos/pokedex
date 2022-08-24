const pokemon_name = document.querySelector('.Pokemon_name');
const pokemon_num = document.querySelector('.Pokemon_number');
const pokemon_img = document.querySelector('.Pokemon_image');
const buscapokemon = document.getElementById('numero_pokemon');
const btnprev = document.getElementById('btn-prev');
const btnnext = document.getElementById('btn-next');
var achou = 1;
buscapokemon.value = achou; 

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
    console.log(data)
}
renderPokemon(achou)



