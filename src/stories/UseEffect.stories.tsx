import React, {useEffect, useState} from 'react';


export default {
    title: 'useEffect demo'
}


export const SimpleExample = () => {
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

            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <div>Counter {counter}</div>
            <div>Fake {fake}</div>
        </>
    )
}

export const SetTimoutExample = () => {
    console.log('ExampleUseState1');


    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {
        // setTimeout(() => {
        //     // В компоненте вызовется много раз
        //     document.title = counter.toString()
        // }, 2000)

        setInterval(() => {
            // counter замкнут
            // console.log('tick' + counter);
            // setCounter(counter + 1)
            setCounter((state) => state + 1)
        }, 1000)
    }, [])


    return (
        <>

            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            <div>Counter {counter}</div>
            <div>Fake {fake}</div>
        </>
    )
}

export const Clock = () => {
    console.log('ExampleUseState1');

    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setClock((clock) => new Date(clock.getTime() + 1000))
        }, 1000)
    }, [])


    return (
        <>
            <div>Clock: {clock.toLocaleTimeString()}</div>
        </>
    )
}






