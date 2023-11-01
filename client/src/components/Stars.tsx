import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import {faStarHalfAlt} from '@fortawesome/free-regular-svg-icons'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'

interface Rating{
    rating: number
}

function Stars({rating}: Rating) {
    const stars: any[] = [];
    for (let i = 1; i <= 5; i++) {
        if(i <= rating){
            stars.push(<FontAwesomeIcon icon={fullStar} style={{color: 'yellow'}}/>)
        }else if(!Number.isInteger(rating) && i === Math.ceil(rating)){
            stars.push(<FontAwesomeIcon icon = {faStarHalfAlt} style={{color: 'yellow'}}/>)
        }else{
            stars.push(<FontAwesomeIcon icon={emptyStar} style={{color: 'yellow'}}/>)
        }
    }

    return (
    <>
    {stars}
    </>
  )
}

export default Stars
