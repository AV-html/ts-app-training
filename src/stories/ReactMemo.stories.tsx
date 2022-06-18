import React, {useState} from 'react';


export default {
    title: 'React.memo demo'
}

const NewMessagesCounterSecret = (props: { count: number }) => {
    console.log('MESSAGE render');
    return <div>
        {props.count}
    </div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('USERS render');
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);
const NewMessagesCounter = React.memo(NewMessagesCounterSecret);


export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Pavel', 'Mask', 'Alex']);

    const addUser = () => {
        // users.push('Lucas ' + new Date().getTime())
        setUsers([...users, 'Lucas ' + new Date().getTime()])
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add User</button>

            <NewMessagesCounter count={counter}/>

            <Users users={users}/>
        </>
    )
}