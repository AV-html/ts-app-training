import React, {useState} from 'react';




export function OnOff() {

    // let on = false;
    const [on, setOn] = useState<boolean>(false);

    const onStyle= {
        width: "30px",
        height: "20px",
        border: '1px solid #000',
        display: "inline-block",
        padding: "5px",
        backgroundColor: on ? 'lightgreen' : 'white'
    };
    const offStyle= {
        width: "30px",
        height: "20px",
        border: '1px solid #000',
        display: "inline-block",
        marginLeft: '2px',
        padding: "5px",
        backgroundColor: !on ? 'lightcoral' : 'white'

    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid #000',
        display: "inline-block",
        marginLeft: '10px',
        backgroundColor: on ? 'lightgreen' : 'lightcoral'
    };

    return (
        <div>
            <div style={onStyle} onClick={ () => {setOn(true)} }>On</div>
            <div style={offStyle} onClick={ () => {setOn(false)} }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

