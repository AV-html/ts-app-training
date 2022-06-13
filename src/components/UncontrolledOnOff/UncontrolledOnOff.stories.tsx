import React from 'react';
import {UncontrolledOnOff} from './UncontrolledOnOff';


export default {
    title: 'Components/UncontrolledOnOff',
    component: UncontrolledOnOff,
}

export const OnMode = () => {
    return <UncontrolledOnOff defaultValue={true}/>
}
export const OffMode = () => {
    return <UncontrolledOnOff defaultValue={false}/>
}

