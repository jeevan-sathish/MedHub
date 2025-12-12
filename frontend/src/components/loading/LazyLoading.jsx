import React from 'react'
import {ThreeDots} from 'react-loader-spinner'

const LazyLoading = () => {
  return (
    <div className='w-full h-screen flex gap-1.5 justify-center items-center bg-blue-200'>
    <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
    />
<h1>page is getting cooked wait for it</h1>
    </div>
  )
}

export default LazyLoading