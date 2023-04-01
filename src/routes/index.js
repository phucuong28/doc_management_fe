import Login from '~/page/Login'
import Home from '~/page/Home'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login}
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }