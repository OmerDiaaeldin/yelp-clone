import React from 'react'
import RestaurantsList from '../components/RestaurantsList'
import AddRestaurantForm from '../components/AddRestaurant'

function Home() {
  return (
    <div className='flex flex-col items-center h-screen'>
      <header className = "text-5xl mb-10 mt-4">Restaurant Rater</header>
      <AddRestaurantForm/>
      <RestaurantsList/>
    </div>
  )
}

export default Home