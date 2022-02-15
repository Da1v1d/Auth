import React, { Suspense } from 'react';
import dialogConfigs from './DialogConfigs';

const DialogsComponent = () => {

    return (
        dialogConfigs.map(dialog => (
            <div key = {dialog.id}>
                <Suspense 
                    fallback = {null}
                >
                    {dialog.component}
                </Suspense>
            </div>
        ))
    )
}

export default DialogsComponent;