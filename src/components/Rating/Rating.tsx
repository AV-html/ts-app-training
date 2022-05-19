import React from 'react';


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
type RatingPropsType = {
    ratingValue: RatingValueType
    changeRating: (value: RatingValueType) => void
}

export function Rating(props: RatingPropsType) {
    // const starArray = [];
    // for (let i = 1; i <= 5; i++) {
    //     starArray.push(i <= props.value ? <Star selected={true}/> : <Star selected={false}/>);
    // }
    //
    // return (
    //     <div>
    //         {starArray}
    //     </div>
    // );

    return (
        <div>
            <Star selected={props.ratingValue > 0} changeRating={() => {props.changeRating(1)}}/>
            <Star selected={props.ratingValue > 1} changeRating={() => {props.changeRating(2)}}/>
            <Star selected={props.ratingValue > 2} changeRating={() => {props.changeRating(3)}}/>
            <Star selected={props.ratingValue > 3} changeRating={() => {props.changeRating(4)}}/>
            <Star selected={props.ratingValue > 4} changeRating={() => {props.changeRating(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    changeRating: () => void
}
function Star(props: StarPropsType) {
    const onClickHandler = () => {
        props.changeRating();
    }

    return <span onClick={onClickHandler}>{props.selected ? "★" : "☆"}</span>;
}