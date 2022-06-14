import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>
const callback = action('accordion mode change event fired')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;


export const UsersMode = Template.bind({});
UsersMode.args = {
    collapsed: true,
    titleValue: 'menu',
    toggleAccordion: callback,
    items: [{title: 'apple', value: 1}, {title: 'carrot', value: 2}, {title: 'potato', value: 3}],
    onItemClick: action('some item was clicked')
};

export const CollapsedMode = () => {
    return <Accordion titleValue={'menu'}
                      collapsed={true}
                      toggleAccordion={callback}
                      items={[{title: 'apple', value: 1}, {title: 'carrot', value: 2}, {title: 'potato', value: 3}]}
                      onItemClick={action('some item was clicked')}
    />
}
// export const CollapsedMode = Template.bind({});
// CollapsedMode.args = {
//     collapsed: true,
//     titleValue: 'menu',
//     toggleAccordion: callback
// };

export const UnCollapsedMode = () => {
    return <Accordion titleValue={'menu'}
                      collapsed={false}
                      toggleAccordion={callback}
                      items={[{title: 'apple', value: 1}, {title: 'carrot', value: 2}, {title: 'potato', value: 3}]}
                      onItemClick={action('some item was clicked')}
    />
}
// export const UnCollapsedMode = Template.bind({});
// UnCollapsedMode.args = {
//     collapsed: false,
//     titleValue: 'menu',
//     toggleAccordion: callback
// };


export const Demonstration: ComponentStory<typeof Accordion> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const toggleAccordion = () => {
        setCollapsed(!collapsed)
    }
    return <Accordion {...args} collapsed={collapsed} toggleAccordion={toggleAccordion}/>
}
Demonstration.args = {
    collapsed: true,
    titleValue: 'menu',
    toggleAccordion: callback,
    items: [{title: 'apple', value: 1}, {title: 'carrot', value: 2}, {title: 'potato', value: 3}],
    onItemClick: action('some item was clicked')
}



