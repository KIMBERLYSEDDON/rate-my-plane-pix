import React, { useState } from "react";
import {
    Grid,
    Paper,
    Typography,
    TextField,
    Button,
  } from "@material-ui/core";
  import Axios from 'axios'


export default function UploadImage() {

    const [formState, setFormState] = useState({ image: "", caption: ""});
    const [imageSelected, setImageSelected] = useState("")

    const uploadImage = () => {
      const formData = new FormData()
      formData.append("file", imageSelected)
      formData.append("upload_preset", "cwgbsf68")
  
  
      Axios.post("https://api.cloudinary.com/v1_1/djhw1foiq/image/upload", formData).then((response) => {
        const imageUploading = response.data.url
        console.log(response)
        console.log(imageUploading)
          setFormState({
            ...formState,
          image: imageUploading
      })
      }) 
  
       
    };
    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
    return (
        <div>
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2>Submit a Pic</h2>
          <Typography variant="caption">
            Please fill out this form to begin your B*UCKET
          </Typography>
        </Grid>
        {/* <form onSubmit={handleFormSubmit}> */}
        <form>
          <div>
          <input type="file" name="avatar" onChange={(e)=> {
            setImageSelected(e.target.files[0])
            }} />
            <Button size="small" onClick={uploadImage}>UPLOAD IMAGE</Button>
            </div>
            <TextField
            // onChange={handleChange}
            name="caption"
            fullWidth
            label="Photo Caption"
          />
          <Button
            id="signupSubmit"
            align="center"
            type="submit"
            variant="contained"
            // style={submitStyle}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
        </div>
    )
}