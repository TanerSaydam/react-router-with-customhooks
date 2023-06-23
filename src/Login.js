import React from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

export default function Login() {
    const navigate = useNavigate();
    const saveToken = useAuth().saveToken;

    function login(){
        saveToken("dasdas");
        navigate("/");
    }
  return (    
    <button onClick={login}>Giriş Yap</button>
  )
}
