import React from 'react'
import Stars from './Stars'

function Reviews(props: any) {
  const reviews: any = props.reviews;
  return (
    
    <div className='grid grid-cols-3'>
      {reviews.map((review: any) => {
      <div className="block max-w-sm p-6 bg-blue-400 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{review.name}</h5>
        <Stars rating={review.name}/>
        <p className="font-normal text-gray-700 dark:text-gray-400">{review.Review}</p>
      </div>
    })}
        
    </div>
  )
}

export default Reviews
