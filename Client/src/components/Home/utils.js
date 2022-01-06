import { Redirect } from 'react-router-dom'
import PostDialog from '../Dialog/PostDialog/PostDialog'
import { routeUrls } from '../../Routes/routeUrls'
import React, { Suspense } from 'react'
const PostPage = React.lazy(() => import('../PostPage/PostPage'))



export  const renderPageContent = (tabValue) => {
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
                        exo
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