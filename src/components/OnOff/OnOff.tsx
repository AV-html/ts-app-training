import React from 'react';
import o from './OnOff.module.css';

type OnOffPropsType = {
    checked: boolean
}

export function OnOff(props: OnOffPropsType) {

    // HW props ->> true (green) / false (red)

    return (
        <div className={o.block}>
            <div className={`${o.on} ${props.checked && o.active}`}>On</div>
            <div className={`${o.off} ${!props.checked && o.active}`}>Off</div>
        </div>
    );
}

