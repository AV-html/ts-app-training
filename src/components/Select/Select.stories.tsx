import React, {useState} from 'react';
// import {action} from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Select} from './Select';

export default {
    title: 'Components/Select',
    component: Select,
} as ComponentMeta<typeof Select>


// const callback = action('Select mode change event fired')
// const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;
//
// export const UsersMode = Template.bind({});
// UsersMode.args = {
//     value: '1',
//     items: [{title: 'apple', value: '1'}, {title: 'carrot', value: '2'}, {title: 'potato', value: '3'}],
//     callback: callback
// };

export const CollapsedMode = () => {
    const [value, setValue] = useState<string>('1');
    const changeValue = (value: string) => {
        setValue(value);
    }

    return <Select value={value}
                   items={[{title: 'apple', value: '1'}, {title: 'carrot', value: '2'}, {title: 'potato', value: '3'}]}
                   callback={changeValue}
    />
}




