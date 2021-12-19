import { Button } from '@mui/material'
import React from 'react'
import BaseCard from '../reuzable-components/Card/BaseCard'



const PostPage = () => {

    const data=[]

    const renderPosts = data?.map((post,index)=>{
        return (
            <BaseCard name={post.name} lastname={post.lastname} key={index} />
        )
    })

    return (
        <>
        <div>
            <Button
                sx={{mt:5,ml:5}}
                variant='contained'
            >
                create new Post
            </Button>
        </div>
        <div style={{display:"flex", flexWrap:'wrap'}}>
            {renderPosts}
        </div>
        </>
    )
}


export default PostPage