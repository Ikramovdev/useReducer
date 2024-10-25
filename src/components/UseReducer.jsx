import { useReducer } from 'react'
import './App.css'
import { Button } from 'antd'


const initalState = {
  count:0,
}

function reducer (state,action){
  switch(action.type){
    case("DEC"):
      return {
        count: state.count + 10,
      }
    case("INC"):
      return{
        count: state.count - 20,
      }
  }
}

function useReducer() {
  const [count, dispatch] = useReducer(reducer,initalState)

  return (
    <>
    <div className='m-10 space-x-5'>
      <Button onClick={()=> dispatch({type:"INC"})} type='primary' className='mx-auto' >Kamaytrish</Button>
      <Button>{count.count}</Button>
      <Button onClick={()=> dispatch({type:"DEC"})} type='primary' className='mx-auto' >Qo'shish</Button>
    </div>
    </>
  )
}

export default useReducer
