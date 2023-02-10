import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/layout/Home'
import Error from './components/layout/Error'
import MostrarClientes from './components/clientes/MostrarClientes'
import CrearCliente from './components/clientes/CrearCliente'
import EditarCliente from './components/clientes/EditarCliente'
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
  {
    path: '/crear',
    element: <CrearCliente />,
    errorElement: <Error />
  },
  {
    path: '/editar/:id',
    element: <EditarCliente />,
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
