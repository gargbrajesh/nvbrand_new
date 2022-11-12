import React from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import MusicImg from '../../../../../public/assets/images/resetPass.gif'
const useStyles = makeStyles({
    root: {
        position: 'relative',
    },
    videoCard: {
        background: '#333 !important',
        borderRadius: '10px',
        padding: '20px',
        margin: '15px 15px 15px 25px !important',
        height:'80vh',
    },
});
const ResetPassleftSection = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} md={12} className={classes.videoCard}>
                <Image src={MusicImg} alt='...' width={600} height={450} />
            </Grid>
        </Grid>
    )
}

export default ResetPassleftSection;
