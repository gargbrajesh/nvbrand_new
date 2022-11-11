import { Button } from '@material-ui/core';
import React from 'react'
import styles from "../../Dashboard.module.css";
import CPModal from "./CreatePortfolioModal";

const Portfolio = () => {
    const API_RESPONSE = false;
    return (
        <>
            {
                API_RESPONSE ? <>CODE FOR, WHEN PORTFOLIO AVAIABLE</> : <><NoPortfolio /></>
            }
        </>
    )
}



const NoPortfolio = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <CPModal open={open} setOpen={setOpen} />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <p>You Don't Have a Portfolio yet.</p>
                <Button
                    variant="contained"
                    className={styles.createPortfolioButton}
                    onClick={() => { setOpen(true) }}
                >Create Portfolio</Button>
            </div>
        </>
    )
}



export default Portfolio