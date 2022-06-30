import React from 'react';


type ItemsType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    /**
     * Comment v (ctrl q)
     */
    toggleAccordion: () => void
    items: Array<ItemsType>
    onItemClick: (value: any) => void
}

function Accordion(props: AccordionPropsType) {

    return (
        <>
            <AccordionTitle title={props.titleValue}
                            toggleAccordion={props.toggleAccordion}
            />
            { !props.collapsed && <AccordionBody items={props.items} onItemClick={props.onItemClick}/>}
        </>
    );
}



type AccordionBodyPropsType = {
    items: Array<ItemsType>
    onItemClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item, index) => {
                return <li key={index} onClick={() => { props.onItemClick(item.value)}}>{item.title}</li>
            })}
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