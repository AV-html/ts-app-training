import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';


function App() {
    return (
        //16 38
        <div>
            <AppTitle/>


            {/*<Accordion titleValue={"Headline Accordion"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Another Headline Accordion 2"} collapsed={true}/>*/}

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

            <OnOff/>
            <OnOff/>

            <UnControlledAccordion titleValue={"Headline Accordion"}/>
            <UnControlledAccordion titleValue={"Another Headline Accordion 2"}/>

            <UnControlledRating/>
            <UnControlledRating/>
            <UnControlledRating/>

            {/*<OnOff on={true}/>*/}
            {/*<OnOff on={false}/>*/}
        </div>
    );
}


function AppTitle() {
    return (
        <h2>
            This is App component
        </h2>
    )
}


export default App;
