import './App.css'
// @ts-expect-error Card is a JavaScript component without a declaration file.
import Card from './components/Card'


function App() {

  let age = [20, 30, 40, 50, 60]
  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen gap-8 bg-gray-300'>
      <h1 className='bg-black p-4 rounded-2xl text-3xl text-center text-white'>Tailwind CSS</h1>

    <Card username= 'Abdul Ahad' />
    <Card age={age}/>
    
    </div>
    </>  
      
    
  )
}


export default App
