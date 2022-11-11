import React, { useState } from "react";

import { useRouter } from "next/router";
import Router from "next/router";
import {
    Button, Backdrop,
    CircularProgress, TextField, makeStyles, Select, InputLabel, MenuItem,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Cookies from "js-cookie";
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
    form_control_lg: {
        width: "100%",
        "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
            transform: "translate(36px, -8px) scale(0.75)",
            background: "#fff",
            padding: "0 20px",
            color: "#000",
            Height: '70px'
        },
        "& .MuiFilledInput-root": {
            overflow: "hidden",
            backgroundColor: " #fff",
            border: " 2px solid #888888",
            borderBottom: " 2px solid #888888 !important",
            // "&:active": {
            //     border: " 2px solid #FAA61A !important",
            //     borderBottom: " 2px solid #FAA61A !important",
            // },
            // "&:focus": {
            //     border: " 2px solid #FAA61A !important",
            //     borderBottom: " 2px solid #FAA61A !important",
            // },
            // "&:focus-within": {
            //     border: " 2px solid #FAA61A !important",
            //     borderBottom: " 2px solid #FAA61A !important",
            // },
            // "&:visited": {
            //     border: " 2px solid #FAA61A !important",
            //     borderBottom: " 2px solid #FAA61A !important",
            // },
            // "&:focus-visible": {
            //     border: " 2px solid #FAA61A !important",
            //     borderBottom: " 2px solid #FAA61A !important",
            // },
            // "&:target": {
            //     border: " 2px solid #FAA61A !important",
            //     borderBottom: " 2px solid #FAA61A !important",
            // },
        },
        "& .MuiFilledInput-underline": {
            "&:before": {
                transition: "none",
                borderBottom: "none",
            },
            "&:after": {
                transition: "none",
                borderBottom: "none",
            },
            transition: "none",
            borderBottom: "none",
        },
        "& .MuiFilledInput-input": {
            padding: "8px 20px 12px 25px !important",
        },
        "& .MuiInputLabel-filled": {
            transform: "translate(20px, 12px) scale(1)",
        },
    },
    mobileCode: {
        position: "relative",
        overflow: "hidden",
        backgroundColor: " #fff",
        border: " 2px solid #888888",
        borderBottom: " 2px solid #888888 !important",
        width: "120px",
        padding: "4px 15px 4px 15px !important",
    },
    inputField: {
        width: "100%",
        border: " 2px solid #888888 !important",
        borderBottom: "2px solid #888888 !important",

        "&:active": {
            border: " 2px solid #FAA61A !important",
            borderBottom: " 2px solid #FAA61A !important",
        },
        "&:focus": {
            border: " 2px solid #FAA61A !important",
            borderBottom: " 2px solid #FAA61A !important",
        },
        "&:focus-within": {
            border: " 2px solid #FAA61A !important",
            borderBottom: " 2px solid #FAA61A !important",
        },
        "&:visited": {
            border: " 2px solid #FAA61A !important",
            borderBottom: " 2px solid #FAA61A !important",
        },
        "&:focus-visible": {
            border: " 2px solid #FAA61A !important",
            borderBottom: " 2px solid #FAA61A !important",
        },
        "&:target": {
            border: " 2px solid #FAA61A !important",
            borderBottom: " 2px solid #FAA61A !important",
        },
        "& label ": {
            fontSize: ".8rem !important",
        },
        "& .MuiInputLabel-filled.MuiInputLabel-shrink.MuiInputLabel-marginDense": {
            transform: "translate(36px, -8px) scale(0.75)",
            background: "#fff",
            padding: "0 10px",
        },

        "& .MuiFilledInput-root": {
            backgroundColor: " #fff",
            borderRadius: "30px",
        },
        "& .MuiFilledInput-underline": {
            "&:before": {
                transition: "none",
                borderBottom: "none",
            },
            "&:after": {
                transition: "none",
                borderBottom: "none",
            },
            transition: "none",
            borderBottom: "none",
        },
        "& .MuiFilledInput-input": {
            padding: "10px 20px 12px 25px !important",
        },
        "& .MuiInputLabel-filled": {
            transform: "translate(20px, 12px) scale(1)",
        },
    },
    mobileNumber: {
        position: "relative",
        overflow: "hidden",
        backgroundColor: " #fff",
        border: " 2px solid #888888",
        borderBottom: " 2px solid #888888 !important",
        width: "90%",
        marginLeft: "20px",
        padding: "4px 20px 4px 25px !important",
    },
    createAcc: {
        backgroundColor: " #faa61a",
        border: " 2px solid #888888",
        borderBottom: " 2px solid #888888 !important",
        padding: "5px 60px",
        marginTop: "35px",
        "&:hover": {
            // backgroundColor: " #faa61a",
        },
    },
    checkBox: {
        fontFamily: 'Gelion',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: ' 20px',
        color: '#0A071B',
    }
}));
function SignUpForm() {
    const classes = useStyles();
    const router = useRouter();
    const [passsword, setPasssword] = useState("");
    const [confirm_pass, setConfirm_pass] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [joinAs, setJoinAs] = useState();
    const [getMessage, setMessage] = useState("");
    const [getMessageTrue, setMessageTrue] = useState("");
    const [openFalse, setOpenFalse] = useState(false);
    const [openTrue, setOpenTrue] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [open, setOpen] = React.useState(false);

    const createAccountSubmit = async (values) => {
        setOpen(!open);
        var myHeaders = new Headers();
        myHeaders.append(
            "Cookie",
            "ci_session=408f2edd7b13ace3ae508e93b84e9747e0608a74"
        );
        var formdata = new FormData();
        formdata.append("name", values.name);
        formdata.append("email", values.email);
        formdata.append("password", values.password);
        formdata.append("phoneNumber", phoneNumber);
        formdata.append("joinAs", "artist");
        formdata.append("aboutMe", values.name);
        var requestOptions = {
            method: "POST",
            body: formdata,
            headers: myHeaders,
            redirect: "follow",
        };
        const result = await fetch(
            process.env.NEXT_PUBLIC_USER_API_URL + `/beatnikSignup`,
            requestOptions
        )
            .then((response) => response.json())
            .then((responseJson) => {
                setOpen(false);
                if (responseJson.valid === false) {
                    setMessage(responseJson.result.message);
                    setOpenFalse(true);
                } else {
                    setMessageTrue(responseJson.result.message);
                    setOpenTrue(true);
                    Cookies.set("phoneNumber", responseJson.result.data.phoneNumber);
                    Cookies.set("name", responseJson.result.data.name);
                    Cookies.set("joinAs", responseJson.result.data.joinAs);
                    Cookies.set("id", responseJson.result.data.id);
                    Cookies.set("email", responseJson.result.data.email);
                    Cookies.set("aboutMe", responseJson.result.data.aboutMe);
                    Router.push(`account`, undefined, {
                        shallow: true,
                    });
                }
            });
    };
    const handleCloseFalse = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenFalse(false);
    };
    const handleCloseTrue = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenTrue(false);
    };
    return (
        <div>

            <Snackbar
                open={openFalse}
                autoHideDuration={6000}
                onClose={handleCloseFalse}
            >
                <Alert onClose={handleCloseFalse} severity="error">
                    {getMessage}
                </Alert>
            </Snackbar>
            <Snackbar
                open={openTrue}
                autoHideDuration={6000}
                onClose={handleCloseTrue}
            >
                <Alert onClose={handleCloseTrue} severity="success">
                    {getMessageTrue}
                </Alert>
            </Snackbar>
            <div>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        passsword: "",

                        check: "",
                        confirm_pass: "",
                    }}
                    onSubmit={async (values, { setSubmitting }) => {
                        const result = createAccountSubmit(values, null, 2);
                    }}
                >
                    {({
                        errors,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting,
                        setFieldValue,
                        isValid,
                        touched,
                        values,
                    }) => (
                        <div>
                            <form onSubmit={handleSubmit} id="my-form" autocomplete="off">
                                <div className="form-outline mb-3">
                                    <TextField
                                        id="name"
                                        variant="filled"
                                        label="Numéro d’immatriculation ou Raison sociale"
                                        className={classes.form_control_lg}
                                        name="name"
                                        size="small"

                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                </div>
                                <div className="form-outline mb-3">
                                    <TextField
                                        id="name"
                                        variant="filled"
                                        label="E-mail professionnel"
                                        className={classes.form_control_lg}
                                        name="name"
                                        size="small"
                                        onChange={handleChange}
                                        value={values.name}
                                    />
                                </div>
                                <div className="form-outline mb-3">
                                    <TextField
                                        id="phone"
                                        type="text"
                                        variant="filled"
                                        label="Numéro de téléphone"
                                        className={classes.form_control_lg}
                                        name="phone"
                                        size="small"

                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-md-7 mb-3">
                                        <div className="form-outline mb-3">
                                            <TextField
                                                id="add"
                                                variant="filled"
                                                label="Adresse du siège social"
                                                className={classes.form_control_lg}
                                                name="add"
                                                size="small"
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-5 mb-3">
                                        <div className="form-outline mb-3">
                                            <TextField
                                                id="add"
                                                variant="filled"
                                                label="Code postal"
                                                className={classes.form_control_lg}
                                                name="add"
                                                size="small"
                                                onChange={handleChange}
                                                value={values.password}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        label="Age"
                                        onChange={handleChange}
                                        className={classes.form_control_lg}
                                        style={{ border: '2px solid gray', padding: '10px', background: 'white' }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>
                                <div className="form-outline mb-3 mt-2">
                                    <TextField
                                        id="descriptionTextarea1"
                                        type="text"
                                        className={classes.form_control_lg}
                                        label="Quelques mots sur votre activité"

                                        multiline
                                        rows={2}
                                        variant="filled"

                                        name="description"
                                        size="small"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        required
                                        id="check"
                                        type="checkbox"

                                        name="check"
                                        size="small"
                                        onBlur={handleBlur}
                                        value={isSubscribed}
                                        onChange={handleChange}
                                        style={{ color: "#FAA61A", marginRight: "5px" }}
                                    />
                                    <label
                                        className="form-check-label"
                                        style={{ fontFamily: "Nunito Sans" }}
                                        for="form2Example3"
                                    >
                                        <span className={classes.checkBox}>Je certifie avoir lu et accepté les Conditions Générales d'Utilisation et les Conditions Particulières de Service et de protection des données personnelles.</span>
                                    </label>
                                </div>
                                <div>
                                    <button style={{

                                        flexDirection: 'flex',
                                        justifyContent: 'right',
                                        alignItems: 'center',
                                        padding: '8px 16px',
                                        gap: '8px',
                                        width: '171px',
                                        height: '49px',
                                        color: '#fff',
                                        background: '#00798C',
                                        borderRadius: '25px',
                                        border: 'none',
                                        marginLeft: '190px'

                                    }}
                                        className='float-right mt-4'
                                        type="submit"
                                        disabled={isSubmitting}

                                    >
                                        <span></span> Envoyer
                                    </button>
                                    <Backdrop
                                        className={classes.backdrop}
                                        open={open}
                                        onClick={createAccountSubmit}
                                    >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                </div>
                            </form>
                        </div>
                    )}
                </Formik>
            </div >
        </div >
    );
}

export default SignUpForm;
