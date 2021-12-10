import React from 'react'
import {Navigation} from "./routes"
import { ClientLayout } from './layouts'

export default function App() {
  return (
    <ClientLayout className='app'>
      <h1 className='app__title'>Hola Mundo!</h1>
      <Navigation/>
    </ClientLayout>
  )
}
