"use client"
import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { CardData, Timer } from '@/types'
function CardSection({datas}:{datas:CardData[]}) {
  return (
    <div className='container m-auto p-16 lg:grid gap-8 lg:grid-cols-3 flex justify-center flex-wrap items-center pb-8'>
      {datas?.map((data,i)=>(
        <Cards data={data} key={i}/>
      ))}
    </div>
  )
}

export default CardSection