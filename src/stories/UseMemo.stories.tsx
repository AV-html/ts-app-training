import React, {useCallback, useMemo, useState} from 'react';


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







const BooksSecret = (props: {books: Array<string>, addBook: () => void}) => {
    console.log('books render');
    const books = props.books.map((book, i) => {
        return <div key={i}>
            {book}
        </div>
    })
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
            {books}
        </div>
    )
}
const Books = React.memo(BooksSecret)

// Решаем проблему useCallback с помощью useMemo
export const LikeUseCallback = () => {
    console.log('LikeUseCallback');

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'js', 'css', 'html']);

    // Получает всегда новый массив, значит ссылка меняется!
    // const newBooksArray = books.filter(u => u.toLowerCase().indexOf('a') > -1);
    // Исправляем:
    // const newBooksArray = useMemo(() => {
    //     return books.filter(u => u.toLowerCase().indexOf('a') > -1);
    // }, [books])


    // Теперь передаём функцию-коллбэк, т.к. она объект, её тоже нужно запомнить


    // const addBook = () => {
    //     setBooks([...books, 'Angular'])
    // }
    // const memoizedAddBook = useMemo(() => addBook, [books])

    const memoizedAddBook = useCallback(() => {
        setBooks([...books, 'Angular'])
    }, [books])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}

            {/* Будет вызываться только, если массив изменён books */}
            <Books books={books} addBook={memoizedAddBook}/>
        </>
    )
}






