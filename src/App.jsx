import React from 'react'
import UsersItem from './components/UsersItem'
import {useFetch} from './hook/UseFetch'

const App = () => {
    const {users} = useFetch("/users")
  return (
        <div className='p-10 flex flex-wrap justify-between'>
            {users ? users.map(item => <UsersItem key={item.id} item={item}/>):""}
        </div>
    )
}

export default App