import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import "./Ico.css";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <TextField id="outlined-basic" label="Name" variant="outlined" />
            <br />

            <TextField
              id="outlined-basic"
              label="Email id"
              variant="outlined"
            />
            <br />

            <div>
              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="EUR"
                helperText="Please select your intrest"
              ></TextField>
            </div>

            <div id="outlined-basic">
              <TextField type="date" variant="outlined" placeholder="date" />
            </div>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
