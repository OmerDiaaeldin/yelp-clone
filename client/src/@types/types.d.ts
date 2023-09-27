import { Dispatch } from "react";

export interface RestaurantType{
    id: BigInt,
    name: string,
    location: string,
    price_range: number
}


export interface RestaurantContextType{
    restaurants: RestaurantType[],
    setRestaurants: Dispatch;
}