import Login from '~/page/Login'
import Home from '~/page/Home'
import ResetPassword from '~/page/ResetPassword'
import ForgotPassword from '~/page/ForgotPassword'
import Department from '~/page/Department'
import Employee from '~/page/Employee'
import FileIn from '~/page/FileIn'
import FileOut from '~/page/FileOut'


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login, layout: null},
    { path: '/resetPassword', component: ResetPassword, layout: null},
    { path: '/forgotPassword', component: ForgotPassword, layout: null},
    { path: '/department', component: Department},
    { path: '/employee', component: Employee},
    { path: '/filein', component: FileIn},
    { path: '/fileout', component: FileOut}
]

const privateRoutes = [
    
]

export { publicRoutes, privateRoutes }