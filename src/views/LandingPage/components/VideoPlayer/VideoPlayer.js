import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import MusicImg from '../../../../../public/assets/images/musicImg.gif';
import ReactPlayer from 'react-player';
// import { ReactVideo } from "reactjs-media";

const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    videoCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#333 !important',
        borderRadius: '10px',
        padding: '20px',
        // boxShadow: "6px 4px 2px #403b3bd9",
        // margin: '25px 15px 15px 25px !important',
        height: '80vh',
        '@media (min-width: 770px) and (max-width:1024px)': {
            margin: '15px 15px 15px 35px !important',
        },
        '@media (min-width: 600px) and (max-width:768px)': {
            margin: '15px 15px 15px 28px !important',
            height: '40vh',
        },
        '@media (min-width: 380px) and (max-width:425px)': {
            margin: '15px 15px 15px 28px !important',
            height: '40vh',
        },
        '@media (max-width:375px)': {
            margin: '15px 15px 15px 28px !important',
            height: '40vh',
        }

    },
});
const VideoPlayer = (prop) => {
    const [song, setSong] = useState()
    
   const music = prop.musicData ? prop.musicData['song_url']:'';
    console.log('prop.musicData',prop.musicData);
  
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.videoCard}>
                {prop.musicData ? <ReactPlayer  controls url={music} width="100%" height="95%"  playing={true} 
    loop={true}  />
            :<ReactPlayer controls url="https://www.youtube.com/watch?v=o1OQFwpwwNU" width="100%" height="95%" />    
            }
            </Grid>
        </Grid>
    )
}

export default VideoPlayer;
