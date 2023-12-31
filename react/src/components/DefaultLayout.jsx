import { Outlet, Navigate, Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import { useEffect } from "react";
import axiosClient from "../axios-client";

export default function DefaultLayout() {
  const {user, token, notification, setUser, setToken} = useStateContext()

  if(!token){
    return <Navigate to='/login'/>
  }

  const onLogout = (ev) => {
    ev.preventDefault()

    axiosClient.post('/logout')
    .then(() => {
      setUser({})
      setToken(null)
    })

  }



  // useEffect Hook
  useEffect(() => {
    axiosClient.get('/user')
    .then(({data}) => {
      setUser(data)
    })
  }, [])

  return (
    <div id='defaultLayout'>
      <aside>
        <Link to='Dashboard'>Dashboard</Link>
        <Link to='Users'>Users</Link>
      </aside>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href='#' onClick={onLogout} className='btn-logout'>Logout</a>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
      {notification &&
        <div className="notification">
          {notification}
        </div>
      }
    </div>
  )
}
