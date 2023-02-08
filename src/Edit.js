import  React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

import { MenuItem, TextField } from "@mui/material";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];




export default function Edit(openEdit,setOpenEdit,edit,idx,selectdata) {
  const [editModal, setEditModal] = useState(false);
  

  const handleditopen = () => setEditModal(true);
  const handleditClose = () => setEditModal(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [editdata, setEditdata] = useState(selectdata);

  useEffect(() => {
  setEditdata({ ...selectdata})
  }, [selectdata])
  

  let EditData = () => {
    let local=JSON.parse(localStorage.getItem("tableDate"));
    local[idx]=editdata
    localStorage.setItem("tableDate", JSON.stringify(local));
  };

  let closeModal=()=>{
    setOpenEdit(false);
    setEditdata({
        name:"", 
        place:"",
        date:"",
        price:"",
    })
  }



  return (
    <div>
      <Modal
        open={editModal}
        onClose={handleditClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <h1>hello iam child com</h1>

          <Button
            onClick={() => {
              EditData();
              closeModal();
            }}
          >
            sent
          </Button>
          <Button
            onClick={
              handleditClose()
            }
          >
            Close
          </Button>
        </Box>
      </Modal>
      
      <Modal
        open={openEdit}
        onClose={()=>setOpenEdit(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Box component="form" autoComplete="off">
              <TextField
                required
                id="outlined-required"
                onChange={(e) => {
                  setEditdata({ ...editdata, name: e.target.value });
                }}
                value={editdata.name}
                label="name"
              />
              <br />
              <hr />

              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="place"
                helperText="Please select your plan"
                onChange={(e) => {
                    setEditdata({ ...editdata, place: e.target.value });
                }}
                value={editdata.place}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />

              <TextField
                required
                id="outlined-required"
                onChange={(e) => {
                    setEditdata({ ...editdata, date: e.target.value });
                }}
                value={editdata.date}
                type="date"
              />
              <br />
              <hr />
              <TextField
                required
                id="outlined-required"
                onChange={(e) => {
                    setEditdata({ ...editdata, price: e.target.value });
                }}
                value={editdata.price}
                label="price"
              />
              <Button
                onClick={
                  closeModal()
                  
                }
              >
                close
              </Button>
              <Button onClick={handleditopen}>edit</Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}