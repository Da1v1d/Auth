import React, { useEffect, useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import '../../profile.css'
import { getUserData, getUsers } from '../../store/user/user-actions'
import Navbar from '../../components/Navbar/Navbar'
import { renderPageContent } from './utils'
import { useRedux } from '../../customHooks/useRedux'
import './Home.css';
const CustomMenuItemDialog = React.lazy(()=>import('../../components/Dialog/CustomMenuItemDialog'))


const Home = () => {
    const dispatch= useDispatch()
    const userData = useRedux('userReducer');
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
            dispatch(getUserData())
            console.log(userData);
    },[])

    return (
        <div 
            className='home'
        >
        
            <Navbar 
                setTabValue={setTabValue} 
                tabValue={tabValue} 
            />

            <div className='home__content'> 
                {userData.data.userName}
            </div>

            {renderPageContent(tabValue)}

        </div>
    )
}

export default  Home


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