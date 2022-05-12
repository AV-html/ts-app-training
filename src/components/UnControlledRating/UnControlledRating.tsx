import React, {useState} from 'react';


type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;



export function UnControlledRating() {
    const [value, setValue] = useState<RatingValueType>(1);

    const onClickHandler = (newValue: RatingValueType) => {
        setValue(newValue)
    }

    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => {onClickHandler(1)}}>1</button>
            <Star selected={value > 1}/><button onClick={() => {onClickHandler(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={() => {onClickHandler(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={() => {onClickHandler(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={() => {onClickHandler(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}
function Star(props: StarPropsType) {
    return props.selected ? <b>STAR </b> : <>STAR </>;
}