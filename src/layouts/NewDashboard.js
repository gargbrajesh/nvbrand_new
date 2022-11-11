import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider, Typography, Box, Button, Modal } from '@material-ui/core';
import { Topbar, Sidebar } from '../views/UserDashboard/components';
import styles from './Dashboard.module.css';
import { useRouter } from 'next/router';
import ProfileImage from '../../public/assets/Images/logo/avtar.jpg'
import DASHBOARD from '../../public/assets/Images/logo/DASHBOARD.svg'
import Messages from '../views/UserDashboard/components/Messages/Messages.js'
import Account from '../views/UserDashboard/components/Account/Account.js'
import Portfolio from '../views/UserDashboard/components/Portfolio/Portfolio';
import Logo from '../../public/assets/Images/logo/logo.svg'
import Encodr from 'encodr';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
  active_tab: {
    color: 'blueviolet',

    textDecoration: 'underline'
  },
  in_active_tab: {

    color: 'blueviolet',

  }
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: 5
};

const Main = ({ children, themeToggler, themeMode }) => {
  const router = useRouter();

  const handleClose = (text) => {

    setOpenModel(false);
    if ('create' == text) {

      router.push({
        pathname: '/account',
      })
    } else {
      router.push({
        pathname: '/Organization',
      })

    }
  }
  const joinAs1 = Cookies.get('joinAs');
  const userName = Cookies.get('userName');
  const userID = Cookies.get('id');
  const [artist, setArtist] = useState()
  const [pstatus , setPstatus] = useState('')
  const [openModel, setOpenModel] = useState(false);
  const handleChange = () => {
    console.log(artist);

    setOpenModel(true);

    if (artist == 'Artist') {

      router.push({
        pathname: '/account',
      })
    } else {
      console.log('fail');
    }
  }
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [activeSection, setActiveSection] = useState("portfolio");
  const handleSection = (e, text) => {
    let atag = document.getElementsByClassName('active');

    const node = document.querySelectorAll("active").forEach(element => {

      element.classList.remove('active')
      element.style.borderBottom = '0px'
      atag.remove('style')
      // element.style.textDecoration = null

    });
    setActiveSection(text)

    e.currentTarget.classList.add("active")
    e.currentTarget.style.borderBottom = '2px solid orange';


  }

  const pages = {

  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "ci_session=a30a1acd19acdbcfd602ded6a78e8a8f017f8da5");

  useEffect(() => {

    var formdata = new FormData();
    formdata.append("userID", userID);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://app.whyuru.com/api/beatnik_portfolio_artist_status", requestOptions)
    .then(response => response.json())
    .then((responseJson) => {

      console.log(responseJson);
      if (responseJson.valid == false) {
        alert(responseJson.result.message);

      } else {

        console.log(responseJson.result);
setPstatus(responseJson.result.data.Pstatus);
      }

    })
      .catch(error => console.log('error', error));
  })

  return (
    <div
      style={{ overflow: 'hidden' }}
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <div className={styles.container}>

        <Modal
          open={openModel}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={styles.cp_modal_body}>

              <div className="d-flex justify-content-center">
                <div>
                  <div className="d-flex justify-content-center" style={{ marginTop: '10%', }}> <img src={Logo} alt='logo' /></div>
                  <Typography className={styles.typo_design} style={{
                    fontFamily: 'Nunito Sans',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '30px',
                    lineHeight: '119%',
                    padding: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                    color: '#000000'
                  }}>You want to create portfolio as ?</Typography>

                  <div className='row justify-content-center p-4' style={{ marginBottom: '10%' }}>
                    <div className='col-md-5' style={{ marginRight: '25px', marginBottom: '10%' }}>
                      <Button
                        style={{
                          width: '100%',
                          height: '45px',
                          fontFamily: 'Nunito Sans',
                          fontSize: '20px',
                          fontWeight: '40',
                          color: '#212427',
                          backgroundColor: '#fff',
                          borderRadius: '20px',
                          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                          transition: 'all 0.3s ease 0s',
                          cursor: 'pointer',

                        }}
                        onClick={() => {
                          handleClose('create');

                        }}>

                        Artist
                      </Button>

                    </div>

                    <div className='col-md-5' style={{ marginRight: '25px', marginBottom: '10%' }}>
                      <Button
                        style={{
                          width: '100%',
                          height: '45px',
                          fontFamily: 'Nunito Sans',
                          fontSize: '20px',
                          fontWeight: '40',
                          color: '#212427',
                          backgroundColor: '#fff',
                          borderRadius: '20px',
                          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                          transition: 'all 0.3s ease 0s',
                          cursor: 'pointer',

                        }}
                        onClick={() => {
                          handleClose('org');

                        }}>

                        Organization
                      </Button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              height: '30px',
              marginLeft: '0px',
              background: '#FAA61A',

            }}>
            </div>
          </Box>
        </Modal>

        <div className={styles.wrap}>
          <div className={styles.fleft}>
            <div className={styles.card_style} style={{ border: '2px solid green' }}>
              <div>
                <div>
                  <img src={ProfileImage} alt='hi..' style={{ width: '100%', height: '150px', marginTop: '5%' }} />
                </div>
                <table className="table table-borderless" style={{ marginTop: '10px' }}>
                  <tbody>
                    <tr>
                      <td>
                        <Typography className={styles.typo}>{userName}</Typography>
                        <hr className={styles.hr_style} />
                        <Typography className={styles.typo2}>{joinAs1}</Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
            <div className={styles.fleft_bottum_div}>
              <img src={DASHBOARD} alt="" style={{ width: '60%' }} />
            </div>
          </div>
          <div className={styles.fright}>
            <hr />
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container d-block">
                <div className="collapse navbar-collapse mx-5" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item mx-5">
                      <a className="nav-link active" id='portfolio' aria-current="page" onClick={(e) => { handleSection(e, "portfolio") }} href="#" 
                      style={{fontFamily:' Nunito Sans',
                      fontSize: '17px',
                      fontWeight: '800',
                      lineHeight:' 33px',
                      letterSpacing:' 0.02em',
                    }}>Portfolio</a>
                    </li>
                    <li className="nav-item mx-5">
                      <a className="nav-link" onClick={(e) => { handleSection(e, "Account") }} id="Account" href="#"style={{fontFamily:' Nunito Sans',
                      fontSize: '20px',
                      fontWeight: '500',
                      lineHeight:' 33px',
                      letterSpacing:' 0.02em',
                    }}>Account</a>
                    </li>
                    <li className="nav-item mx-5">
                      <a className="nav-link" onClick={(e) => { handleSection(e, "Message") }} id="Message" href="#"style={{fontFamily:' Nunito Sans',
                      fontSize: '20px',
                      fontWeight: '500',
                      lineHeight:' 33px',
                      letterSpacing:' 0.02em',
                    }}>Message</a>
                    </li>
                  </ul>
                </div>
                <hr style={{ width: '92%', marginLeft: '5%' }} />
              </div>
            </nav>


            {
              activeSection === "portfolio" &&
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  marginTop: '150px'
                }}
              >
                {(pstatus == '1') ? <Portfolio/>:<><p className={styles.paraDesign}>Create your portfolio
                  Share your featured works  and connect with fellow artists</p>
                <Button
                  variant="contained"
                  onClick={handleChange}
                  className={styles.createPortfolioButton}>Create Portfolio</Button></>
                 }

              </div>
            }
            <div style={{width:'70%'}}>
            {
              activeSection === "Account" &&
              <Account />
              // <Portfolio/>
            }
            {
              activeSection === "Message" &&
              <Messages />
              // <Account />
            }
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
