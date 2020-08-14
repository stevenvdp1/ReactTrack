import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SideMenu from './SideMenu'

function Navigation() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav>
            <span style={{ fontSize: 'large' }} onClick={() => setShowMenu(!showMenu)}>
                <FontAwesomeIcon icon={faBars} />
            </span>
            {showMenu && <SideMenu closeMenu={()=>setShowMenu(false)}/>}
        </nav>
    )
}

export default Navigation