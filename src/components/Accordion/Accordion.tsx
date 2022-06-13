import React from 'react';


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Comment v (ctrl q)
     */
    toggleAccordion: () => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <>
            <AccordionTitle title={props.titleValue} toggleAccordion={props.toggleAccordion}/>
            { !props.collapsed && <AccordionBody/>}
        </>
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
    toggleAccordion: () => void
}

function AccordionTitle(props: ArticleTitlePropsType) {
    return (
        <h2 onClick={props.toggleAccordion}>
            === {props.title} ===
        </h2>
    );
}

export default Accordion;