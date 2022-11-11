import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TiltedDashboard from "../../../../../public/assets/Images/logo/tilted_dashboard.png";
import picsum from "../../../../../public/assets/Images/logo/MG_3437 4.jpg";
import Cookies from 'js-cookie'
const useStyles = makeStyles(theme => ({
    welcome_header: {
        height: '16.5rem',
        width: '100vw',
        backgroundColor: '#6b705a',
        display: 'flex',
        justifyContent: 'center',

    },

    welcome_header_logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },

    welcome_header_text: {
        width: '55%',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    welcome_header_text_p: {
        padding: "8px 0",
        fontSize: "12px"
    },

    right_image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },

    inside_right_image: {
        position: 'relative',

    },

    right_image_hidden_text: {
        border: "1px solid #6b705a",
        borderRadius: '10px',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        height: '98%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#f2a82b',
        fontWeight: 'bold',
        transition: 'all .3s',
        cursor: 'pointer',

    }
}));

const WelcomeHeader = () => {
    const classes = useStyles();
    const [rightImageCSS, setRightImageCSS] = React.useState({ opacity: 0 });
    var userName = Cookies.get('userName');

    return (
        <>
            <div className={classes.welcome_header}>

                {/* IMAGE DIV */}
                <div className={classes.welcome_header_logo}>
                    <img src={TiltedDashboard} alt="" />
                </div>

                {/* ALL TEXT DIV */}
                <div className={classes.welcome_header_text}>
                    <div
                        style={
                            {
                                fontSize: '2.5rem'
                            }
                        }
                    >Hi</div>
                    <div
                        style={{
                            fontSize: '3.5rem',
                            lineHeight: '60px',
                            fontWeight: 'bold',
                            paddingBottom: '10px'
                        }}
                    >{userName}</div>
                    <p className={classes.welcome_header_text_p}>You can create your Portfolio in Beatnik and you can show case your works in Community</p>
                    <p className={classes.welcome_header_text_p} > Other than that you can apply for jobs. Post jobs or post Community Activites</p>
                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className={classes.right_image}>
                    <div
                        className={classes.inside_right_image}
                        onMouseOver={() => {
                            setRightImageCSS({
                                opacity: 1,
                                backgroundColor: "rgba(0,0,0,0.7)"
                            })
                        }}
                        onMouseLeave={() => {
                            setRightImageCSS({
                                opacity: 0,
                                backgroundColor: "none"
                                
                            })
                        }}
                    >

                        <img
                            style={{
                                border: "1px solid #6b705a",
                                borderRadius: '10px',
                                width: '322px',
                                height: '230px',
                                left: 1617,
                                top: 142,
                            }}
                        src={picsum}alt="" />
                        <div className={classes.right_image_hidden_text}
                            style={rightImageCSS}
                        >
                            UPDATE PROFILE
                        </div>
                    </div>

                </div>
            </div >
        </>
    );
};

export default WelcomeHeader;
