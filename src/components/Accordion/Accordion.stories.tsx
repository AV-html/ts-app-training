import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
}
const callback = action('accordion mode change event fired')

export const CollapsedMode = () => {
    return <Accordion titleValue={'menu'} collapsed={true} toggleAccordion={callback}/>
}
export const UnCollapsedMode = () => {
    return <Accordion titleValue={'menu'} collapsed={false} toggleAccordion={callback}/>
}
export const UsersMode = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const toggleAccordion = () => {
        setCollapsed(!collapsed)
    }
    return <Accordion titleValue={'Users'} collapsed={collapsed} toggleAccordion={toggleAccordion}/>
}


