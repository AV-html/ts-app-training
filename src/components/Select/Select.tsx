import React, {useState} from 'react';


type ItemType = {
    title: string
    value: string
}

type PropsType = {
    value: string
    items: Array<ItemType>
    callback: (value: string) => void
}

export function Select(props: PropsType) {

    const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

    const onCollapsed = () => {
        setIsCollapsed(false)
    }
    const offCollapsed = () => {
        setIsCollapsed(true)
    }

    const currentSelect = props.items.find((item) => item.value === props.value)
    const selectTitle = currentSelect ? currentSelect.title : 'none';


    return (
        <div>
            <div onClick={onCollapsed}>{selectTitle}</div>

            {
                isCollapsed ?
                    null :
                    <ul>
                        {props.items.map((item) => {
                            const onClickHandler = () => {
                                props.callback(item.value)
                                offCollapsed()
                            }
                            return (
                                <li onClick={onClickHandler}>{item.title}</li>
                            )
                        })}
                    </ul>
            }
        </div>
    );
}