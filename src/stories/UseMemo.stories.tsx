import React, {useMemo, useState} from 'react';


export default {
    title: 'useMemo demo'
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0);
    const [b, setB] = useState<number>(0);


    const resultA = useMemo(() => {
        // Если число [a] не поменялось, то коллбэк перезапускать не нужно
        let resultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 1000000) {
                fake++;
                const fakeRand = Math.random()
            }
            resultA *= i
        }
        return resultA
    }, [a])

    const resultB = useMemo(() => {
        let resultB = 1
        for (let i = 1; i <= b; i++) {
            resultB *= i
        }
        return resultB
    }, [b])


    return (
        <>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for a: {resultB}
            </div>

        </>
    )
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS render');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret);

export const ExampleHelpsReactMemo = () => {
    console.log('EXAMPLE render');


    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Pavel', 'Mask', 'Alex', 'Nick', 'Bob']);


    // Получает всегда новый массив, значит ссылка меняется!
    // const filter = users.filter(u => u.includes('a'));

    // Исправляем:
    const filter = useMemo(() => {
        return users.filter(u => u.includes('a'));
    }, [users])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}

            {/* Будет вызываться только, если массив изменён users */}
            <Users users={filter}/>
        </>
    )
}

