import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-xl shadow-2xl rounded-2xl p-6 bg-gray-950 text-orange-400 border border-orange-500">
        <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">🔐 Password Generator</h1>
        
        <div className="flex shadow-inner rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-4 text-lg bg-gray-900 text-white placeholder-gray-500"
            placeholder="Your secure password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 transition duration-300"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-white">
          <div className="flex items-center gap-3">
            <label htmlFor="lengthSlider" className="text-orange-300 font-medium">Length: <span className="font-bold">{length}</span></label>
            <input
              id="lengthSlider"
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer accent-orange-500"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="numberInput">Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-orange-500"
            />
            <label htmlFor="characterInput">Include Symbols</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
