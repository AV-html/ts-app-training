import React from 'react';
import './App.css';
import Article from "./components/Article/Article"; // Article - может быть и другим названием
import {Rating} from "./components/Rating/Rating"; // Rating - только такое имя может быть


function App() {
    return (
        <div>
            <AppTitle/>
            <Rating value={2}/>

            <Article title={"Headline Article"}/>
            <Rating value={4}/>
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
