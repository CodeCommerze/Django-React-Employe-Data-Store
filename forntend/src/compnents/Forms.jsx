import React from 'react'
import { useContext } from 'react'
import { useCreateDataMutation, useGetupdateDataMutation } from '../store/api_slicer/Apislicer'
import { Context  } from '../Context/MainContext'
const Forms = () => {

  const {data,setData,editMode,setEditMode} = useContext(Context)
  const [createMutation ] = useCreateDataMutation()
  const [updateMutation] = useGetupdateDataMutation()


  const submitHandler = (e)=>{
    e.preventDefault();
    
    const payload = data
    console.log(payload)
      createMutation(payload)
      setData({
        username:'',
        password : '',
        email: '',
        postition : ''
      })
      
  }

  

  // change handlers
  const onchangeHandler = (event)=>{
    setData({
      ...data,
    [event.target.name] : event.target.value
    })
    console.log(event.target.name)

}
 
const updatehandler = (e)=>{
  e.preventDefault()
  updateMutation(data)
  setData({
    username:'',
    password : '',
    email: '',
    postition : ''
  })
  setEditMode(false)
}




  return (
     
    <form  data-bs-toggle="validator" className='mt-5' onSubmit={editMode?updatehandler:submitHandler} method='POST' >
      
    <div className="mb-3">
      <label htmlFor="name"  className="form-label">Name</label>
      <input type="text" className="form-control " id="name" name='username' value={data.username} onChange={onchangeHandler}/>
    </div>
    <div className="mb-3">
      <label htmlFor="name" className="form-label">Position</label>
      <input type="text" className="form-control" id="name" name='postition' value={data.postition} onChange={onchangeHandler}/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" name="email" id="email" value={data.email} onChange={onchangeHandler} />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" name="password" id="password" value={data.password} onChange={onchangeHandler}  />
    </div>
  
    <button type="submit" className="btn btn-primary">{editMode?"Update" : "Send"}</button>
  </form>
  
  )
}

export default Forms