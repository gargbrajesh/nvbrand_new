import React, { useRef, useState } from 'react';
import { MenuItem, Select, makeStyles } from '@material-ui/core';
import { Button, OutlinedInput } from '@material-ui/core';
import styles from "../design.module.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import { object } from 'prop-types';
import clsx from 'clsx';
import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
  artWorkFeature: {
    color: '#6B705A',
    marginLeft: '250px',
    fontFamily: 'Garamond',
    fontWeight: 700,
    fontSize: '42px',
  },
  divBtn: {
    width: '20%',
    marginLeft: '40px',
    textAlign: 'center',
    background: 'grey',
    borderRadius: '5px',
    color: 'white',
    paddingTop: '5px',
    fontSize: '25px',
    cursor: 'pointer',
  },
  linkstyl: {
    width: '100%',
    height: '18vh',
    padding: '3px',
    marginTop: '20px',
  },
}));

function ArtWork() {
  const classes = useStyles();
  const[templateName,setTemplateName]=useState('');
  const[templateYear,setTemplateYear]=useState('');
  const[templateArt,setTemplateArt]=useState('');
  const[templateCollaborat,setTemplateCollaborat]=useState('');
  const[templateVenue,setTemplateVenue]=useState('');
  const[templateEventName,setTemplateEventName]=useState('');
  const[templateDescription,setTemplateDescription]=useState('');
  
  const userTemplateBB = {
    name: templateName,
    year: templateYear,
    artWork:templateArt,
    collaborators:templateCollaborat,
    venue:templateVenue,
    eventName:templateEventName,
    description:templateDescription,
  };
  console.log(templateName);
   const [users, setUsers] = useState(userTemplateBB);
console.log(users);
  const otherWorkTemplate = {
    linkOne: '',
    linkTwo: '',
    otherWorkVenue: '',
    otherWorkdesc: '',
  };
  const [otherArtWork, setOtherArtWork] = useState([otherWorkTemplate]);

  const addUser = () => {
    setUsers([...users, userTemplateBB]);
  };

  const changeHadler = (e, index) => {
    const updatedUsers = users.map((user, i) =>
      index == i
        ? Object.assign(user, { [e.target.name]: e.target.value })
        : user,
    );
    setUsers(updatedUsers);
  };

  const addOtherWork = () => {
    setOtherArtWork([...otherArtWork, otherWorkTemplate]);
  };

  const changeHadler2 = (e, index) => {
    const updatedOtherArtWork = otherArtWork.map((othertWork, i) =>
      index == i
        ? Object.assign(othertWork, { [e.target.name]: e.target.value })
        : othertWork,
    );
    setOtherArtWork(updatedOtherArtWork);
  }
  var myHeaders = new Headers();
  myHeaders.append(
    'Cookie',
    'ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230',
  );

  
  
  var userID = Cookies.get('id');
  const [featureArtWorkOne, setFeatureArtWorkOne] = useState(userTemplateBB);
  const [featureArtWorkTwo, setFeatureArtWorkTwo] = useState();
  const [featureArtWorkThree, setFeatureArtWorkThree] = useState('');
  const [addFlag, setAddFlag] = useState('');
  const [featureAction, setFeatureAction] = useState('');
  const DataPost = (e) => {
    // var raw = JSON.stringify({
    //     // userID: 1,
    //     // featured_art_work_one: featureArtWorkOne,
    //     // featured_art_work_two: featureArtWorkTwo,
    //     // featured_art_work_three: featureArtWorkThree,
    //     // add_flag: addFlag,
    //     // action: featureAction,
    // });
    // const mydata = JSON.stringify(userTemplateBB);
    var formdata = new FormData();
    formdata.append('userID', userID);
    formdata.append('featured_art_work_one', JSON.stringify(userTemplateBB));
    formdata.append('featured_art_work_two', JSON.stringify(userTemplateBB) );
    formdata.append('featured_art_work_three', featureArtWorkThree);
    formdata.append('add_flag','save' );
    formdata.append('action', 'featured_art_work');
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    
    fetch(
      'https://app.whyuru.com/api/beatnik_portfolio_artist_add_edit',
      requestOptions,
    ) .then((response) => response.json())
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
  };

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
      <div className={clsx(classes.root, 'container p-2 ms-3 bg-white overflow-auto')}>
        <p className={classes.artWorkFeature}>ADDITIONAL INFORMATION</p>
        <div className={styles.ac_input_item}>
          <h2 style={{ color: '#FAA61A' }}>Featured Art Work</h2>
          <p style={{ color: '#6B705A' }}>
            (You can add upto 3 Featured artwork which will be highlighted on
            your Portfolio.Adding one Mandatory)
          </p>
        </div>
        <div>
          
            <div className={styles.float_container}>
              <div className={styles.float_child}>
                <div className={styles.green}>
                  <div
                    style={{
                      width: '100%',
                      height: '8vh',
                      display: 'flex',
                      gap: '10px',
                    }}
                  >
                    <div className={classes.divBtn}>+</div>
                    <div className={classes.divBtn}>+</div>
                    <div className={classes.divBtn}>+</div>
                  </div>
                  <div className={classes.linkstyl}>
                    <div
                      className={styles.ac_input_item}
                      style={{ padding: '0px', marginLeft: '-5px' }}
                    >
                      <OutlinedInput
                        placeholder="Add an external link for ArtWork"
                        className={styles.ac_input}
                      />
                    </div>
                    <div
                      className={styles.ac_input_item}
                      style={{
                        padding: '3px',
                        marginLeft: '-9px',
                        marginTop: '15px',
                      }}
                    >
                      <OutlinedInput
                        placeholder="Add an external link for ArtWork"
                        className={styles.ac_input}
                      />
                    </div>
                    <div
                      className={styles.ac_input_item}
                      style={{ padding: '3px', marginLeft: '-9px' }}
                    >
                      <a
                        style={{
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                      >
                        +Add 1 external link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.float_child2}>
                <div className={styles.blue}>
                  <form autocomplete="off">
                    <div className="form-row d-flex">
                      <div className="form-group col-md-7 p-0">
                        <input
                          type="text"
                          className="form-control p-0 px-2"
                          name="name"
                          placeholder="Enter name"
                          value={templateName}
                          onChange={(e) => setTemplateName(e.target.value)}
                          autocomplete="off"
                        />
                      </div>
                      <div className="form-group ms-3 col-md-5 ">
                        <input
                          type="text"
                          className="form-control p-0 px-2"
                          name="year"
                         
                          placeholder="Year"
                           onChange={(e) => setTemplateYear(e.target.value)}
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="form-row d-flex mt-1">
                      <div className="form-group col-md-7">
                        <select
                          className="form-control p-0 px-2 form-select dropdown-toggle and the data-toggle dropdown"
                          name="artWork"
                         
                          placeholder="Choose Art"
                           onChange={(e) => setTemplateArt(e.target.value)}
                          autocomplete="off"
                        >
                          <option>Choose Art</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      <div className="form-group ms-3 col-md-5">
                        <input
                          type="text"
                          className="form-control p-0 px-2"
                          name="collaborators"
                          
                          placeholder="collaborators"
                           onChange={(e) => setTemplateCollaborat(e.target.value)}
                          autocomplete="off"
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-7 mt-1">
                      <input
                        type="text"
                        className="form-control p-0 px-2"
                        name="venue"
                        
                         onChange={(e) => setTemplateVenue(e.target.value)}
                        placeholder="Venue"
                        autocomplete="off"
                      />
                    </div>
                    <div className="form-group col-md-7 mt-1">
                      <input
                        type="text"
                        className="form-control p-0 px-2"
                        
                         onChange={(e) => setTemplateEventName(e.target.value)}
                        
                        name="eventName"
                        placeholder="Event/Festival Name"
                        autocomplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control mt-1"
                        
                         onChange={(e) => setTemplateDescription(e.target.value)}
                        name="description"
                        id="exampleFormControlTextarea1"
                        placeholder="Add description..."
                        rows="2"
                      ></textarea>
                    </div>

                    <button className="btn p-0 mt-2 text-decoration-underline">
                      clear all field
                    </button>
                  </form>
                </div>
              </div>
            </div>
          

          <div className={styles.social_media}>
            <Button
              variant="contained"
              className={styles.createPortfolioButton}
             //onClick={addUser}
            >
              + Add 1 More
            </Button>
          </div>
        </div>

        <h2 style={{ color: '#FAA61A', marginLeft: '20px' }}>Other Art Work</h2>

        {otherArtWork.map((othertWork, index) => (
          <div key={index}>
            <div className={styles.float_container_other} key={index}>
              <div className={styles.float_child1_other}>
                <div className={styles.green}>
                  <div
                    style={{
                      width: '100%',
                      height: '18vh',
                      padding: '3px',
                      marginTop: '20px',
                    }}
                  >
                    <div
                      className={styles.ac_input_item}
                      style={{ padding: '0px', marginLeft: '-5px' }}
                    >
                      <OutlinedInput
                        placeholder="Add an external link for ArtWork"
                        name="linkOne"
                        onChange={e => changeHadler2(e, index)}
                        className={styles.ac_input}
                      />
                    </div>
                    <div
                      className={styles.ac_input_item}
                      style={{
                        padding: '3px',
                        marginLeft: '-9px',
                        marginTop: '15px',
                      }}
                    >
                      <OutlinedInput
                        placeholder="Add an external link for ArtWork"
                        name="linkTwo"
                        onChange={e => changeHadler2(e, index)}
                        className={styles.ac_input}
                      />
                    </div>
                    <div
                      className={styles.ac_input_item}
                      style={{ padding: '3px', marginLeft: '-9px' }}
                    >
                      <a
                        style={{
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                      >
                        +Add 1 external link
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.float_child2_other}>
                <div className={styles.blue}>
                  <form autocomplete="off">
                    <div class="form-group col-md-7 mt-1">
                      <input
                        type="text"
                        class="form-control p-0 px-2"
                        name="otherWorkVenue"
                        onChange={e => changeHadler2(e, index)}
                        placeholder="Venue"
                        autocomplete="off"
                      />
                    </div>
                    <div class="form-group">
                      <textarea
                        class="form-control mt-1"
                        name="otherWorkdesc"
                        id="exampleFormControlTextarea1"
                        placeholder="Add description..."
                        rows="3"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      class="btn p-0 mt-2 text-decoration-underline"
                    >
                      clear all field
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className={styles.social_media}>
          <Button
            variant="contained"
            className={styles.createPortfolioButton}
            onClick={addOtherWork}
          >
            + Add 1 More
          </Button>
        </div>

       
      </div>
    </>
  );
}

export default ArtWork;
