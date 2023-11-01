import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext';
import Stars from '../components/Stars';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

function RestaurantDetail() {

  const { restaurantId } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const response = await RestaurantFinder.get(`/${restaurantId}`);
      console.log(response)
      setSelectedRestaurant(response.data.restaurant);
      setReviews(response.data.reviews);
    }

    fetch();
  },[])

  return (
    <div>
      {selectedRestaurant &&(
        <>
          <h1 className="text-center text-7xl">{selectedRestaurant.name}</h1>
          <Stars rating={4.2}></Stars>
          <Reviews reviews = {reviews}/>
        </>
      )}
      <AddReview/>
    </div>
  )
}

export default RestaurantDetail
