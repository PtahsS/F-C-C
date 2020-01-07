import React from 'react'
import Product from './components/Product'
import Products from './components/Products'
export default function App(){
  const productComponent = Products.map(item=><Product key={item.id} name={item.name} price={item.price} description={item.description}/>)
  return(
      <div>
        {productComponent}
      </div>
    )
}