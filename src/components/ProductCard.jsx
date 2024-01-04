import React from 'react'

const ProductCard = (product) => {
  return (
    <div className="text-2xl w-72 p-10 shadow-3xl rounded-3xl">
      <img className="h-80" src={product.imgURL}/>
      <p className="font-semibold text-center pt-5">{product.name}</p>
    </div>
  )
}

export default ProductCard
