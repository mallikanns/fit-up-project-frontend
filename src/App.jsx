import Dashboardpages from "./Pages/Dashboardpages"
import Login from "./viewpage/Login"
import { AuthProvider } from "./components/auth/AuthContext"
import { Route, Routes } from "react-router"
import ProtectedRoute from "./components/auth/ProtectedRoute"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboardpages /></ProtectedRoute>}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App



