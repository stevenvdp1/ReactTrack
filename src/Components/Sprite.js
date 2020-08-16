import React from 'react';

const styles = {
    sprite: {
        width: '30vw',
        margin: '5px 2px'
    }
}
function Sprite(props) {
    return (
        <img style={styles.sprite} src={props.sprite} alt={props.id} />
    )
}

export default Sprite