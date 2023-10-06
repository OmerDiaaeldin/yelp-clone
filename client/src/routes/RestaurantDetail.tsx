import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext';

function RestaurantDetail() {

  const { restaurantId } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetch = async () => {
      const response = await RestaurantFinder.get(`/${restaurantId}`);
      setSelectedRestaurant(response.data.restaurant)
    }

    fetch();
  },[])
  return (
    <div>
      {selectedRestaurant.name}
    </div>
  )
}

export default RestaurantDetail
