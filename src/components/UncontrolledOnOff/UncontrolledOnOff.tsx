import React, {useState} from 'react';


type UncontrolledOnOffPropsType = {
    setIsOn: (isOn: boolean) => void
}
export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    // let on = false;
    const [on, setOn] = useState<boolean>(false);

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'lightgreen' : 'white'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '5px',
        backgroundColor: !on ? 'lightcoral' : 'white'

    };
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid #000',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'lightgreen' : 'lightcoral'
    };

    const onClicked = () => {
        setOn(true)
        props.setIsOn(true)
    }
    const offClicked = () => {
        setOn(false)
        props.setIsOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

