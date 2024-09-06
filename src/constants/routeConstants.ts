import { lazy } from 'react'
import { Routes } from '../@types/route'

export const PROTECTEDROUTES: Routes = [
  {
    key: 'profil',
    name: 'Profil',
    path: '/profil',
    element: lazy(() => import('../pages/Profil/Profil')),
  },
]

export const ADMINROUTES: Routes = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    element: lazy(() => import('../pages/Dashboard/Dashboard')),
  },
  {
    key: 'users',
    name: 'Users',
    path: '/users',
    element: lazy(() => import('../pages/Users/Users')),
  },
]

export const PUBLICROUTES: Routes = [
  {
    key: 'home',
    name: 'Home',
    path: '/',
    element: lazy(() => import('../pages/Home/Home')),
  },
  {
    key: 'about',
    name: 'About',
    path: '/about',
    element: lazy(() => import('../pages/About/About')),
  },
]

export const AUTHROUTES: Routes = [
  {
    key: 'login',
    name: 'Login',
    path: '/login',
    element: lazy(() => import('../pages/Login/Login')),
  },
  {
    key: 'register',
    name: 'Register',
    path: '/register',
    element: lazy(() => import('../pages/Register/Register')),
  },
  {
    key: 'forgot-password',
    name: 'Forgot Password',
    path: '/forgot-password',
    element: lazy(() => import('../pages/ForgotPassword/ForgotPassword')),
  },
]