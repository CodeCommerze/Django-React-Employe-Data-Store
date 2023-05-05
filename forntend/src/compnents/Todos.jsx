import React ,{useContext} from "react";
import { useGetAllTodosQuery ,useDeleteDataMutation,useGetupdateDataMutation} from "../store/api_slicer/Apislicer";

// For the toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Icons 
import { BsPencil,BsTrash } from "react-icons/bs";
// context 
import { Context } from "../Context/MainContext";
// import 


const Todos = () => {
  //  for dispatching updates
  const {setData ,setEditMode ,editMode}= useContext(Context)


// api slide handlee
  const { data: users, isLoading, isError ,isSuccess} = useGetAllTodosQuery();
  const [removeMutation] = useDeleteDataMutation()
  const errorHander = () => toast.error("Data Cannot be Loaded");
  const loadinHandeler = () =>toast.info("data is loaing");

  const updateUserHandler = (userid)=>{
    const userdata = users.find((item)=>{
      if(item.id === userid){
        return item
      }
  })
  const { id ,username , password, email , postition} = userdata
   const updateData = setData({
    id : id,
    username: username,
    password: password,
    email: email,
    postition: postition
   })
   setEditMode(true)
   console.log(editMode)
  }
  
  

  return (
    <div>
      <ToastContainer />
      <div className="mb-3 ">
        <input type="text" name="search" id=""  className="form-control w-50 d-block  " placeholder="Search..."/>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Postition</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading && loadinHandeler()}
          {isError && errorHander()}
          {users?.map((user, id) => (
            <tr key={id}>
              <th scope="row">{user.id}</th>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.postition}</td>
              <td>
                <span className="btn btn-danger me-2  " onClick={()=>removeMutation(user.id)}><BsTrash/></span>
                <span className="btn btn-primary me-2 " onClick={()=>updateUserHandler(user.id)} ><BsPencil/></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todos;
