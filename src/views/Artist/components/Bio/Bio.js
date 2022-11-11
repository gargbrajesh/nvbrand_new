import React, { useState } from 'react'
import styles from './Bio.module.css';
function Bio() {
    const [aboutMe, setAboutMe] = useState();
  
    return (
        <section className={styles.container}>

            <div className="row mx-4">
                <div>
                    <h2 style={{ color: '#FAA61A', fontFamily: 'Garamond', marginLeft: '20px', borderBottom: '2px solid black', margin: 'auto' }}>Bio</h2>
                </div>
                <div className="col-md-12 mt-4 mb-4">
                    <div className="form-outline">
                        <label className="form-label" for="aboutMe">About Me</label>

                        <textarea class="form-control" id="aboutMe" name='aboutMe' onChange={e => setAboutMe(e.target.value)} rows="3" className={styles.form_control_lg}></textarea>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bio
