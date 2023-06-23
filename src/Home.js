import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './App'
import UseFetch from './UseFetch';

export default function Home() {
    const theme = useContext(ThemeContext);
    const data = UseFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
    <h1>Home page</h1>
    <p>Seçili tema: {theme}</p>   
    {data.map((val,index)=> <p key={index}>{val.title}</p>)}
    </>
  )
}
