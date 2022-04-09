import React from "react";

export function Rating(props: any) {
    const starProps = [];
    for (let i = 1; i <= 5; i++) {
        starProps.push(i <= props.value ? <Star selected={true}/> : <Star selected={false}/>);
    }
    return (
        <div>
            {starProps}
        </div>
    );
}

function Star(props: any) {
    return props.selected ? <b>STAR </b> : <>STAR </>;
}