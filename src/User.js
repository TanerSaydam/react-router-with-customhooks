import React, { useContext } from 'react'
import { ThemeContext } from './App'

export default function User() {
    const theme = useContext(ThemeContext);
  return (
    <>
    <h1>User page</h1>
    <p>Seçili tema: {theme}</p>
    </>
  )
}
