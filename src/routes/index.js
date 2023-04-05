import Login from '~/page/Login'
import Home from '~/page/Home'
import ResetPassword from '~/page/ResetPassword'
import ForgotPassword from '~/page/ForgotPassword'


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/resetPassword', component: ResetPassword},
    { path: '/forgotPassword', component: ForgotPassword}
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }