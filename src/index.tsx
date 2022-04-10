import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// test ts code:
const obj = {
    name: "Pavel",
    age: 30,
    address: {
        city: "Moscow",
        country: "Russia"
    }
}

const users = [
    {
        name: "Pavel",
        age: 30,
        address: {
            city: "Moscow",
            country: "Russia"
        }
    },
    {
        name: "Maks",
        age: 21,
        address: {
            city: "Moscow",
            country: "Russia"
        }
    },
    {
        name: "Oleg",
        age: 15,
        address: {
            city: "Moscow",
            country: "Russia"
        }
    }

];


let isAdmin = true;
let isMonster: boolean = true; // boolean - избыточная информация

// Массив чисел или строк
let numbers: Array<number | string>;
numbers = [10, 6, 7, 3, 2, "text", "str"];


// Props типизировать нужно


console.log(obj.address.city);
console.log(users[0].address.country);
console.log(numbers);



