//import React from 'react'

import axiosClient from "../axios-client";
import {useState} from 'react';
import {useEffect} from 'react';

export default function Users() {

  //  define state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();

  }, [])

  const getUsers = () => {
    setLoading(true)
    axiosClient.get('/users')
    .then(({data}) => {
        setLoading(false)
        console.log(data);
    })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <div>
      Users
    </div>
  )
}
