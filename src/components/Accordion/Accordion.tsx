import React from "react";


// PropsType - если одна компонента
// ArticlePropsType - если в файле более одной компоненты
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        // <React.Fragment> === <>
        <>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody collapsed={props.collapsed}/>
        </>
    );
}


type AccordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {
    if (props.collapsed) {
        return null;
    } else {
        return (
            <ul>
                <li>Potato</li>
                <li>Carrot</li>
                <li>Cabbage</li>
            </ul>
        );
    }
}


type ArticleTitlePropsType = {
    title: string
}

function AccordionTitle(props: ArticleTitlePropsType) {
    return (
        <h2>
            === {props.title} ===
        </h2>
    );
}

export default Accordion;