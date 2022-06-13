import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Components/OnOff',
    component: OnOff,
}
const callback = action('on or off clicked')

export const OnMode = () => {
    return <OnOff isOn={true} toggleOn={callback}/>
}
export const OffMode = () => {
    return <OnOff isOn={false} toggleOn={callback}/>
}
export const ModeChanging = () => {
    const [isOn, setIsOn] = useState<boolean>(false)
    return <OnOff isOn={isOn} toggleOn={setIsOn}/>
}

