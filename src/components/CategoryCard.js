import React from 'react'

export default function CategoryCard(props) {
  return (
    <div className='rounded-lg w-[300px] shadow-lg hover:shadow-xl pb-2 cursor-pointer'>
        <img className='rounded-t-lg w-full aspect-video object-cover object-top' src={props.image} alt={props.title} />
        <h2 className='text-xl font-bold text-center my-2'>{props.title}</h2>
    </div>
  )
}
