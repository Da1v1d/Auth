import React from 'react'
import { AppBar , Box, Button } from '@mui/material'
import BaseTab from '../reuzable-components/Tabs/BaseTab'
import BaseMenu from '../reuzable-components/Menu/BaseMenu'
import { routeUrls } from '../../Routes/routeUrls'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { IconButton , Avatar } from '@mui/material'


const Navbar = ({
    value,
    onChange,
    handleClose,
    anchorEl,
    openMenu,
    menuOptions,
    handleClickMenu
}) => {
    const history=useHistory()

    const tabOptions = [
        {
        label:'Posts'
        },
        {
        label:'News'
        },
        {
        label:'Main'
        },
    ]


    return (
        <AppBar
            position='static'
            sx={{
                background:'#26262A',
            }} 
        >
            <Box
                sx={{
                    height:'100%',
                    px:5,
                    display:'flex',
                    justifyContent:'space-between',
                    width:'100%',
                    alignItems:'center'
                }}
            >
                <BaseTab 
                    value={value} 
                    onChange={onChange}
                    tabOptions={tabOptions} 
                />
                {/* <Button 
                    onClick={()=>{
                        history.push(routeUrls.Login)
                    }}
                    variant='contained'
                    sx={{height:'30px'}}
                >
                    logout
                </Button> */}
            <IconButton
                onClick={handleClickMenu}
           >
                <Avatar sx={{bgcolor:'#161619',color:'white'}}>
                </Avatar>
            </IconButton>

             <BaseMenu 
                menuOptions={menuOptions}
                openMenu={openMenu}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
            </Box>


            {/* <div>
            
            </div> */}

        </AppBar>
    )
}

export default React.memo(Navbar)