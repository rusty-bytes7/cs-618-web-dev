import { useState } from 'react'
import rusty from './assets/rusty.png'
import rusty2 from '/Users/ericawolf/vscode/hello-codespaces/src/assets/IMG_2791.JPG'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src={rusty2} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={rusty} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Rusty is so cute!</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          You have pet Rusty {count} times!
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
