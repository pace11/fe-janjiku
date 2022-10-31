// Layout
import Layout from './layout'
import NoLayout from './layout/no-layout'

// Pages
import Home from './pages/home'
import CekStatus from './pages/cek-status'
import Pakcage1 from './pages/package/package-1'
import Pakcage2 from './pages/package/package-2'
import Template from './pages/template'
import Ryan from './pages/ryan'
import Fina from './pages/fina'
import NotFound from './pages/not-found'

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
    path: '/paket-1',
    exact: true,
    layout: Layout,
    component: Pakcage1,
  },
  {
    path: '/paket-2',
    exact: true,
    layout: Layout,
    component: Pakcage2,
  },
  {
    path: '/:packages/:template/preview',
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
