import React from 'react'
import {Menu , MenuItem,} from '@mui/material'


const BaseMenu = ({
    menuOptions,
    openMenu,
    anchorEl,
    handleClose
}) => {


    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
        >
            
            {menuOptions?.map((menu , index ) =>(
                <MenuItem 
                    key={index} 
                >
                    {menu}
                </MenuItem>
                
            ))}
            <MenuItem onClick={()=> localStorage.clear()}>
                Logout
            </MenuItem>
        </Menu>
    )
}

export default BaseMenu
