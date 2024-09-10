import { useEffect, useState } from "react"
import Main from "../../components/Main"
import Card from "./components/Card"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function Pokemon() {
    const [pokemon, setPokemon] = useState<any | null>(null)

    const { id } = useParams();

    useEffect(() => {
        fetchPokemon();
    }, []);

    async function fetchPokemon() {
        const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
        const poke = res.data;
        console.log(res.data);
        setPokemon(poke);
    }

    return (
        <>
            <Main>
                <Card name={pokemon?.name} image={pokemon?.sprites.front_default} types={pokemon?.types} imageShiny={pokemon?.sprites.front_shiny}/>
            </Main>
        </>
    )
}