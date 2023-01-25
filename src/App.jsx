import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/layout/Home'
import Error from './components/layout/Error'
import MostrarClientes from './components/clientes/MostrarClientes'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/clientes',
    element: <MostrarClientes />,
    errorElement: <Error />
  },
])

function App() {
  return (
    <section className="App">
      <RouterProvider router={router} />
    </section>
  )
}

export default App
