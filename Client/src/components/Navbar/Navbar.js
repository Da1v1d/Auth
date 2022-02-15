import React, {useState, useCallback} from 'react'
import { AppBar , Box } from '@mui/material'
import BaseTab from '../Tabs/BaseTab'
import BaseMenu from '../Menu/BaseMenu'
import { IconButton , Avatar } from '@mui/material'


const Navbar = ({
    tabValue,
    setTabValue,
    menuOptions,
}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleChange = useCallback((event, newValue)=>{
        setTabValue(newValue);
    })

    const handleClickMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };  

    const handleClose = () => {
        setAnchorEl(null);
      };

    const tabOptions = [
        {label:'Posts'},
        {label:'News'},
        {label:'Main'},
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
                    value={tabValue} 
                    onChange={handleChange}
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
            <IconButton onClick={handleClickMenu}>
                <Avatar sx={{bgcolor:'#161619', color:'white'}} />
            </IconButton>

             <BaseMenu 
                menuOptions={menuOptions}
                openMenu={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
            />
            </Box>
        </AppBar>
    )
}

export default React.memo(Navbar)