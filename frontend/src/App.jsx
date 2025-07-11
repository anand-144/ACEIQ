import React from 'react'
import {Toaster} from 'react-hot-toast'
import AppRouter from './route/AppRouter'

const App = () => {
  return (
    <div>
      <AppRouter />
      <Toaster
      toastOptions={{
        className: "" , 
        style : {
          fontSize : "13px",
        },
      }}
      />
    </div>
  )
}

export default App
