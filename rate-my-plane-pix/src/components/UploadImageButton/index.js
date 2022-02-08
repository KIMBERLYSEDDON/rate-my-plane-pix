import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Backdrop, Modal } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import UploadImage from '../UploadImage';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function UploadImageButton(props) {
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const buttonStyle = {backgroundColor: '#90ee90', color: 'white', padding:10, borderRadius:5, boxShadow: "5px 10px blue"};

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className='uploadBtnDiv' type="button" onClick={handleOpen} style={buttonStyle} variant="contained" endIcon={<PhotoCameraIcon />}>
        Submit a pic
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        // closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
       
          <div className={classes.paper}>
            <UploadImage />
          </div>
      </Modal>
    </div>
  );
}
