import React, { useState } from 'react'

function AddReview() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("Rating");

  return (
    <div className='flex justify-center mt-20'>
      
    <form className="w-full max-w-lg grid grid-cols-2 grid-rows-4 gap-10 mb-10">
      <input type="text" value={name} onChange={
        (e) => setName(e.target.value)
      } placeholder='name' className='px-4 py-2 rounded-lg border-blue-600 border-solid border-2 col-start-1 col-span-1 row-start-1 row-span-1'/>
      <select placeholder='rating' value={rating} onChange={
        (e) => setRating(e.target.value)
      } className='px-4 py-2 rounded-lg border-blue-600 border-solid border-2 w-64 bg-white col-start-2 col-span-1 row-start-1 row-span-1'>
        <option disabled>rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select> 
      <input type="text" value={review} onChange = {
        (e) => setReview(e.target.value)
      } placeholder='Review' className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2 col-start-1 col-span-2 row-start-2 row-span-2'/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 border border-blue-700 rounded col-span-1'>Add</button>
    </form>
  </div>
  )
}

export default AddReview
