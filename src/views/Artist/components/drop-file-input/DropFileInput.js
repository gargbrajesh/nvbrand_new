import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "../../design.module.css";
import DefaultImg from './../../../../../public/assets/Images/default.jpg';
import uploadImg from "../../../../../public/assets/Images/logo/cloud.svg";
import Vecter from "../../../../../public/assets/Images/logo/Vector1.svg";
import LinkIcon from "@material-ui/icons/Link";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  linkTag: {
    position: "absolute",
    left: "22%",
    top: "20px",
  },
  dropfile: {
    position: "relative",
  },

  pastURLDATA: {
    display: "block",
    position: "relative",
    margin: "0% auto",
    textAlign: "center",
    alignItems: "center",
  },
  btn: {
    background: "#FAA61A",
    color: "white",
    width: " 145px",
    borderRadius: "20px",
    justifyContent: "center",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "16px",
    padding: "4px 0px",
    fontFamily: "Nunito Sans",
  },
  vectorImg: {
    width: "50px !important",
  },

}));
const DropFileInput = (props) => {
  const classes = useStyles();
  const wrapperRef = useRef(null);
  const [getPastedURL, setPastedURL] = useState("");
  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];

    if (newFile) {
      if((newFile.size /1024) > 300){
        alert("File size must be less than 300 kb");
      }else{
        
        const updatedList = [...fileList, newFile];
        setFileList(updatedList);
        props.onFileChange(updatedList);
      }

      // alert(updatedList);
    }
  };

  const fileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };
  const handeOnchangeURL = (event) => {
    alert(event.target.value);
  };

  return (
    <>
      <div className={classes.dropfile}>
        <div
          ref={wrapperRef}
          className={styles.drop_file_input}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <div className={styles.drop_file_input__label}>
            <p>Profile Media (Max: 3)</p>
            <img src={uploadImg} alt="uploadImg" />
            <br />
            <img className={classes.vectorImg} src={Vecter} alt="cloud" />

            <p>Drag & Drop your files here</p>
            <p className={classes.btn}>Browse</p>
          </div>
          <br />
          <input type="file" value="" onChange={onFileDrop} />
        </div>
      </div>
      {fileList.length > 0 ? (
        <div className={styles.drop_file_preview}>
          <p className={styles.drop_file_preview__title}>Ready to upload </p>
          <div className={styles.uploadedImg}>
            {fileList.map((item, index) => (
              <div key={index} className={styles.drop_file_preview__item}>
                <img
                  src={DefaultImg}
                  alt=""
                />
                <div className={styles.drop_file_preview__item__info}>
                  <p>{item.name}</p>
                
                </div>
                <span
                  className={styles.drop_file_preview__item__del}
                  onClick={() => fileRemove(item)}
                >
                  x
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
        
      <div className={styles.orDevider}>
        <span style={{ width: "100%" }}> For videos and audios</span>
      </div>

      <div className={clsx(classes.pastURLDATA, styles.pastURLDATA)}>
        <input
          type="text"
          className={styles.notifie}
          placeholder="Paste link from web"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handeOnchangeURL}
          value={getPastedURL}
        />
        <p className={classes.linkTag}>
          <LinkIcon />
        </p>
        <span>
          <button
            className={styles.btn_notifie}
            type="button"
            id="button-addon2"
          >
            GO
          </button>
        </span>
      </div>
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
