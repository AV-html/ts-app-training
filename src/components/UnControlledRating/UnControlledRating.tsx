import React, {useState} from 'react';


type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;



export function UnControlledRating() {
    const [value, setValue] = useState<RatingValueType>(0);


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

    return <span onClick={onClickHandler}>{props.selected ? <b>STAR </b> : "STAR "}</span>;
}