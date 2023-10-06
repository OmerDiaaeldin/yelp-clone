import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantType } from "../@types/types";
import { useRestaurantContext } from '../context/RestaurantContext';

const RestaurantsList = (props: any) => {

  const {restaurants, setRestaurants} = useRestaurantContext();
  const history = useNavigate();


  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = (await RestaurantFinder.get("/")).data;
        setRestaurants(response.restaurants)
      } catch (error) {
      }
    }

    fetchData();
  }, [])

  const handleDelete = async (restaurantId: any) => {
    try {
      await RestaurantFinder.delete(`/${restaurantId}`);
      setRestaurants(restaurants.filter((restaurant) => {
        return (restaurant.id !== restaurantId);
      }))
    } catch (error) {
      
    }
  }

  const handleUpdate = (id: any) => {
    history(`/restaurants/${id}/update`)
  }



  return (
      <table className='table'>
        <thead>
          <tr>
            <th scope='col' className="table-cell bg-blue-500 text-white w-48 py-4 text-sm">Restaurant</th>
            <th scope='col' className="table-cell bg-blue-500 text-white w-48 py-4 text-sm">Location</th>
            <th scope='col' className="table-cell bg-blue-500 text-white w-48 text-sm">Price range</th>
            <th scope="col" className="table-cell bg-blue-500 text-white w-48 text-sm">Ratings</th>
            <th scope='col' className="table-cell bg-blue-500 text-white w-48 text-sm">Edit</th>
            <th scope='col' className="table-cell bg-blue-500 text-white w-48 text-sm">Delete</th>
          </tr>
          </thead>
        <tbody>
          {restaurants && restaurants.map(restaurant => {
            return(
              <tr className='bg-black hover:bg-slate-800' key={restaurant.id as unknown as string}>
                <td className='table-cell text-white w-48 py-4 pl-20 text-sm'>{restaurant.name}</td>
                <td className='table-cell text-white w-48 py-4 pl-20 text-sm'>{restaurant.location}</td>
                <td className='table-cell text-white w-48 py-4 pl-20 text-sm'>{'$'.repeat(restaurant.price_range)}</td>
                <td className='table-cell text-white w-48 py-4 pl-20 text-sm'>Rating</td>
                <td className='table-cell text-white w-48 py-4 pl-20 text-sm'><button onClick={() => {handleUpdate(restaurant.id)}} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Update</button></td>
                <td className='table-cell text-white w-48 py-4 pl-16 text-sm'><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(restaurant.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
  )
}

export default RestaurantsList
