import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function ReviewCard() {
  return (
    <div className="max-w-sm rounded-lg shadow-xl p-4">
        <p className="flex my-2 gap-2 text-primary-red text-base"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></p>
        <p className='text-dark-gray my-2 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi, eos animi architecto placeat enim.</p>
        <div className='flex items-center my-2 gap-2'>
            <img className='w-12 h-12 rounded-full' src="https://images.unsplash.com/photo-1611258266547-1afeb6a56c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
            <div>
                <h3 className='text-lg font-bold'>Ahmad Raza</h3>
                <p className='text-base'>CEO/ Creative IT</p>
            </div>
        </div>
    </div>
  )
}
