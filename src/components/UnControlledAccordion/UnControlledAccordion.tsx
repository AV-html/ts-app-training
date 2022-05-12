import React, {useState} from 'react';


type UnControlledAccordionPropsType = {
    titleValue: string
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={ () => {setCollapsed(!collapsed)}}>TOGGLE</button>
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
}

function AccordionTitle(props: ArticleTitlePropsType) {
    return (
        <h2>
            *** {props.title} ***
        </h2>
    );
}
