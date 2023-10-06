import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';

export default function UpdateRestaurant(props: any) {

    const {restaurantId} = useParams();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price_range, setPriceRange] = useState(1);
    const nav = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            const response = (await RestaurantFinder.get(`/${restaurantId}`)).data.restaurant;
            setName(response.name);
            setLocation(response.location);
            setPriceRange(response.price_range);
        }

        fetch();
    },[]);

    const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await RestaurantFinder.put(`/${restaurantId}`, {
            name,
            location,
            price_range
        })

        nav('/');
    }


  return (
    <div>
      <form>
        <div className='flex flex-col gap-4'>
            <label htmlFor="name">Name</label>
            <input id='name' value={name} type="text" onChange={(e) => {
                setName(e.target.value)
            }} className='px-96 py-4 m-2 text-center rounded-lg border-blue-600 border-solid border-2'/>
        </div>

        <div className='flex flex-col gap-4 mt-6'>
            <label htmlFor="location">Location</label>
            <input id='location' value={location} type="text" onChange={(e) => {
                setLocation(e.target.value)
            }} className='px-96 py-4 m-2 text-center rounded-lg border-blue-600 border-solid border-2'/>
        </div>

        <div className='flex flex-col gap-4 mt-6'>
            <label htmlFor="price range">price range</label>
            <select onChange={(e) => {
                const price = parseInt(e.target.value);
                setPriceRange(price);
            }} value={price_range} className='px-4 py-2 m-2 rounded-lg border-blue-600 border-solid border-2 w-64 bg-white'>
                <option disabled>price range</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select>
        </div>

		<button type='submit' onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-5 border border-blue-700 rounded-xl mt-16'>Update</button>
      </form>
    </div>
  )
}
