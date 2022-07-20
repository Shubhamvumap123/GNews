import { useState } from 'react'
import News from "./Components/News"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div><News/></div>
  )
}

export default App
