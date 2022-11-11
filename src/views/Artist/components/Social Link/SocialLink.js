import React, { useState } from 'react'
import styles from './social.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import TopBar from 'layouts/Dashboard/components/Topbar/Topbar';
import { Typography, Box, Paper } from '@material-ui/core';
import Cookies from 'js-cookie'
function SocialLink() {
    const router = useRouter();

    const socialTemplate = { choosePlatform: '', link: '', };
    const [socials, setSocials] = useState([socialTemplate]);
    const addUser = () => {
        setSocials([...socials, socialTemplate])
    };
    const changeHadler = (e, index) => {
        const updatedSocials = socials.map((social, i) =>
            index == i ? Object.assign(social, { [e.target.name]: e.target.value }) : social
        );
        setSocials(updatedSocials);
    };

    const handleClose = (text) => {
        if ('create' == text) {

            router.push({
                pathname: '/Portfolio',
            })
        } else {
            console.log('fail');
        }
    }

    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230',
    );


    const userID = Cookies.get('id');
    const mydata = JSON.stringify(socials);
    const DataPost = () => {
        var formdata = new FormData();
        formdata.append('userID', userID);
        formdata.append('training_one', JSON.stringify(socials[0]));
        formdata.append('training_two', JSON.stringify(socials[1]));
        formdata.append('add_flag', 'save');
        formdata.append('action', 'training');
        // e.preventDefault();
        fetch('https://app.whyuru.com/api/beatnik_portfolio_artist_add_edit', {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //Hide Loader

                console.log(responseJson.valid);
                if (responseJson.valid == false) {
                    alert(responseJson.result.message);
                } else {
                    alert(responseJson.result.message);
                    console.log(responseJson);
                    alert(JSON.stringify(responseJson.result.data));
                }

            })
            .catch((error) => {

                console.log(error);
            });

    }
    return (
        <section className={styles.wrap}>
            <div>
                <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', borderBottom: '1px solid black', }}>Social Link</h2>

            </div>

            {
                socials.map((user, index) => (
                    <div key={index}>
                        <div className="form-row ms-4 mt-5 d-flex p-2">
                            <div className="form-group col-md-5 p-2">
                                <div className="form-outline ">

                                    <select name='choosePlatform' className="form-control border-dark p-1 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                        style={{
                                            borderRadius: '4px'
                                            , color: 'black',
                                            borderWidth: '0 0 2px',

                                        }}
                                        autocomplete="off">
                                        <option disabled selected>Choose platform</option>
                                        <option>platform1</option>
                                        <option>platform2</option>
                                        <option>platform3</option>

                                    </select>

                                </div>
                            </div>
                            <div className="form-group col-md-5 p-2">
                                <div className="form-outline">

                                    <input type="text" id="confirm_pass" placeholder='Paste the link' name="link" className={styles.form_control_lg} />

                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="d-flex justify-content-center mt-5 p-3">
                <Button type="button" className="btn text-white "
                    onClick={addUser} style={{
                        background: '#FAA61A',
                        borderRadius: '20px', width: '150px', border: 'none'
                    }}>+ Add 1 More</Button></div>

            <div className="d-flex justify-content-center">
                <div>

                    <Typography className={styles.typo_design} style={{
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: '36px',
                        lineHeight: '90%',
                        padding: '20px',
                        textAlign: 'center',
                        alignItems: 'center',
                        marginTop: '10px',
                        color: '#000000',

                    }}>Do you want to add more details ?</Typography>

                    <div className='row justify-content-center p-5'>

                        <div className='col-md-4  d-flex justify-content-end' style={{marginRight:"20px"}} >
                            <Button
                                style={{
                                    width: '350px',
                                    height: '45px',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: '20px',
                                    fontWeight: '20',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    borderRadius: '20px',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                    transition: 'all 0.3s ease 0s',
                                    cursor: 'pointer',
                                    background: '#FAA61A',
                                    letterSpacing: ' 0.02em',


                                }}
                                onClick={() => {
                                    handleClose('create');

                                }}>
                                Yes, I want to
                            </Button>
                        </div>

                        <div className='col-md-4'>
                            <Button
                                style={{
                                    width: '140px',
                                    height: '45px',
                                    fontFamily: 'Nunito Sans',
                                    fontSize: '20px',
                                    fontWeight: '20',
                                    color: '#FFFFFF',
                                    background: '#FAA61A',
                                    borderRadius: '20px',
                                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
                                    transition: 'all 0.3s ease 0s',
                                    cursor: 'pointer',
                                    letterSpacing: ' 0.02em',
                                    border: 'none'

                                }}
                                onClick={() => {
                                    handleClose();

                                }}>
                                No, move on
                            </Button>
                        </div>
                    </div>

                    <div className='row justify-content-center' style={{borderBottom:'30px'}}>
                        <div className='col-md-4  d-flex justify-content-end' >
                            <p>Look at other fields and publish</p>
                        </div>

                        <div className='col-md-4'>

                            <p>Preview and Publish, you can add more details later </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SocialLink
