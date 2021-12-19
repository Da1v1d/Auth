import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openPostDialog } from '../../store/posts/post-actions'
import BaseCard from '../reuzable-components/Card/BaseCard'
import PostDialog from './PostDialog'



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
            <Button
                sx={{mt:5,ml:5}}
                variant='contained'
                onClick={openPostDialogHandler}
            >
                create new Post
            </Button>
        </div>
        {data.length?<div style={{display:"flex", flexWrap:'wrap'}}>
            {renderPosts}
        </div>:
        <div style={{width:'100%',color:'white',padding:'30px 0 0 40px',fontSize:'60px'}}>
            NO POSTS
        </div>
        }

        <PostDialog />
        </>
    )
}


export default PostPage