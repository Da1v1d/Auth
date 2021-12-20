import React, { useEffect , useState , Suspense , useCallback, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useUserData } from '../../customHooks/useUserData'
import '../../profile.css'
import { routeUrls } from '../../Routes/routeUrls'
import { getUserData, getUsers } from '../../store/user/user-actions'
// import { Button, Container, IconButton , Link , Box , Menu , MenuItem, Avatar, Paper, Tabs, Tab } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu'; 
import Navbar from '../Navbar/Navbar'
import { Redirect } from 'react-router-dom'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const PostPage = React.lazy(() => import('../PostPage/PostPage'))
const CustomMenuItemDialog = React.lazy(()=>import('../reuzable-components/Modal/CustomMenuItemDialog'))





const Home = () => {
    const dispatch= useDispatch()
    const userData= useUserData()
    const history = useHistory()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [tabValue, setTabValue] = useState(0)

    const handleChange = useCallback((event, newValue)=>{
        setTabValue(newValue);
    })


    const handleClickMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };  

    const handleClose = () => {
        setAnchorEl(null);
      };

    useEffect(() => {
            dispatch(getUserData())
    },[])

    

    const renderPageContent = (tabValue) => {
        switch (tabValue){
            case 0:
                return (
                    <>
                        <Redirect to={routeUrls.Home('posts')} />
                        <Suspense
                            fallback={null}
                        >
                            <PostPage />
                        </Suspense>
                    </>
                )
            case 1:
                return (
                    <>
                        <Redirect to={routeUrls.Home('news')} />
                        <div>
                            asdsd
                        </div>
                    </>
                )
            case 2:
                return (
                    <>
                        <Redirect to={routeUrls.Home('main')} />
                        <div>
                            asdsd
                        </div>
                    </>
                )
        }

    }
     return(
        <div style={{width:"100%",minHeight:'100vh', backgroundColor:'#161619'}}>
            {/* <div 
                style={{
                    display:'flex',
                    alignItems:'center'
                }}
            >
                <IconButton
                    color='inherit'
                    sx={{display:{md:'none',sm:'flex'}}}
                >
                    <MenuIcon
                        
                    />
                </IconButton>
            </div>
           <IconButton
                onClick={handleClickMenu}
           >
                <Avatar sx={{bgcolor:'#161619',color:'white'}}>
                </Avatar>
            </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <Suspense fallback={null}>
                        <CustomMenuItemDialog 
                            title='title' 
                            sx={{
                            	'& .MuiDialog-paper':{
                                    background:'#26262A',
                                    color:'white'
                                }
                            }}
                        />
                    </Suspense>
                    <MenuItem onClick={()=>{
                        handleClose()
                        localStorage.removeItem('accesToken')
                    }}>Logout</MenuItem>
                </Menu> */}
    <Navbar 
        value={tabValue} 
        onChange={handleChange} 
        menuOptions={['myprofile']}
        openMenu={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleClickMenu={handleClickMenu}
    />
        {renderPageContent(tabValue)}
    </div>
    )
}

export default  Home