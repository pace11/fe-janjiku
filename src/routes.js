// Layout
import Layout from './layout'
import NoLayout from './layout/no-layout'

// Pages
import Home from './pages/home'
import CekStatus from './pages/cek-status'
import Template from './pages/template'
import Ryan from './pages/ryan'
import Fina from './pages/fina'
import NotFound from './pages/not-found'
import Katalog from './pages/katalog'

const Routes = [
  {
    path: '/',
    exact: true,
    layout: Layout,
    component: Home,
  },
  {
    path: '/cek-status',
    exact: true,
    layout: Layout,
    component: CekStatus,
  },
  {
    path: '/katalog',
    exact: true,
    layout: Layout,
    component: Katalog,
  },
  {
    path: '/:template/preview',
    layout: Layout,
    component: Template,
  },
  {
    path: '/riantri-dan-ryan',
    layout: NoLayout,
    component: Ryan,
  },
  {
    path: '/fina-dan-taufiq',
    layout: NoLayout,
    component: Fina,
  },
  {
    path: '/404',
    exact: true,
    layout: Layout,
    component: NotFound,
  },
]

export default Routes
