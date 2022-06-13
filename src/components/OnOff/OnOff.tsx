import React from 'react';


type OnOffPropsType = {
    isOn: boolean
    toggleOn: (isOnn: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: '1px solid #000',
        display: "inline-block",
        padding: "5px",
        backgroundColor: props.isOn ? 'lightgreen' : 'white',
        cursor: "pointer"
    };
    const offStyle= {
        width: "30px",
        height: "20px",
        border: '1px solid #000',
        display: "inline-block",
        marginLeft: '2px',
        padding: "5px",
        backgroundColor: !props.isOn ? 'lightcoral' : 'white',
        cursor: "pointer"
    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid #000',
        display: "inline-block",
        marginLeft: '10px',
        backgroundColor: props.isOn ? 'lightgreen' : 'lightcoral'
    };

    const onClickHandler = (isOn: boolean) => {
        props.toggleOn(isOn)
    }


    return (
        <div>
            <div style={onStyle} onClick={ () => {onClickHandler(true)} }>On</div>
            <div style={offStyle} onClick={ () => {onClickHandler(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

