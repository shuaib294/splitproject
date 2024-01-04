import React from 'react'
import { products } from '../constants'
import ProductCard from './ProductCard'

const Mens = () => {
  return (
    <div className="w-full">
      <h1 className="text-center p-10">Mens</h1>
      <div className="w-full grid grid-cols-4 space-x-20">
        {
            products.map((product) => {
                if(product.id < 5){
                    return (
                        <ProductCard key={product.name} product={product} {...product} />
                    )
                    }else{
                        return null;
                }
            })
        }
      </div>
    </div>
  )
}

export default Mens
