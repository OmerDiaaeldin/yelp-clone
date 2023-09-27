import React from 'react'
//add state to the form

function AddRestaurantForm() {
  return (
  <div>
	<form className="w-full max-w-lg flex justify-evenly space-x-16 mb-10">
		<input type="text" name="name" placeholder='name' className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2'/>
		<input type="text" name="location" placeholder='location' className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2'/>
		<select name="price range" placeholder='price range' className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2 w-64 bg-white'>
			<option value="1">$</option>
			<option value="2">$$</option>
			<option value="3">$$$</option>
			<option value="4">$$$$</option>
			<option value="5">$$$$$</option>
		</select>
		<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 border border-blue-700 rounded'>Add</button>
	</form>
  </div>
  )
}

export default AddRestaurantForm
