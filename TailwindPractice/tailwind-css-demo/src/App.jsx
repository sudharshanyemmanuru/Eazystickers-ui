
import './App.css'

function App() {
    return (
    <>
      <h1 className="text-3xl font-bold underline ">
          Hello world!
      </h1>
      <p className='text-lg underline font-bold text-amber-600 mt-5 hover:bg-amber-950'>Tailwind makes styling eazy!</p>
      <div className='bg-gray-400 text-black font-bold p-4 m-4 border-2 rounded-2xl'>Back ground color demo</div>
      <div className='grid grid-cols-3 gap-2 mt-4'>
        <div className='bg-amber-500 text-black font-bold p-4'>1</div>
        <div className='bg-blue-400 text-black font-bold p-4'>2</div>
        <div className='bg-gray-400 text-black font-bold p-4'>3</div>
        <div className='bg-gray-400 text-black font-bold p-4'>4</div>
        <div className='bg-gray-400 text-black font-bold p-4'>5</div>
        <div className='bg-gray-400 text-black font-bold p-4'>6</div>
      </div>
      <div className='flex bg-gray-400 justify-center items-center mt-4 p-4 flex-col gap-4'>
        <p>Text 1</p>
        <p>Text 2</p>
        <p>Text 3</p>
        <p>Text 4</p>
      </div>
    </>

  )
}

export default App

