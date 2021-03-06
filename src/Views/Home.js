import React from 'react'
import Sprite from '../Components/Sprite'
import { useFetch } from '../Hooks/HttpRequests'

const styles={
    container:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between'
    }
}

function Home() {
    const url = 'http://localhost:1337/pokemon'

    let pokemon = useFetch(url)

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