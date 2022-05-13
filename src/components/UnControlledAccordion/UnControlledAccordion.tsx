import React, {useState} from 'react';


type UnControlledAccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true);

    const collapsedToggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} collapsedToggle={collapsedToggle} />
            { !collapsed && <AccordionBody/>}
        </div>
    );
}


function AccordionBody() {

    return (
        <ul>
            <li>Potato</li>
            <li>Carrot</li>
            <li>Cabbage</li>
        </ul>
    );

}


type ArticleTitlePropsType = {
    title: string
    collapsedToggle: () => void
}

function AccordionTitle(props: ArticleTitlePropsType) {

    const onClickHandler = () => {
        props.collapsedToggle();
    }

    return (
        <h2 onClick={onClickHandler}>
            *** {props.title} ***
        </h2>
    );
}
