import React, {useState} from 'react';
import styles from './Select.module.css'


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


    const changeCollapse = () => {
        setIsCollapsed(!isCollapsed)
    }


    const currentSelect = props.items.find((item) => item.value === props.value)
    const selectTitle = currentSelect ? currentSelect.title : 'none';


    return (
        <div className={styles.select}>

            <div className={styles['wrap-title']}>
                <input className={styles.title}
                       onClick={changeCollapse}
                       value={selectTitle}
                       readOnly={true}
                />
            </div>


            {
                !isCollapsed && (
                    <ul className={styles.list}>
                        {props.items.map((item) => {
                            const onClickHandler = () => {
                                props.callback(item.value)
                                changeCollapse()
                            }
                            return (
                                <li key={item.value}
                                    onClick={onClickHandler}
                                    className={item === currentSelect ? styles.selected : ''}
                                >
                                    {item.title}
                                </li>
                            )
                        })}
                    </ul>
                )
            }
        </div>
    );
}