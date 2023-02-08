import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";

import { MenuItem, TextField } from "@mui/material";

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

let ls = localStorage.getItem("tableDate");
let local = JSON.parse(ls)






export default function BasicModal() {
  const [childopen, setChildopen] = useState(false);

  const handlechildopen = () => setChildopen(true);
  const handlechildClose = () => setChildopen(false);

  
 
 
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [input, setInput] = useState({});
console.log(input)
  let addDate = () => {
    local.push(input);
    localStorage.setItem("tableDate", JSON.stringify(local));
  };

  

  return (
    <div>
      <Modal
        open={childopen}
        onClose={handlechildClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <h1>hello iam child com</h1>

          <Button
            onClick={() => {
              addDate();
              handlechildClose();
            }}
          >
            sent
          </Button>
          <Button
            onClick={() => {
              handlechildClose();
              handleOpen();
            }}
          >
            {" "}
            Close
          </Button>
        </Box>
      </Modal>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
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
                  setInput({ ...input, name: e.target.value });
                }}
                value={input.name}
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
                  setInput({ ...input, place: e.target.value });
                }}
                value={input.place}
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
                  setInput({ ...input, date: e.target.value });
                }}
                value={input.date}
                type="date"
              />
              <br />
              <hr />
              <TextField
                required
                id="outlined-required"
                onChange={(e) => {
                  setInput({ ...input, price: e.target.value });
                }}
                value={input.price}
                label="price"
              />
              <Button
                onClick={() => {
                  handlechildopen();
                  handleClose();
                }}
              >
                submit
              </Button>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Typography>
        </Box>
      </Modal>
      
    </div>
  );
}
