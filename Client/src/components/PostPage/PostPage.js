import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openPostDialog } from '../../store/posts/post-actions'
import BaseButton from '../Buttons/BaseButton'
import BaseCard from '../Card/BaseCard'
import PostDialog from '../Dialog/PostDialog/PostDialog'



const PostPage = () => {
    const dispatch = useDispatch()
    const data=[]

    const renderPosts = data.map((post,index)=>{
        return (
            <BaseCard name={post.name} lastname={post.lastname} key={index} />
        )
    })

    const openPostDialogHandler = () => {
        dispatch(openPostDialog())
    }
    

    return (
        <>
        <div>
            <BaseButton
                buttonStyle={{
                    ml:5,
                    mr:5
                }}
                onClick={openPostDialogHandler}
                buttonTitle = 'create new post'
            />
        </div>
        {data.length?<div style={{display:"flex", flexWrap:'wrap'}}>
            {renderPosts}
        </div>:
        <div style={{width:'100%',color:'white',padding:'30px 0 0 40px',fontSize:'60px'}}>
            NO POSTS
        </div>
        }

        {/* <PostDialog /> */}
        </>
    )
}

export default PostPage