import React, { useState, useEffect } from "react";
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
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
      Axios.post('http://localhost:3001/api/submit', {...formState}).then(()=>{
        
      });
    } catch (error) {
      console.error(error)
    }
    };

    const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
    return (
        <div>
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2 id="submit-pic-header">Submit a Pic</h2>
        </Grid>
        <form onSubmit={handleFormSubmit}>
          <div>
          <input type="file" name="avatar" onChange={(e)=> {
            setImageSelected(e.target.files[0])
            }} />
            <Button className="robo-text" size="small" onClick={uploadImage}>UPLOAD IMAGE</Button>
            </div>
            <TextField
            onChange={handleChange}
            name="caption"
            fullWidth
            label="Photo Caption"
          />
          <Button
            id="picSubmit"
            align="center"
            type="submit"
            variant="contained"
            className="robo-text"
            // style={submitStyle}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
        </div>
    )
}