import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion"; // Accordion - может быть и другим названием
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff'; // Rating - только такое имя может быть


function App() {
    return (
        //16 38
        <div>
            <AppTitle/>


            <Accordion titleValue={"Headline Accordion"} collapsed={true}/>
            <Accordion titleValue={"Another Headline Accordion 2"} collapsed={true}/>

            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

            <OnOff on={false}/>
            <OnOff on={true}/>
            <OnOff on={false}/>
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
