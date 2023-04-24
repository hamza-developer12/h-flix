import React from 'react'
import './loading.css'
const loading = () => {
    return (
        <div className='w-[100%] h-[80vh] grid items-center justify-center mx-auto'>

            <div className='lds-hourglass '></div>
        </div>
    )
}

export default loading