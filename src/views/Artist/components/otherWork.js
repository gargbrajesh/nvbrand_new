import React, { useState } from 'react';

import styles from "../design.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie'

function OtherWork() {

    const userTemplate = { title: '', link: '', description: '' };
    const [users, setUsers] = useState([userTemplate]);
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
    const DataPost = () => {
        var formdata = new FormData();
        formdata.append('userID', userID);
        formdata.append('training_one', JSON.stringify(users[0]));
        formdata.append('training_two', JSON.stringify(users[1]));
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

            <div className="container p-2 bg-white overflow-auto">

                <div className={styles.ac_input_item}>
                    <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', marginLeft: '20px', textDecoration: 'underLine' }}>Other Work (optional)</h2>
                </div>

                {
                    users.map((user, index) => (
                        <div key={index}>

                            <div className="form-row ms-4 d-flex p-2">
                                <div className="form-group col-md-6 p-2">
                                    <label className="form-label" for="password">Title</label>
                                    <input type="text" id="password" name='title' className={styles.form_control_lg} />
                                </div>
                                <div className="form-group col-md-6 p-2">
                                    <label className="form-label" for="confirm_pass">Link</label>
                                    <input type="text" id="confirm_pass" name='link' className={styles.form_control_lg} />
                                </div>
                            </div>
                            <div className="form-row ms-4 d-flex p-2">
                                <div className="col-md-12 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" for="password">Description</label>

                                        <textarea class="form-control border-dark"
                                            name='description' id="exampleFormControlTextarea1"
                                            rows="3"
                                            className={styles.form_control_lg}
                                            style={{
                                                borderRadius: '0'
                                                , color: 'black',
                                                borderWidth: '0 0 2px',
                                                outline: 0,
                                                borderBottom: '2px solid grey'
                                            }}
                                        ></textarea>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
                <div className="d-flex justify-content-center p-3">
                    <Button type="button" className="btn text-white "
                        onClick={addUser} style={{
                            background: '#FAA61A',
                            borderRadius: '20px', width: '150px', border: 'none'
                        }}>+ Add 1 More</Button></div>
            </div>
        </section>
    )
}

export default OtherWork
