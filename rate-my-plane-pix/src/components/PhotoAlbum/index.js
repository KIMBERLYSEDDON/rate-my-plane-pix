import React, { useState } from 'react'
import { IconButton } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import CloseIcon from '@material-ui/icons/Close'
import '../../photoalbum.css';
import Close from '@material-ui/icons/Close';



export default function PhotoAlbum({ photos }) {
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
                    <img src={photo.source} style={{width: '100%'}} alt="pic" />
                    </div>
                    <IconButton aria-label={`info about `} className='up-vote'>
                  <ThumbUpOutlinedIcon />
                </IconButton>
                    </div>

            })}
        </div>
        </div>
    )
}


