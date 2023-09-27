import { createContext, ReactNode, useContext, useState } from "react";
import { RestaurantType, RestaurantContextType } from "../@types/types";
import { Dispatch } from "react";

const RestaurantContext = createContext<RestaurantContextType>({
    restaurants: [],
    setRestaurants: () => {},
});

export const useRestaurantContext = () => {
    return useContext(RestaurantContext);
}

export const RestaurantContextProvider = ({children}: {children: ReactNode}) => {

    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

    const contextValue: RestaurantContextType = {
        restaurants,
        setRestaurants
    }
    return(
        <RestaurantContext.Provider value={contextValue}>
            {children}
        </RestaurantContext.Provider>
    )

}