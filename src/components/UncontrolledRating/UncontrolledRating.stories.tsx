import React from 'react';
import {UncontrolledRating} from './UncontrolledRating';


export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating,
}

export const EmptyRating = () => {
    return <UncontrolledRating defaultValue={0}/>
}
export const RatingValue1 = () => {
    return <UncontrolledRating defaultValue={1}/>
}
export const RatingValue2 = () => {
    return <UncontrolledRating defaultValue={2}/>
}
export const RatingValue3 = () => {
    return <UncontrolledRating defaultValue={3}/>
}
export const RatingValue4 = () => {
    return <UncontrolledRating defaultValue={4}/>
}
export const RatingValue5 = () => {
    return <UncontrolledRating defaultValue={5}/>
}
