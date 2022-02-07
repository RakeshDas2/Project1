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
    
  </tbody>
</Table>
  </div>;
}

export default TableShow;
