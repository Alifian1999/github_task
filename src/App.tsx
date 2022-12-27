import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-white">
      <h1 className='text-red-900'>Hello World</h1>
    </div>
  )
}

export default App
