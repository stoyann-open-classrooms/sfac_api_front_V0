import React from 'react'

function ProductCover({image, alt}) {
  return (
    <>
    
    <div className='main-cover'>
        <img className='cover-img' src={image} alt={alt} />
    </div>
    </>
  )
}

export default ProductCover