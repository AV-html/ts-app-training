import React, {useState} from 'react';
import {RatingValueType} from '../Rating/Rating';

type PropsType = {
    defaultValue: RatingValueType
}

export function UncontrolledRating(props: PropsType) {
    const [value, setValue] = useState<RatingValueType>(props.defaultValue);


    const changeRating = (newValue: RatingValueType) => {
        setValue(newValue)
    }

    return (
        <div>
            <Star selected={value > 0} changeRating={() => {changeRating(1)}}/>
            <Star selected={value > 1} changeRating={() => {changeRating(2)}}/>
            <Star selected={value > 2} changeRating={() => {changeRating(3)}}/>
            <Star selected={value > 3} changeRating={() => {changeRating(4)}}/>
            <Star selected={value > 4} changeRating={() => {changeRating(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeRating: () => void;
}

function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.changeRating();
    }

    return <span onClick={onClickHandler}>{props.selected ? "★" : "☆"}</span>;
}