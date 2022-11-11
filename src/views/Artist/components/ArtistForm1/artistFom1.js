import React, { useState } from 'react'
import styles from './artistForm1.module.css';
import { Button, Grid, Select, MenuItem } from '@material-ui/core';
import Cloud from '../../../../../public/assets/Images/logo/cloud.svg';
import Vecter from '../../../../../public/assets/Images/logo/Vector1.svg';
import DropFileInput from '../drop-file-input/DropFileInput';
import Cookies from 'js-cookie';
function ArtistFom1() {

    const [name, setName] = useState();
    const [dob, setDob] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState(false);
    const [useType, setUseType] = useState();
    const [gender, setGender] = useState();
    const [currentLocation, setCurrentLocation] = useState();
    const [aboutMe, setAboutMe] = useState();
    const [artForm, setArtForm] = useState();
    const [otherWork, setOtherWork] = useState();
    const [persona, setPersona] = useState();
    const [specialization, setSpecialization] = useState();
    const [language, setLanguage] = useState('');
    const [tag, setTag] = useState('');
    const [image64, setImage64] = useState('');

    var myHeaders = new Headers();
    myHeaders.append("Cookie", "ci_session=ace8339c674e65c00c2f5732d2a0749bca2a9e43");

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });




    const onFileChange = (files) => {
        console.log('Test---->', files[0]);
        const base64File = toBase64(files[0]);



        console.log(base64File.then(data => {
            setImage64(data);
            console.log(data);
        }));
        // setProfile(base64File);
        // setIsFilePicked(true);
    }
    const userID = Cookies.get('id');
    const DataPost = (text) => {

        var formdata = new FormData();
        formdata.append("userID", userID);
        formdata.append("name", name);
        formdata.append("gender", gender);
        formdata.append("dob", dob);
        formdata.append("userType", useType);
        formdata.append("currentWorkLocation", currentLocation);
        formdata.append("city", city);
        formdata.append("country", country);
        formdata.append("bio", aboutMe);
        formdata.append("art_form", artForm);
        formdata.append("persona", persona);
        formdata.append("specialization", specialization);
        formdata.append("profile_media_one", image64);
        formdata.append("profile_media_two", "base 64");
        formdata.append("profile_media_three", "base 64");
        formdata.append("profile_media_one_type", "audio");
        formdata.append("profile_media_two_type", "video");
        formdata.append("profile_media_three_type", "image");
        formdata.append("age", "23");
        formdata.append("engagement_type", "dfb");
        formdata.append("tags", tag);
        formdata.append("language", language);
        formdata.append("other_art_form", otherWork);

        formdata.append("socialLink", "[{\"test1\":\"123\",\"test2\":\"23\"},{\"test1\":\"123\",\"test2\":\"23\"}]");
        formdata.append("profileFileBase64Data", "ajdshkashdkahsd");
         formdata.append("pastedURL", "abc.abc.com/ima/jaja.png");
        formdata.append("add_flag", text);
        formdata.append("action", "screenOne");


        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://app.whyuru.com/api/beatnik_portfolio_artist_add_edit", requestOptions)
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson.valid);
                if (responseJson.valid == false) {
                    alert(responseJson.result.message);
                } else {
                    alert(responseJson.result.message);
                   
                }

            })
            .catch(error => console.log('error', error));
    }

    return (
        <section className={styles.wrap}>
            <div className={styles.fleft}>
                <DropFileInput onFileChange={(files) => onFileChange(files)} />

            </div>
            <div className={styles.fright}>

                <div className="card-body p-md-5 mx-2  text-black bg-white">
                    <h4 className="mb-2 text">Basic Details</h4>

                    <div className={styles.or}>OR</div>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="name">Full Name</label>
                                <input type="text" id="name"
                                    placeholder="Enter Your Name"
                                    name="name" onChange={e => setName(e.target.value)} className={styles.form_control_lg}  style={{
                                        borderRadius: '0'
                                        , color: 'black',
                                        borderWidth: '0 0 2px',
                                        outline: 0,

                                    }} />

                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="Dob">Date Of Birth</label>
                                <input type="date" id="Dob"
                                    name="Dob" onChange={e => setDob(e.target.value)}
                                    className={styles.form_control_lg}  style={{
                                        borderRadius: '0'
                                        , color: 'black',
                                        borderWidth: '0 0 2px',
                                        outline: 0,

                                    }} />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="Country">Country</label>
                                <select onChange={e => setCountry(e.target.value)} name='Country' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    autocomplete="off">
                                    <option selected>India</option>
                                    <option>China</option>
                                    <option>US</option>
                                    <option>Japan</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="City">City</label>
                                <select onChange={e => setCity(e.target.value)} name='City' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                    style={{
                                                borderRadius: '0'
                                                , color: 'black',
                                                borderWidth: '0 0 2px',
                                                outline: 0,
                                                borderBottom: '2px solid grey'

                                            }}
                                    autocomplete="off">
                                    <option selected>Gwalior</option>
                                    <option>Noida</option>
                                    <option>Delhi</option>
                                    <option>indore</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="UseType">Use Type</label>
                                <select onChange={e => setUseType(e.target.value)} name='UseType' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                    style={{
                                                borderRadius: '0'
                                                , color: 'black',
                                                borderWidth: '0 0 2px',
                                                outline: 0,
                                                borderBottom: '2px solid grey'
                                            }}
                                    placeholder="Select Gender" autocomplete="off">
                                    <option value="" selected>Use Type</option>
                                    <option value="usetype1">Use Type1</option>
                                    <option value="usetype2">Use Type2</option>
                                    <option value="usetype3">Use Type3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="gender">Gender</label>
                                <select onChange={e => setGender(e.target.value)} name='gender' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    autocomplete="off">

                                    <option value='male' selected>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Other'>Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="ArtForm">Art Form</label>
                                <select onChange={e => setArtForm(e.target.value)} name='ArtForm' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    placeholder="Select Gender" autocomplete="off">
                                    <option selected>Art Form</option>
                                    <option>Art Form1</option>
                                    <option>Art Form2</option>
                                    <option>Art Form3</option>
                                </select>


                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="Specialization">Specialization</label>
                                <select onChange={e => setSpecialization(e.target.value)} name='Specialization' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    autocomplete="off">

                                    <option selected>Specialization</option>
                                    <option>Guitar</option>
                                    <option>Piano</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="Tag">Tag</label>
                                <select onChange={e => setTag(e.target.value)} name='Tag' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    placeholder="Select Gender" autocomplete="off">
                                    <option selected>Tag</option>
                                    <option>Tag 1</option>
                                    <option>Tag 2</option>
                                    <option>Tag 3</option>
                                </select>


                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="Persona">Persona</label>
                                <select onChange={e => setPersona(e.target.value)} name='Persona' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    autocomplete="off">

                                    <option selected>Persona</option>
                                    <option>Persona 1</option>
                                    <option>Persona 2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="OtherWork">Other ArtWork</label>
                                <select onChange={e => setOtherWork(e.target.value)} name='OtherWork' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    placeholder="Select Gender" autocomplete="off">
                                    <option selected>ArtWork</option>
                                    <option>ArtWork 1</option>
                                    <option>ArtWork 2</option>
                                    <option>ArtWork 3</option>
                                </select>


                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="Language">Language</label>
                                <select onChange={e => setLanguage(e.target.value)} name='Language' className="form-control p-2 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                                style={{
                                    borderRadius: '0'
                                    , color: 'black',
                                    borderWidth: '0 0 2px',
                                    outline: 0,
                                    borderBottom: '2px solid grey'
                                }}
                                    autocomplete="off">

                                    <option selected>Language1</option>
                                    <option>Hindi</option>
                                    <option>English</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="AboutMe">Currently work at location</label>

                                <textarea class="form-control" id="AboutMe" name='AboutMe' rows="3"
                                    onChange={e => setCurrentLocation(e.target.value)}
                                    className={styles.form_control_lg}></textarea>

                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="row">
                <div>
                    <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', marginLeft: '20px', borderBottom: '2px solid grey', margin: 'auto' }}>Bio</h2>
                </div>
                <div className="col-md-12 mt-4 mb-4">
                    <div className="form-outline">
                        <textarea class="form-control" id="aboutMe" placeholder='Write a detailes bio about yourself(minimum 500 words)' name='aboutMe' onChange={e => setAboutMe(e.target.value)} rows="3" className={styles.form_control_lg}></textarea>

                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center w-100 pt-3 p-2">
                <Button
                    onClick={() => DataPost('save')}
                    variant="contained"
                    className={styles.signup_btn1}
                >
                    Preview & Publish
                </Button>
                <Button
                    style={{ marginLeft: '15px' }}
                    onClick={() => DataPost('draft')}
                    variant="contained"
                    className={styles.signup_btn1}
                >
                    Save As Draft
                </Button>
            </div>
        </section>

    )
}

export default ArtistFom1
