import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistory, getAllHistory } from '../services/allAPI'


function Watchhistory() {

 const [history,setHistory]=useState([])  //watch history will be stored in this state variable.
 const handleHistory = async ()=>{

  //make api call

  const {data} = await getAllHistory()
  setHistory(data);
 }

 console.log(history);

 useState(()=>{
  handleHistory()
  },[])



  const handleDeleteHistory =async (id)=>{
    //make api call
    await deleteHistory(id)
    //return remaining history
    handleHistory()
  } 
 

  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h5>Watch History</h5>
      <Link to={'/home'} style={{textDecoration: 'none',fontSize: '20px', color:'blueviolet'}}><i class="fa-solid fa-arrow-left fa-bounce"></i> Back to Home</Link>
    </div>

    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th>URL</th>
        <th>TimeStamp</th>
        <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          history.length>0?history?.map((item,index)=>(
            <tr key={item?.id}>
               <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.embedLink} target='_blank'>{item?.embedLink}</a></td>
              <td>{item?.timeStamp}</td>
              <td><button onClick={()=>handleDeleteHistory(item?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>
          )):<p className='fw-bolder text-danger fs-5'>Nothing to Display</p>
        }
       
      </tbody>

    </table>
    
    </>
  )
}

export default Watchhistory