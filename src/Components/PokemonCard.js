import React from 'react';
import Pokemon from '../Views/Pokemon';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    image: {
        alignSelf: 'center',
        height: '150px'
    },
    id:{
        fontSize:'large',
        fontWeight:'bold',
        margin:'0px 15px'
    },
    name:{
        fontSize:'x-large',
        fontWeight:'bold',
        margin:'10px 15px'
    },
    info:{
        margin:'10px 15px'
    }
}

function PokemonCard(props) {

    return (
        <div style={styles.container}>
            <img style={styles.image} src={props.sprite} alt={props.id} />
            <span style={styles.id}>#{props.id}</span>
            <span style={styles.name}>{props.name.toUpperCase()}</span>
            <span style={styles.info}>{props.info}</span>
        </div>
    )
}

export default PokemonCard