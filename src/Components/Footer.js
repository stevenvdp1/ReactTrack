import React from 'react'

const styles = {
    container:{
        borderTop:'solid black 1px',
        minHeight:'50px',
        backgroundColor:'lightGrey',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{}
}

function Footer(){
    return(
        <footer style={styles.container}>
            <span style={styles.text}>&copy; StevenVdP</span>
        </footer>
    )
}

export default Footer