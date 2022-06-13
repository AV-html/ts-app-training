import React, {ChangeEvent, useState} from 'react';

export default {
    title: 'Test/input',
    // component: Accordion,
}


export const ControlledInput = () => {

    const [value, setValue] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <input type="text"
                  value={value}
                  onChange={onChangeHandler}
    />
}

export const ControlledCheckbox = () => {

    const [isChecked, setIsChecked] = useState<boolean>(true);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }

    return <input type="checkbox"
                  checked={isChecked}
                  onChange={onChangeHandler}
    />
}

export const ControlledSelect = () => {

    const [value, setValue] = useState<string | undefined>('2');

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <select value={value} onChange={onChangeHandler}>
            <option>none</option>
            <option value="1">Minsk</option>
            <option value="2">Moscow</option>
            <option value="3">Kiev</option>
        </select>
    )
}