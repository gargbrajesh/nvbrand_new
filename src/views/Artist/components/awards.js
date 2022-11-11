import React, { useState } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../../checking.module.css";
import LeftArrow from '../../../../../public/assets/Images/logo/leftArrow.svg';
import RightArrow from '../../../../../public/assets/Images/logo/RightArrow.svg';

import Cookies from 'js-cookie'
import { Button } from 'react-bootstrap';


function Awards() {

    const userTemplate = { schoolName: '', course: '', city: '', year: '' };
    const [users, setUsers] = useState([userTemplate]);
    const [nnn, setNnn] = useState('');
    const addUser = () => {
        setUsers([...users, userTemplate])
    };
    const changeHadler = (e, index) => {
        const updatedUsers = users.map((user, i) =>
            index == i ? Object.assign(user, { [e.target.name]: e.target.value }) : user
        );
        setUsers(updatedUsers);
    };

    var myHeaders = new Headers();
    myHeaders.append(
        'Cookie',
        'ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230',
    );

    const userID = Cookies.get('id');
    const mydata = JSON.stringify(users);
    // console.log(mydata[0]);
    const DataPost = () => {
        var formdata = new FormData();
        formdata.append('userID', userID);
        formdata.append('awards_one', JSON.stringify(users[0]));
        formdata.append('awards_two', JSON.stringify(users[1]));
        formdata.append('add_flag', 'save');
        formdata.append('action', 'awards');

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
                setNnn(responseJson.result.data);
            }

        })
        .catch((error) => {

            console.log(error);
        });

    }

    return (
        <>
        <div className={styles.text1}>

        <ul className={styles.ul}>
            <ul style={{ float: 'right' }}>
                <li className={styles.li}><a href="#" className={styles.a}>Save Draft</a></li>
                <li className={styles.li}><a href="/view" className={styles.a}>Preview</a></li>
                <li className={styles.li}><a href="#"  onClick={() => DataPost()} className={styles.a}>Submit</a></li>
            </ul>
        </ul>

    </div>
            <div className="container p-2 bg-white overflow-auto" style={{ width: '80vw', height: '85vh', position: "fixed", marginLeft: '2%', marginTop: '-10px' }}>
                <p style={{ color: '#6B705A', marginLeft: '250px', fontFamily: 'Garamond', fontWeight: 700, fontSize: '42px' }}>BASIC INFORMATION</p>
                <div className={styles.ac_input_item}>
                    <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', marginLeft: '20px' }}>Awards</h2>
                </div>

                {
                    users.map((user, index) => (
                        <div key={index}>
                            <div className="form-row d-flex p-4">
                                <div className="form-group ms-3 col-md-3 p-0">

                                    <input type='text'
                                        name='schoolName'
                                        onChange={e => changeHadler(e, index)} className="form-control p-1 px-2"
                                        style={{

                                            borderRadius: '4px'
                                            , color: 'black',

                                        }}
                                        placeholder="Enter your School Name" autocomplete="off">

                                    </input>
                                </div>
                                <div className="form-group ms-4 col-md-3 ">


                                    <select oonChange={e => changeHadler(e, index)} className="form-control p-1 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                        style={{
                                            borderRadius: '4px'
                                            , color: 'black',

                                        }}
                                        name='course'
                                        placeholder="Select Course" autocomplete="off">
                                        <option selected>Course</option>
                                        <option>Course1</option>
                                        <option>Course2</option>
                                        <option>Course3</option>
                                    </select>
                                </div>
                                <div className="form-group ms-4 col-md-3 ">
                                    <select onChange={e => changeHadler(e, index)} className="form-control p-1 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                        style={{
                                            borderRadius: '4px'
                                            , color: 'black'
                                        }}
                                        name='city'
                                        placeholder="Select City" autocomplete="off">
                                        <option selected>City</option>
                                        <option>Noida</option>
                                        <option>Delhi</option>
                                        <option>Mumbai</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row d-flex p-4 pt-2">
                                <div className="form-group ms-3 col-md-3 p-0">
                                    <select onChange={e => changeHadler(e, index)} className="form-control p-1 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                        style={{
                                            borderRadius: '4px'
                                            , color: 'black'
                                        }}
                                        name='year'
                                        placeholder="Select Gender" autocomplete="off">
                                        <option selected>Year</option>
                                        <option>Year1</option>
                                        <option>Year2</option>
                                        <option>Year3</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    ))
                }
                <div className="d-flex justify-content-center">
                    <Button type="button" className="btn text-white "
                        onClick={addUser} style={{
                            background: '#FAA61A',
                            borderRadius: '20px', width: '150px', border: 'none'
                        }}>+ Add 1 More</Button></div>
                <div className="d-flex justify-content-center mt-4">
                    <div style={{
                        display: 'inlineBlock',
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#6b705a',
                        borderRadius: '15px'
                    }}>
                        <img src={LeftArrow} style={{ marginTop: '8px', marginLeft: '5px' }} />
                    </div>
                    <div className={styles.container_buttons}>
                        <img src={RightArrow} onClick={() => DataPost()} style={{ marginTop: '8px', marginLeft: '5px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Awards
