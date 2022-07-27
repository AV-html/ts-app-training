import React, {useEffect, useState} from 'react';



export const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {

        const intervalID = setInterval(() => {
            console.log('tick'); // После смерти компонента - утечка памяти

            setClock((clock) => new Date(clock.getTime() + 1000))
        }, 1000)

        return () => {
            console.log('cleanup');
            // Функция будет вызвана, когда компонента будет умирать
            clearInterval(intervalID)
        }
    }, [])

    // ..., [], [...deps], cleanup

    return (
        <>
            <div>Clock: {clock.toLocaleTimeString()}</div>
        </>
    )
};

















