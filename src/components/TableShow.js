import React, { useContext, useState } from 'react';
import { Table } from 'react-bootstrap';
import ContextData from '../context/context';

function TableShow() {
  const contextValue=useContext(ContextData)
  console.log(contextValue.storeData);
  const[employee,setEmployee]=useState({
    fullName:'',
    designation:'',
    salary:'',
    age:''
  })

  const deleteData=(index)=>{
    const array=[...contextValue.storeData]
    array.splice(index,1)
    contextValue.setStoreData(array)
  }
  return <div>
   <Table striped bordered hover variant="dark">
  <thead>
    <tr>
    <th>Full Name</th>
      <th>Designation</th>
      <th>Salary</th>
      <th>Age</th>
      <th>Edit</th>
      <th>Delete</th>

    </tr>
  </thead>
  <tbody>
    {contextValue.storeData && contextValue.storeData.map((data,index)=>{
      return (
        <tr key={index}>
              <td>{data.fullName}</td>
              <td>{data.designation}</td>
              <td>{data.salary}</td>
              <td>{data.age}</td>
              <td><button>Edit</button></td>
              <td><button onClick={(index)=>{deleteData(index)}}>Delete</button></td>
        </tr>
      )
    }) }
  </tbody>
</Table>
  </div>;
}

export default TableShow;
