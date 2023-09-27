import React, { useContext } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Home from './routes/Home';
import RestaurantUpdate from './routes/RestaurantUpdate';
import RestaurantDetail from './routes/RestaurantDetail';
import { RestaurantContextProvider } from './context/RestaurantContext';
//import { RestaurantContextProvider } from './context/RestaurantsContext';
function App() {


  return(
      <div className='container'>
        <RestaurantContextProvider>
          <Router>
            <Routes>
              <Route path = "/" Component={Home}/>
              <Route path = "/:restaurantId/update" Component={RestaurantUpdate}/>
              <Route path = "/:restaurantId" Component={RestaurantDetail}/>
          </Routes>
          </Router>
        </RestaurantContextProvider>
      </div>
    
  )
}

export default App;
