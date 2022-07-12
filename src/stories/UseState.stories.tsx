import React, {useState} from 'react';


export default {
    title: 'useState demo'
}



function generateData() {
    // difficult counting
    console.log('generate data');
    return 200;
}

export const ExampleUseState1 = () => {
    console.log('ExampleUseState1');

    // 1 вариант
    // const initValue = useMemo(generateData, [])
    const [counter, setCounter] = useState(generateData); // 2 вариант

    const changer = (counter: number) => counter + 1


    return (
        <>

            <button onClick={ () => setCounter(changer)}>+</button>
            {counter}
        </>
    )
}






