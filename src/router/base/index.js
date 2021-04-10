import Home from '@/views/Home/index'
import Login from '@/views/Login/index'
let base = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]
export default base;