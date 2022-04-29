// Layout
import Layout from './layout'
import NoLayout from './layout/no-layout'

// Pages
import Home from './pages/home'
import Paket from './pages/paket'
import Ryan from './pages/ryan'

const Routes = [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: Home,
  },
  {
    path: '/:packages/:template',
    layout: Layout,
    component: Paket,
  },
  {
    path: '/riantri-dan-ryan',
    layout: NoLayout,
    component: Ryan,
  },
]

export default Routes
