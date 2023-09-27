import React, { useState } from 'react'
import { RestaurantType } from '../@types/types';
import { useRestaurantContext } from '../context/RestaurantContext';
import RestaurantFinder from '../apis/RestaurantFinder';


function AddRestaurantForm() {
	const { restaurants, setRestaurants } = useRestaurantContext();
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("price range");

	const handleSubmit = async (e: React.MouseEvent) => {
		e.preventDefault();
		try {
			if(priceRange === "price range"){
				alert("enter a value for the price range");
			}else{
				const res = await RestaurantFinder.post("/", {
					name,
					location,
					price_range: parseInt(priceRange)
				})


				setRestaurants([...restaurants, res.data.data])
			}
		} catch (error) {
		}
	}

  return (
  <div>
	<form className="w-full max-w-lg flex justify-evenly space-x-16 mb-10">
		<input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='name' className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2'/>
		<input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder='location' className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2'/>
		<select value={priceRange} onChange={e => setPriceRange(e.target.value)} placeholder='price range' className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2 w-64 bg-white'>
			<option disabled>price range</option>
			<option value="1">$</option>
			<option value="2">$$</option>
			<option value="3">$$$</option>
			<option value="4">$$$$</option>
			<option value="5">$$$$$</option>
		</select>
		<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 border border-blue-700 rounded' onClick={handleSubmit}>Add</button>
	</form>
  </div>
  )
}

export default AddRestaurantForm
