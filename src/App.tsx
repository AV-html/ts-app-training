import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const changeRating = (value: RatingValueType) => {
        setRatingValue(value)
    }

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const toggleAccordion = () => {
        setAccordionCollapsed(!accordionCollapsed)
    }

    const [isOn, setIsOn] = useState<boolean>(false);
    const toggleOn = (isOn: boolean) => {
        setIsOn(isOn)
    }

    return (
        <div>
            <Accordion titleValue={"Headline Accordion"}
                       collapsed={accordionCollapsed}
                       toggleAccordion={toggleAccordion}


                       items={[{title: 'apple', value: 1}, {title: 'carrot', value: 2}, {title: 'potato', value: 3}]}
                       onItemClick={ (i) => {
                           console.log(i)}}
            />


            {/*<Accordion titleValue={"Another Headline Accordion 2"} collapsed={true}/>*/}
            <Rating ratingValue={ratingValue} changeRating={changeRating}/>
            <OnOff isOn={isOn} toggleOn={toggleOn}/>



            {/*<UncontrolledAccordion titleValue={"Headline Accordion"}/>*/}
            {/*<UncontrolledAccordion titleValue={"Another Headline Accordion 2"}/>*/}


            <UncontrolledRating defaultValue={ratingValue}/>


            {/*<UncontrolledOnOff defaultValue={true}/>*/}
            {/*<UncontrolledOnOff on={false}/>*/}
        </div>
    );
}



export default App;
