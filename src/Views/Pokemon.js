import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../Components/PokemonCard';

const styles = {
    container: {
        flexGrow:1
    }
}

function Pokemon() {
    const { id } = useParams()
    const url = `http://localhost:1337/pokemon/${id}`

    const [pokemon, setPokemon] = useState({ loading: false, data: null, error: false })
    useEffect(() => {
        setPokemon({ ...pokemon, loading: true })
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokemon({
                    loading: false,
                    data: data,
                    error: false
                })
            })
            .catch(error => {
                setPokemon({
                    ...pokemon,
                    loading: false,
                    error: true
                })
            })
    }, [url])

    let content = null
    if (pokemon.loading) {
        content = <span>Loading...</span>
    }
    if (pokemon.error) {
        content = <span>Error</span>
    }
    if (pokemon.data) {
        content = <PokemonCard {...pokemon.data}/>
    }

    return (
        <div style={styles.container}>
            {content}
        </div>
    )
}

export default Pokemon