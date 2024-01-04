import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../constants'

const Womens = () => {
  return (
    <div>
      <h1 className='text-center py-10'>Womens</h1>
      <div className="grid grid-cols-4 space-x-20">
        {
            products.map((product) => {
                if(product.id<9 && product.id>4){
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

export default Womens
