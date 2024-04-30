import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [data,setData]=useState({name:"Bob",age:20})
  useEffect(()=>{
const data = [{x:1}];
console.log (...data,{x:2})
}
)

  return (
    <div>
      test
    </div>
  )
}

export default App
