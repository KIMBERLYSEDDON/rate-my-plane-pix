import React, { useState } from "react";
import {
    Grid,
    Paper,
    Avatar,
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
    return (
        <div>
            <label>Caption:</label>
            <input type="text" name="caption" />
            <label></label>
        </div>
    )
}