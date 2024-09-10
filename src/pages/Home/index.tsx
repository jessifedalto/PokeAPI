import axios from "axios";
import Card from "../../components/Card";
import Main from "../../components/Main";
import { useEffect, useState } from "react";

interface Pokemon {
    id: number;
    name: string;
    image: string;
}

export default function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    async function fetchPokemons() {
        try {
            const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1');
            const pokemonList = res.data.results;
            
            const detailedPokemons = await Promise.all(
                pokemonList.map(async (pokemon: { name: string; url: string }) => {
                    const details = await axios.get(pokemon.url);
                    return {
                        id: details.data.id,
                        name: details.data.name,
                        image: details.data.sprites.front_default,
                    };
                })
            );
            setPokemons(detailedPokemons);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <>
            <Main>
                {
                    pokemons.map(pokemon => (
                        <Card key={pokemon.id} text={pokemon.name} image={pokemon.image}/>
                    ))
                }
            </Main>
        </>
    )
}