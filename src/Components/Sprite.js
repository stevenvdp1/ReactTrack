import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    sprite: {
        width: '30vw',
        margin: '5px 2px'
    }
}
function Sprite(props) {
    return (
        <Link to={`/pokemon/${props.id}`}>
            <img style={styles.sprite} src={props.sprite} alt={props.id} />
        </Link>
    )
}

export default Sprite