import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('goldenrod')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

    <div className="fixed flex flex-wrap justify-center bottom-15 inset-x-0 px-2">
      <div className='flex flex-wrap rounded-3xl justify-center
      gap-3 shadow-lg bg-white px-3 py-2'>

        <button
        onClick={() => setColor("red")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "red" }}
        >Red</button>
        
        <button
        onClick={() => setColor("black")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "black" }}
        >Black</button>
        
        <button
        onClick={() => setColor("olive")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "olive" }}
        >Olive</button>
        
        <button
        onClick={() => setColor("green")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "green" }}
        >Green</button>
        
        <button
        onClick={() => setColor("silver")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "silver" }}
        >Silver</button>
        
        <button
        onClick={() => setColor("gray")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "gray" }}
        >Gray</button>

        <button
        onClick={() => setColor("pink")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "pink" }}
        >Pink</button>

        <button
        onClick={() => setColor("blue")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "blue" }}
        >Blue</button>

        <button
        onClick={() => setColor("goldenrod")}
        className='outline-none px-4 py-1 
        rounded-full text-white shadow-lg hover:scale-105 duration-200  '
        style={{ backgroundColor: "goldenrod" }}
        >Golden</button>
 
      </div>
    </div>


    </div>
  )
}

export default App
