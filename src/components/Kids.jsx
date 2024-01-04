import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../constants'

const Kids = () => {
  return (
       <div>
      <h1 className="text-center p-10">Kids</h1>
      <div className="grid grid-cols-4 space-x-20">
        {
            products.map((product) => {
                if(product.id<13 && product.id>8){
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

export default Kids
