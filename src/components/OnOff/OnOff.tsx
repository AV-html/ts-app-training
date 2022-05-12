import React from 'react';

type OnOffPropsType = {
    on: boolean
}


export function OnOff(props: OnOffPropsType) {
    const onStyle= {
        width: "30px",
        height: "20px",
        border: '1px solid #000',
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.on ? 'lightgreen' : 'white'
    };
    const offStyle= {
        width: "30px",
        height: "20px",
        border: '1px solid #000',
        display: "inline-block",
        marginLeft: '2px',
        padding: "5px",
        backgroundColor: !props.on ? 'lightcoral' : 'white'

    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid #000',
        display: "inline-block",
        marginLeft: '10px',
        backgroundColor: props.on ? 'lightgreen' : 'lightcoral'
    };

    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

