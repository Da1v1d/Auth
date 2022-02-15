import React from 'react';

const PostDialog = React.lazy(()=>import('./PostDialog/PostDialog'))

const dialogConfigs = [
    {
        id:1,
        component:<PostDialog />,
    }
]

export default dialogConfigs;