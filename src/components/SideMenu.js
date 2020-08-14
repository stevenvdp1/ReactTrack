import React from 'react'
import SideMenuItems from './SideMenuItems'

const styles = {
    menu: {
        position: 'fixed',
        backgroundColor: 'white',
        top: 0,
        left: 0,
        width: '75vw',
        height: '100vh',
        borderRight: 'rgba(1,1,1,0.3) solid 2px',

    },
    mask: {
        position: 'fixed',
        backgroundColor: 'grey',
        opacity: '0.6',
        top: 0,
        left: '75vw',
        width: '25vw',
        height: '100vh'
    }
}


function SideMenu(props) {
    return (
        <React.Fragment>
            <div style={styles.menu}>
                <SideMenuItems closeMenu={props.closeMenu} />
            </div>
            <div style={styles.mask} onClick={props.closeMenu} />
        </React.Fragment>
    )
}

export default SideMenu