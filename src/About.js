import React, { useContext } from 'react'
import { ThemeContext } from './App'

export default function About() {
    const theme = useContext(ThemeContext);
  return (
    <>
    <h1>About page</h1>
    <p>Seçili tema: {theme}</p>
    </>
  )
}
