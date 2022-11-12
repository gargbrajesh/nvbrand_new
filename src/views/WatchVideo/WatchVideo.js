import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import MusicImg from '../../../public/assets/images/musicImg.gif';
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
        margin: '15px 15px 15px 25px !important',
        height: '80vh',
    },
    videoplayer: {
        width: '80%',
        height: '60%',
    }
});
const WatchVideo = (prop) => {
    const [song, setSong] = useState()
    console.log(prop.musicData);
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} className={classes.videoCard}>

               <Image src={MusicImg} alt='...'  width={750}/>

            </Grid>
        </Grid>
    )
}

export default WatchVideo;
