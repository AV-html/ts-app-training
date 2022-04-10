import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion"; // Accordion - может быть и другим названием
import {Rating} from "./components/Rating/Rating"; // Rating - только такое имя может быть


function App() {
    return (
        //16 38
        <div>
            <AppTitle/>
            <Rating value={2}/>

            <Accordion titleValue={"Headline Accordion"} collapsed={true}/>
            <Accordion titleValue={"Another Headline Accordion 2"} collapsed={false}/>
            <Rating value={5}/>
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
