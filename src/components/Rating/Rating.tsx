import React from "react";


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarPropsType = {
    selected: boolean
}

export function Rating(props: RatingPropsType) {
    const starArray = [];
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
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

function Star(props: StarPropsType) {
    return props.selected ? <b>STAR </b> : <>STAR </>;
}