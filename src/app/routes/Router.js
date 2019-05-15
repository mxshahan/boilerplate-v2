import { Dashboard, Login, Home, Register } from "../components";

// Authorized Routes
export const Private = [
  { path: '/dashboard', exact: true, component: Dashboard }
]

// Login or Sign in Routes
export const Auth = [
  { path: '/login', exact: true, component: Login },
  { path: '/register', exact: true, component: Register }
]

// Public Routes
export const Public = [
  { path: '/', exact: true, component: Home },
]
