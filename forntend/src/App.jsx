import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

// all the components
import Forms from './compnents/Forms'
import Todos from './compnents/Todos'
import './App.css'
import Pagination from './compnents/Pagination'

function App() {

  return (
   <div className='container'>
    <h1 className='alert alert-danger text-light text-center mt-4'> React  Django Employe Data App </h1>
    <div className='row mt-5'>
      <div className='col-5'>
        <span className='alert alert-info text-dark fw-bold fs-5 mb-5 d-block' > Employe Data Entry Form</span>
        <Forms/>
      </div>
      <div className='col-7'>
      <span className='alert alert-primary text-dark fw-bold fs-5 mb-5 d-block' > Employe Data Tables</span>
        <Todos/>
        <div className='d-flex justify-content-center m-auto '>
        <Pagination/>
        </div>
        
      </div>
    </div>
   </div>
  )
}

export default App
