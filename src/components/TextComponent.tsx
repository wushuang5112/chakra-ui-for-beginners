import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Text } from '@chakra-ui/react'

function App() {
    return (
        <div className="App">
            <Text noOfLines={1}>
                "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created.
            </Text>

            {/* // Responsive version */}
            <Text noOfLines={[1, 2, 3]}>
                "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
                sentence that contains all of the letters of the English alphabet. Owing to
                its existence, Chakra was created.
            </Text>

            <Text as='b'>Bold</Text>
            <br />
            <Text as='i'>Italic</Text>
            <br />
            <Text as='u'>Underline</Text>
            <br />
            <Text as='abbr'>I18N</Text>
            <br />
            <Text as='cite'>Citation</Text>
            <br />
            <Text as='del'>Deleted</Text>
            <br />
            <Text as='em'>Emphasis</Text>
            <br />
            <Text as='ins'>Inserted</Text>
            <br />
            <Text as='kbd'>Ctrl + C</Text>
            <br />
            <Text as='mark'>Highlighted</Text>
            <br />
            <Text as='s'>Strikethrough</Text>
            <br />
            <Text as='samp'>Sample</Text>
            <br />
            <Text as='sub'>sub</Text>
            <br />
            <Text as='sup'>sup</Text>
        </div>
    )
}

export default App
