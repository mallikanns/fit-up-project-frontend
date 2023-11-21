import React, { useEffect } from 'react'
import Layout from '../components/sidebar-ham/Layout'
import Dashboard from '../viewpage/Dashboard'
import { useAuth } from "../components/auth/AuthContext";

const Dashboardpages = () => {
  const auth = useAuth()
  useEffect(() => {

  }, [auth.user]);

  return (
    <div className='bg-bgdesktop bg-cover bg-center w-full object-fill'>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  )
}

export default Dashboardpages