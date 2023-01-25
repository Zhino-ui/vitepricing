import { useState } from 'react'
import { Box ,Stack, VStack,HStack} from "@chakra-ui/react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <HStack spacing="24px" >

        <Box as='section' bg="green" w="120px" h="150px"> This is  a Box</Box>
        <Box as='section' bg="red" w="150px" h="250px"> This is  a Box</Box>
        <Box as='section' bg="pink" w="100px" h="50px"> This is  a Box</Box>
        <Box as='section' bg="yellow" w="160px" h="100px"> This is  a Box</Box>
        </HStack>
      
    </div>
  )
}

export default App
