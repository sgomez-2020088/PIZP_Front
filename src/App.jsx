import { useRoutes } from 'react-router'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { routes } from './routes'

function App() {

  const elements = useRoutes(routes)

  return (
    <>
      {elements}
      <Toaster position='bottom-center' reverseOrder={false}/>
    </>
  )
}

export default App
