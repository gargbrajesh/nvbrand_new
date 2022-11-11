import { MenuItem, Select } from '@material-ui/core';
import { Button, OutlinedInput } from '@material-ui/core';
import React from 'react';
import styles from "../../Dashboard.module.css";

const AccountSettings = () => {
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div className={styles.ac_parent}>
                <div className={styles.as_left_side}>
                    <div className={styles.ac_input_group}>
                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Name *</label>
                            <OutlinedInput placeholder="Name of the person" className={styles.ac_input} />
                        </div>

                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Email *</label>
                            <OutlinedInput className={styles.ac_input} placeholder="email@gmail.com" />
                        </div>
                    </div>

                    <div className={styles.ac_input_group}>
                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Password *</label>
                            <OutlinedInput className={styles.ac_input} placeholder="Enter password" />
                        </div>

                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Confirm Password *</label>
                            <OutlinedInput className={styles.ac_input} placeholder="Enter confirm password" />
                        </div>
                    </div>

                    <div className={styles.ac_input_group}>
                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Phone number *</label>
                            <OutlinedInput className={styles.ac_input} placeholder="1245784541" />
                        </div>

                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Gender *</label>
                            <Select
                                className={styles.ac_input_select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Others</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className={styles.ac_input_group}>
                        <div className={styles.ac_input_item}>
                            <label htmlFor="">User Type</label>
                            <Select
                                className={styles.ac_input_select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Others</MenuItem>
                            </Select>
                        </div>

                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Birth Date</label>
                            <OutlinedInput className={styles.ac_input} placeholder="1245784541" />
                        </div>
                    </div>


                    <div className={styles.ac_input_group}>
                        <div className={styles.ac_input_item}>
                            <label htmlFor="">City</label>
                            <Select
                                className={styles.ac_input_select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Others</MenuItem>
                            </Select>
                        </div>

                        <div className={styles.ac_input_item}>
                            <label htmlFor="">Country</label>
                            <Select
                                className={styles.ac_input_select}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                                <MenuItem value={30}>Others</MenuItem>
                            </Select>
                        </div>
                    </div>

                    <div className={styles.ac_input_group} style={{ width: '100%' }}>
                        <div className={styles.ac_input_item} style={{ width: '100%' }}>
                            <label htmlFor="" style={{ marginLeft: '2rem' }}>Birth Date</label>
                            <textarea className={styles.ac_textarea} rows="10" placeholder="1245784541" />
                        </div>
                    </div>

                    <div className={styles.ac_input_group} style={{ width: '100%' }}>

                        <Button
                            className={styles.ac_button}
                        >Save changes</Button>
                    </div>

                </div>

                <div className={styles.as_right_side}>
                    <Button
                        className={styles.ac_right_side_button}
                    >Change Password</Button>
                    <Button
                        className={styles.ac_right_side_buttonlog}
                    >Log Out</Button>
                </div>
            </div>

        </>
    )
}

export default AccountSettings