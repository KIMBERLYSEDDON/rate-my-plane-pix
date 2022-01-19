import React, { useState, useEffect } from 'react'
import { IconButton, Grid, Typography } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CloseIcon from '@material-ui/icons/Close'
import '../../photoalbum.css';
import Close from '@material-ui/icons/Close';
import Axios from 'axios';



export default function PhotoAlbum({ photos }) {
    const [photoAlbum, setPhotoAlbum] = useState([])
    let [ likes, setLike ] = useState(0);


    const increaseLikes = (id, likes) => {
        ; console.log("like")
        // // let likes = document.querySelector("#like-btn").getAttribute('data-like-id');
        
        // console.log(likes, id)
        setLike(likes);

        Axios.put("http://localhost:3001/api/like", {
            id: id,
            like: likes,
        }).then((response)=>{
            console.log(response.data)
        });
        
    };

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response)=>{
            setPhotoAlbum(response.data)
            console.log("effect")
        })
    }, [likes])

    
    // const [pLikes, setPLikes] = useState(0)

    // const increment = () => {
    //     setLike(prevLike => prevLike + 1);
    // }



    // const classes = useStyles();
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImg] = useState('');
    const getImg = (source) => {
        setTempImg(source);
        setModel(true); 
    };
    return (
        <div id="photo-album">
        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt="pic"/>
            <CloseIcon onClick={() => setModel(false)} />
        </div>
        <div className="album">
            {photoAlbum.map((photo)=> {
                return <div className="pic">
                    <div key={photo.id} onClick={() => getImg(photo.image)}>
                    <img className="pic" src={photo.image} style={{width: '100%'}} alt={photo.caption} />
                    </div>
                    {/* <Grid container justify="flex-end" alignItems="flex-end"> */}
                        <IconButton key={"like"+ photo.id} id="like-btn" data-like-id={photo.likes} variant="contained" color="primary" aria-label={`info about `} 
                        className='up-vote' onClick={(e) => {increaseLikes(photo.id, photo.likes +1) }}>
                            <Typography>{photo.likes}</Typography>
                            <ThumbUpOutlinedIcon />
                    </IconButton>
                {/* </Grid> */}
                    </div>

            })}
        </div>
        </div>
    )
}


