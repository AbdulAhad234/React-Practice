import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeCharacters, setIncludeCharacters] = useState(false)
  const [password, setPassword] = useState('')

const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {

    let password = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (includeNumbers) {
      str += '0123456789'
    }

    if (includeCharacters) {
      str += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      password += str.charAt(char)
    }

    setPassword(password)

  }, [length, includeNumbers, includeCharacters, setPassword])

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
    [password])

  useEffect(() => {
    generatePassword()
  }, [length, includeNumbers, includeCharacters, generatePassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md
      rounded-lg p-2 my-8 text-white bg-gray-800">
        
        <h1 className="text-white text-center my-3">Password Generator</h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          
          <input
            type="text"
            value={password}
            readOnly
            className="outline-none w-full px-3 py-1 bg-gray-300 text-black"
            placeholder="Password"
            ref={passwordRef}
          />
          
          <button
          onClick={copyToClipboard}
          className='outline-none bg-gray-100 text-black hover:bg-gray-200
          px-3 py-0.5 shrink-0'>Copy</button>

        </div>

        <div className="flex text-sm gap-x-4">
          <div className='flex items-center gap-x-3'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer accent-gray-100'
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-3'>
          <input
          type="checkbox"
          defaultChecked={includeNumbers}
          id='numbers'
          onChange={() => {
            setIncludeNumbers((prev) => !prev)
          }}
          />
          <label htmlFor='numbers'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-3'>
          <input
          type="checkbox"
          defaultChecked={includeCharacters}
          id='characters'
          onChange={() => {
            setIncludeCharacters((prev) => !prev)
          }}
          />
          <label htmlFor='characters'>Special Characters</label>
        </div>

        </div>
      </div>
    </>
  )
}

export default App
