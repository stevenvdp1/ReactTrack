import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from '../Components/PokemonCard';
import { useFetch } from '../Hooks/HttpRequests';

const styles = {
    container: {
        flexGrow: 1
    }
}

function Pokemon() {
    const { id } = useParams()
    const url = `http://localhost:1337/pokemon/${id}`

    let pokemon = useFetch(url)

    let content = null
    if (pokemon.loading) {
        content = <span>Loading...</span>
    }
    if (pokemon.error) {
        content = <span>Error</span>
    }
    if (pokemon.data) {
        content = <PokemonCard {...pokemon.data} />
    }

    return (
        <div style={styles.container}>
            {content}
        </div>
    )
}

export default Pokemon