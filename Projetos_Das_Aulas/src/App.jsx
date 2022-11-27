// IMPORT PROJETOS
import { Aula_03 } from './aulas/Aula_03'
import { Aula_04 } from './aulas/Aula_04'
import { Aula_06 } from './aulas/Aula_06'
import { Aula_07_Mesa } from './aulas/Aula_07_Mesa'
import { Aula_08_Mesa } from './aulas/Aula_08_Mesa'
import { Aula_13_Mesa } from './aulas/Aula_13_Mesa'
import { Aula_16 } from './aulas/Aula_16'
import { DecimaQuartaAula } from './aulas/DecimaQuartaAula'
import { DecimaQuintaAula } from './aulas/DecimaQuintaAula'

// IMPORT REACT ROUTER
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './pages/MainLayout'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: 'Aula_03',
          element: <Aula_03 />
        },
        {
          path: 'Aula_04',
          element: <Aula_04 />
        },
        {
          path: 'Aula_06',
          element: <Aula_06 />
        },
        {
          path: 'Aula_07_Mesa',
          element: <Aula_07_Mesa />
        },
        {
          path: 'Aula_08_Mesa',
          element: <Aula_08_Mesa />
        },
        {
          path: 'Aula_13_Mesa',
          element: <Aula_13_Mesa />
        },
        {
          path: 'decima-quarta-aula',
          element: <DecimaQuartaAula />
        },
        {
          path: 'decima-quinta-aula',
          element: <DecimaQuintaAula />
        },
        {
          path: 'Aula_16',
          element: <Aula_16 />
        }
      ]
    }
  ])

  return <RouterProvider router={appRouter} />
}

export default App
