import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    title: {
        padding:'10px',
        fontSize:'large'
    },
    item: {
        borderBottom: 'solid black 1px',
        textDecoration: 'none',
        color: 'black',
        padding:'10px 0px',
        marginLeft: '25px'
    }
}

function SideMenuItems(props) {
    return (
        <div style={styles.container}>
            <span style={styles.title}>The Menu</span>
            <Link to='/' onClick={props.closeMenu} style={styles.item}>Home</Link>
            <Link to='/about' onClick={props.closeMenu} style={styles.item}>About</Link>
        </div>
    )
}

export default SideMenuItems