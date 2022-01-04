import React, { useState, useEffect } from 'react'
import { IconButton, Grid, Typography } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CloseIcon from '@material-ui/icons/Close'
import '../../photoalbum.css';
import Close from '@material-ui/icons/Close';
import Axios from 'axios';



export default function PhotoAlbum({ photos }) {

    const [ likes, setLikes ] = useState(0)
    function increaseLikes(pic) {
        
        setLikes(prevLikes => prevLikes + 1);
        let like = pic;
        console.log("THIS", like)
        
    }
    // const classes = useStyles();
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImg] = useState('');
    const getImg = (source) => {
        setTempImg(source);
        setModel(true);
    }
    return (
        <div id="photo-album">
        <div className={model? "model open" : "model"}>
            <img src={tempImgSrc} alt="pic"/>
            <CloseIcon onClick={() => setModel(false)} />
        </div>
        <div className="album">
            {photos.map((photo, index)=> {
                return <div className="pic">
                    <div key={index} onClick={() => getImg(photo.source)}>
                    <img className="pic" src={photo.source} style={{width: '100%'}} alt="pic" />
                    </div>
                    {/* <Grid container justify="flex-end" alignItems="flex-end"> */}
                        <IconButton key={photo.source} id="like-btn" variant="contained" color="primary" aria-label={`info about `} className='up-vote' onClick={() => increaseLikes(photo.source)}>
                            <Typography>{likes}</Typography>
                            <ThumbUpOutlinedIcon />
                    </IconButton>
                {/* </Grid> */}
                    </div>

            })}
        </div>
        </div>
    )
}


