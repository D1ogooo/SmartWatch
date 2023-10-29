import { createBrowserRouter } from "react-router-dom";

import HomePage from './Home'
import Comentario from './SecondApp'

export const routes = createBrowserRouter([
  {
   path: '/',
   element: <HomePage />
  },
  {
   path: '/comentario',
   element: <Comentario />
  }
])
