import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "./Modal";
import '../src/Login.css'

import { Button } from "@mui/material";
import { useState } from "react";
import Edit from "./Edit";





export default function AccessibleTable() {
  

  const [selectdata, setSelectData] = useState({})
  const [idx, setIdx] = useState()
  const [openEdit,setOpenEdit] = useState(false)
  const [edit, setEdit] = useState({})
 let passIndex=(index)=>{
    setIdx(index)
  }
   let passData=(tableData)=>{
  setSelectData(tableData);
  }

  // const [open, setOpen] = useState(false)
  // const [sendOpen, setSendOpen] = useState(false)

  // const handleSendOpen=()=>setSendOpen(true);
  // const handleSendOpenClose=()=>setSendOpen(false);

  // const handleOpen=()=>setOpen(true);
  // const handleClose=()=>setOpen(false); 

let ls = localStorage.getItem("tableDate");
let local =ls ? JSON.parse(ls):[];

 let deleteDate = (index) => {
  local.splice(index, 1);
  localStorage.setItem("tableDate", JSON.stringify(local));
};

let modalEditOpen=(data)=>
{
setOpenEdit(true);
setEdit(data);
}

// let local = localStorage.getItem("tableDate");

  return (
    <div>
    <TableContainer component={Paper}>
      <Modal />
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Plan</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Extension</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {local.map((tableDate, index) => (
            <TableRow key={tableDate.name}>
              <TableCell component="th" scope="row">
                {tableDate.name}
              </TableCell>
              <TableCell align="right">{tableDate.place}</TableCell>
              <TableCell align="right">{tableDate.date}</TableCell>
              <TableCell align="right">{tableDate.price}</TableCell>
              <TableCell align="right">
                <Button variant="contained" size="small"
                onClick={()=>{passData(tableDate);passIndex(index);modalEditOpen()}}>edit</Button>
                <span></span>
                <Button variant="contained" size="small" className="delete-btn" onClick={()=>deleteDate(index)}>delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {openEdit&&
      <Edit
      open={openEdit}
      setOpenEdit={setOpenEdit}
      edit={edit}
      idx={idx}
      selectdata={selectdata}/>
      }
      </div>
  );
}
