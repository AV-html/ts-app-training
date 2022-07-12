import React, {useEffect, useState} from 'react';


export default {
    title: 'useEffect demo'
}



export const ExampleUseEffect = () => {
    console.log('ExampleUseState1');


    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        // Попадём сюда только после return jsx
        // Сейчас попадём сюда при каждой перерисовке
        console.log('useEffect');
        document.title = `${counter}`

        // sideEffect:
        // запрос на сервер
        // setInterval
        // indexedDB (Локальная БД)
        // document. ..

        // [] - сработает ровно 1 раз после первого render
        // ... - сработает при изменении любого state после каждого render
        // [counter] - сработает каждый раз, когда counter изменился и произошёл render
    }, [counter])


    return (
        <>

            <button onClick={ () => setCounter(counter + 1)}>counter+</button>
            <button onClick={ () => setFake(fake + 1)}>fake+</button>
            <div>Counter {counter}</div>
            <div>Fake {fake}</div>
        </>
    )
}






