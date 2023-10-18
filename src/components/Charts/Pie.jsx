import React from 'react'
import { BarChart } from '../../pages'

const Pie = () => {
  return (
    <div className='mt-28  p-10 flex flex-col justify-center items-center'>
      <h1 className='pb-8 text-3xl font-semibold'>System Graph</h1>
      <BarChart/>
    </div>
  )
}

export default Pie
