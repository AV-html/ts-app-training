import React from "react";

export function Rating() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </div>
    );
}

function Star(props: any) {
    return props.selected ?  <b>STAR </b> : <>STAR </>;
}