import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Box as="section" bg="green" w="120px" h="150px">This is a box</Box>
    </div>
  )
}

export default App
