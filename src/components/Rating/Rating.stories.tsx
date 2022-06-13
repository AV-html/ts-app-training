import React, {useState} from 'react';
import {Rating, RatingValueType} from './Rating';

export default {
    title: 'Components/Rating',
    component: Rating,
}

export const EmptyRating = () => {
    return <Rating ratingValue={0} changeRating={() => {}}/>
}
export const RatingValue1 = () => {
    return <Rating ratingValue={1} changeRating={() => {}}/>
}
export const RatingValue2 = () => {
    return <Rating ratingValue={2} changeRating={() => {}}/>
}
export const RatingValue3 = () => {
    return <Rating ratingValue={3} changeRating={() => {}}/>
}
export const RatingValue4 = () => {
    return <Rating ratingValue={4} changeRating={() => {}}/>
}
export const RatingValue5 = () => {
    return <Rating ratingValue={5} changeRating={() => {}}/>
}
export const ControlledRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating ratingValue={rating} changeRating={setRating}/>
}