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


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered');

    useEffect(() => {
        console.log('Effect occurred');

        return () => {
            // Как только изменю counter перед срабатыванием callback в useEffect сработает cleanup callback
            // counter - имеет ещё старое значение
            console.log('RESET EFFECT', counter);

            // 1. Сбросить интервал
            // 2. Сделали запрос на сервер, ушли, значит запрос оборвать
            // 3. Прослушка на scroll, click и т.д.
            // 4. ws
        }
    }, [counter])

    const increase = () => setCounter(counter + 1)

    return <div>
        <span>
            Hello, counter: {counter}
        </span>
        <button onClick={increase}>
            Add
        </button>
    </div>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered with ' + text);

    // 1 вариант
    // useEffect(() => {
    //     const handler = (e: KeyboardEvent) => {
    //         console.log(e.key);
    //         setText((textState) => textState + e.key)
    //     }
    //     document.addEventListener('keypress', handler)
    //     return () => {
    //         document.removeEventListener('keypress', handler)
    //     }
    // }, [])


    // 2 вариант
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        document.addEventListener('keypress', handler)
        return () => {
            // сработает при каждом изменении text
            // componentWillUnmount
            document.removeEventListener('keypress', handler)
        }
    }, [text])


    return <>
        Typed text: {text}
    </>
}






