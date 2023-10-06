import { createContext, ReactNode, useContext, useState } from "react";
import { RestaurantType, RestaurantContextType } from "../@types/types";

export const RestaurantContext = createContext<RestaurantContextType>({
    restaurants: [],
    setRestaurants: () => {},
    selectedRestaurant: {
        id: BigInt(1),
        name: 'placeholder',
        location: 'placeholder',
        price_range: 1
    },
    setSelectedRestaurant: () => {}
});

export const useRestaurantContext = () => {
    return useContext(RestaurantContext);
}

export const RestaurantContextProvider = ({children}: {children: ReactNode}) => {

    const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState<any>({
        id: BigInt(1),
        name: 'placeholder',
        location: 'placeholder',
        price_range: 1
    });

    const contextValue: any = {
        restaurants,
        setRestaurants,
        selectedRestaurant,
        setSelectedRestaurant
    }
    return(
        <RestaurantContext.Provider value={contextValue}>
            {children}
        </RestaurantContext.Provider>
    )

}