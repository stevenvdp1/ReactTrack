import React, { useEffect, useState } from 'react'
import Sprite from '../Components/Sprite'

const styles={
    container:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
}

function Home() {
    const url = 'http://localhost:1337/pokemon'

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
    },[url])

    let content = null
    if (pokemon.loading) {
        content = <span>Loading...</span>
    }
    if (pokemon.error) {
        content =<span>Error</span>
    }
    if (pokemon.data) {
        content = pokemon.data.map(p => <Sprite key={p.id} {...p}/>)
    }

    return(
        <div style={styles.container}>
            {content}
        </div>
    )
}

export default Home