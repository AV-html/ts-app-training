import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AnalogClock} from './AnalogClock';


export default {
    title: 'Components/AnalogClock',
    component: AnalogClock,
} as ComponentMeta<typeof AnalogClock>


const Template: ComponentStory<typeof AnalogClock> = (args) => <AnalogClock {...args} />;

export const ClockExample  = Template.bind({});
ClockExample.args = {
    mode: 'digital'
};

