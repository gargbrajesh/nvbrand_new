import React, { useState } from 'react';
import { MenuItem, Select } from '@material-ui/core';
import styles from "../../checking.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftArrow from '../../.../../../../../public/assets/Images/logo/leftArrow.svg';
import RightArrow from '../../.../../../../../public/assets/Images/logo/RightArrow.svg';
import { Button } from 'react-bootstrap';
import { Modal} from "react-bootstrap";
import Cookies from 'js-cookie'

function Gallary() {

    const handleSubmission = () => {
        handleClose();
    };

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

   let x;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [profile, setProfile] = useState(null);

    const onChangePicture =  async (e)=> {
      if (e.target.files[0]) {
        console.log("picture: ", e.target.files[0]);
        const base64File = await toBase64(e.target.files[0]);
     
        x =  base64File;

        // console.log('00000000000000000000000000000 '+ x);

        setProfile(base64File);
        // setIsFilePicked(true);
        // setPicture(e.target.files[0]);
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        // await reader.readAsDataURL(e.target.files[0]);
      }

      
    };
  
   
    const DataPost = () => {
        var myHeaders = new Headers();
        myHeaders.append(
            'Cookie',
            'ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230',
        );
        const userID = Cookies.get('id');
        var formdata = new FormData();
        formdata.append('userID', userID);
        console.log(x);
        formdata.append('gallery', profile);
        formdata.append('add_flag', 'save');
        formdata.append('action', 'gallery');
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

            // console.log(error);
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
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> <div>

    {/*<input type="file" name="file" onChange={changeHandler} />*/}
                    <input id="profilePic" type="file" onChange={onChangePicture} />
                </div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmission}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="container p-2 bg-white overflow-auto" style={{ width: '80vw', height: '85vh', position: "fixed", marginLeft: '2%', marginTop: '-10px',}}>
                <p style={{ color: '#6B705A', marginLeft: '250px', fontFamily: 'Garamond', fontWeight: 700, fontSize: '42px' }}>BASIC INFORMATION</p>
                <div className={styles.ac_input_item}>
                    <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', marginLeft: '20px' }}>Gallary</h2>
                </div>

                <div className="container p-4">
                    <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark bg-light text-center" onClick={handleShow} style={{height:'110px',borderRadius:'20px', color:'#FAA61A', fontSize:'45px' ,cursor:'pointer'}}>
                            <img src={profile} style={{height:'90px',width:'100%',borderRadius:'20px'}}/></div>
                            
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center" onClick={handleShow} style={{height:'110px',borderRadius:'20px',  color:'#FAA61A',fontSize:'45px' ,cursor:'pointer'}}>+</div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center"
                             onClick={handleShow} style={{height:'110px',borderRadius:'20px', color:'#FAA61A', fontSize:'45px' ,cursor:'pointer'}}>+</div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center" 
                            onClick={handleShow} style={{height:'110px',borderRadius:'20px', color:'#FAA61A', fontSize:'45px' ,cursor:'pointer'}}></div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center" 
                            onClick={handleShow} style={{height:'110px',borderRadius:'20px', color:'#FAA61A', fontSize:'45px' ,cursor:'pointer'}}></div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center"
                             onClick={handleShow} style={{height:'110px',borderRadius:'20px',  color:'#FAA61A',fontSize:'45px' ,cursor:'pointer'}}></div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center" 
                            onClick={handleShow} style={{height:'110px',borderRadius:'20px', color:'#FAA61A', fontSize:'45px' ,cursor:'pointer'}}></div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center" 
                            onClick={handleShow} style={{height:'110px',borderRadius:'20px', color:'#FAA61A', fontSize:'45px' ,cursor:'pointer'}}>+</div>
                        </div>
                        <div className="col">
                            <div className="p-3 ms-2 border border-dark dotted bg-light text-center"
                             onClick={handleShow} style={{height:'110px',borderRadius:'20px',color:'#FAA61A', fontSize:'45px' ,cursor:'pointer'}}>+</div>
                        </div>
                    </div>
                </div>

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
                        <img src={RightArrow} style={{ marginTop: '8px', marginLeft: '5px' }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallary
