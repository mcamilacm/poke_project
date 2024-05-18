import { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
    const [pokemones, setPokemones] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const getPokemones = async (limit = 20) => {
        const baseURL = "https://pokeapi.co/api/v2";
        const response = await fetch(`${baseURL}/pokemon?limit=${limit}`);
        const data = await response.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);
        setPokemones(results);
    };

    useEffect(() => {
        getPokemones();
    }, []);

    return (
        <PostContext.Provider value={{ pokemones, selectedPokemon, setSelectedPokemon }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;
