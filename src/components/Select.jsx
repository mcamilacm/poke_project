import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

const Select = () => {
    const { pokemones, setSelectedPokemon } = useContext(PostContext);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const selectedName = event.target.value;
        const selectedPoke = pokemones.find(pokemon => pokemon.name === selectedName);
        setSelectedPokemon(selectedPoke);
        navigate(`/pokemon/${selectedName}`);
    };

    return (
        <div className="form_container">
            <h2>Find Your Pokemon!</h2>
            <select id="miSelector" onChange={handleChange}>
                <option value="">Select a Pokemon</option>
                {pokemones.map((pokemon) => (
                    <option key={pokemon.id} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
