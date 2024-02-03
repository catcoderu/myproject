import Hero from '@/components/Hero'
import NewProducts from '@/components/NewProducts/Index'
import SpicealService from '@/components/SpicealService/index'
import BestSelling from '@/components/BestSelling/Index'
import Delivery from '@/components/Delivery/Index'
import React from 'react'
import Items from '@/components/Items/Index'

const page = () => {
  return (
<>
<Hero/>
<h2>-New Products-</h2> 
   <NewProducts/>
   <SpicealService/>
   <h2>-Ən çox satılan məhsul-</h2>
   <BestSelling/>
   <NewProducts/>
   <Delivery/>
   <h2>-Ən çox satılan məhsul-</h2>
   <BestSelling/>
   <Items/>
</>
  )
}

export default page
