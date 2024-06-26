import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const CardSelected = () => {
    const { selectedPokemon } = useContext(PostContext);

    if (!selectedPokemon) {
        return <div className="select_pokemon">Select a Pokemon to see details</div>;
    }

    return (
        <div className="card">

            <div className="pokemon_img">
            <h2>{selectedPokemon.name}</h2>
            <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
            </div>
            <div className="pokemon_info">
            <p>Height: {selectedPokemon.height}</p>



            <p>Weight: {selectedPokemon.weight}</p>
            <p>Base Experience: {selectedPokemon.base_experience}</p>
            <p>Abilities: {selectedPokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
            </div>
        </div>
    );
};

export default CardSelected;
