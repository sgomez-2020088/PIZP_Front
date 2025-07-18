import { useRoutes } from 'react-router'
import { Toaster } from 'react-hot-toast'
import { routes } from './routes'
import './App.css'

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
