import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Button,
  Divider,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  makeStyles,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import AlertMassage from 'components/helper/AlertMessage';
import { Autocomplete } from '@material-ui/lab';
import { checkToken } from './../../../../../components/helper/LoginCheck';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },

  rootTag: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  dividerMargin: {
    margin: theme.spacing(2),
  },
  addMoreContender: {
    display: 'inline-flex',
    float: 'right',
  },
  marginBottom: {
    marginBottom: theme.spacing(1),
  },
  addButton: {
    height: '40px',
    position: 'relative',
    left: '3px',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function Medical() {
  const classes = useStyles();
  // for medical
  const [chipData, setChipData] = useState([
    { key: 0, label: 'Diabetes' },
    { key: 1, label: 'Porphyria' },
    { key: 2, label: 'Prostate Cancer' },
    { key: 3, label: 'Campomelic Dysplasia' },
    { key: 4, label: 'Ear Infection' },
  ]);

  const [chipDataAdded, setChipDataAdded] = useState([]);
  const handleDelete = chipToDelete => data => {
    setChipDataAdded(chips =>
      chips.filter(chip => chip.key !== chipToDelete.key),
    );
  };
  /* Item argument contains data for clicked chip component */
  const handleClick1 = data => () => {
    setAddNewMedicalProblem(data.label);
    setChipDataAdded([
      ...chipDataAdded,
      { key: chipDataAdded.length + 1, label: data.label },
    ]);
    setOpenMedicalDialog(true);
  };

  const [addNewMedicalProblem, setAddNewMedicalProblem] = useState('');

  const [status, setStatusBase] = useState('');
  const [dialogData, setDialogData] = useState('');

  // medical problems dialogBox
  const [openMedicalDialog, setOpenMedicalDialog] = useState(false);
  const handleClose_m_dialog = () => {
    setOpenMedicalDialog(false);
  };

  // add new medical problem dialog
  const [openNewMedicalDialog, setOpenNewMedicalDialog] = useState(false);
  const handleClose_NewMedical_Problem_dialog = () => {
    setOpenNewMedicalDialog(false);
  };
  const open_dialog_for_new_medical_problem = () => {
    setOpenNewMedicalDialog(true);
  };

const [getHistoryView, setHistoryView] = useState([]);
  useEffect(() => {
    const loginToken = checkToken();
    var myHeaders = new Headers();
    if (loginToken) {
      var bearerTokern = loginToken;
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${bearerTokern}`);
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };
      fetch(
        process.env.NEXT_PUBLIC_PATIENT_API_URL +
          'profile/getMedicalHistory',
        requestOptions,
      )
        .then(response => response.json())
        .then(response =>
          setHistoryView('000000000000000000000',response.medicalHistory),
        )
        .catch(error => console.log('error', error));
    }
  }, []);


  return (
    <div>
      {status ? (
        <AlertMassage
          key={status.key}
          message={status.msg}
          status={status.status}
        />
      ) : null}
      {/* Medical problems dialogBox */}
      <Dialog
        open={openMedicalDialog}
        onClose={handleClose_m_dialog}
        aria-labelledby="form-dialog-title"
      >
        <div>
          <DialogTitle id="form-dialog-title">
            {addNewMedicalProblem ? addNewMedicalProblem : null} - Duration
          </DialogTitle>
          <DialogContent>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{ flexDirection: 'inherit' }}
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                control={
                  <Radio
                    // checked={selectedValue === 'a'}
                    // onChange={handleChange}
                    color="primary"
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                }
                label="0-3 Months"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="3-6 Months"
                value="b"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value="c"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'C' }}
                  />
                }
                label="6-12 Months"
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value="d"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'D' }}
                  />
                }
                label="6-12 Months"
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value="e"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                  />
                }
                label="6-12 Months"
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value="f"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'F' }}
                  />
                }
                label="6-12 Months"
              />
              <FormControlLabel
                control={
                  <Radio
                    color="primary"
                    value="g"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'G' }}
                  />
                }
                label="6-12 Months"
              />
            </RadioGroup>
            <Divider />
            <Typography variant="h6">
              {addNewMedicalProblem ? addNewMedicalProblem : null} - Medication
            </Typography>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{ flexDirection: 'inherit' }}
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel
                control={
                  <Radio
                    // checked={selectedValue === 'a'}
                    // onChange={handleChange}
                    color="primary"
                    value="yes"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'Yes' }}
                  />
                }
                label="Yes"
              />
              <FormControlLabel
                control={<Radio color="primary" />}
                label="No"
                value="no"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'No' }}
              />
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose_m_dialog} color="primary">
              Done
            </Button>
          </DialogActions>
        </div>
      </Dialog>

      {/* Add new Medical Problem dialogBox ===========================================*/}
      <Dialog
        open={openNewMedicalDialog}
        onClose={handleClose_NewMedical_Problem_dialog}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        fullWidth="sm"
      >
        <div>
          <DialogTitle id="form-dialog-title">
            Add New Medical Problems
          </DialogTitle>
          <DialogContent>
            <Autocomplete
              multiple
              id="tags-filled"
              options={top100Films.map(option => option.title)}
              // defaultValue={[top100Films[13].title]}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              onChange={(e, option, reason) => {
                // console.log(reason);
                if (reason == 'select-option' || reason == 'create-option') {
                  //  console.log(e.currentTarget.innerText);
                  setAddNewMedicalProblem(option[option.length - 1]);
                  setChipDataAdded([
                    ...chipDataAdded,
                    {
                      key: chipDataAdded.length + 1,
                      label: option[option.length - 1],
                    },
                  ]);
                  setOpenMedicalDialog(true);
                }
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Add New"
                  fullWidth="true"
                  placeholder="Medical Problems"
                  // style={{ width: '400px' }}
                />
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose_NewMedical_Problem_dialog}
              color="primary"
            >
              Done
            </Button>
          </DialogActions>
        </div>
      </Dialog>
      {/* End======================================================================= */}

      <Grid item xs={12}>
        <Typography variant="h6" color="textPrimary">
          Medical History For dfdffdf<br />
          <p>Mr. Som Gupta</p>
        </Typography>
      </Grid>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="medicalProblem"
          id="medicalProblem"
        >
          <Typography className={classes.heading}>Medial Problem</Typography>
          {chipDataAdded.length !== 0 ? (
            <Typography className={classes.secondaryHeading}>
              {chipDataAdded
                .map(data => {
                  return data.label;
                })
                .join(', ')}
            </Typography>
          ) : null}
        </AccordionSummary>
        <AccordionDetails>
          {/* <Paper className={classes.rootTag}> */}
          <Grid container>
            <Grid item md={12} xs={12}>
              {chipDataAdded.map(data => {
                let icon;
                return (
                  <span key={data.key}>
                    <Chip
                      icon={icon}
                      clickable
                      // onClick={handleClick1(data)}
                      label={data.label}
                      color="primary"
                      variant="outlined"
                      onDelete={
                        // data.label === 'React' ? undefined : handleDelete(data)
                        handleDelete(data)
                      }
                      className={classes.chip}
                    />
                  </span>
                );
              })}
            </Grid>
            <Grid item md={12} p={10} xs={12} className={classes.dividerMargin}>
              <Divider />
            </Grid>
            <Grid item md={12} xs={12}>
              {chipData.map(data => {
                let icon;
                return (
                  <span key={data.key}>
                    <Chip
                      icon={icon}
                      clickable
                      onClick={handleClick1(data)}
                      label={data.label}
                      variant="outlined"
                      //   onDelete={
                      //     // data.label === 'React' ? undefined : handleDelete(data)
                      //     handleDelete(data)
                      //   }
                      className={classes.chip}
                    />
                  </span>
                );
              })}
              <Chip
                label="+ Add More"
                clickable
                onClick={open_dialog_for_new_medical_problem}
              />
            </Grid>
          </Grid>
          {/* </Paper> */}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="allergies"
          id="allergies"
        >
          <Typography className={classes.heading}>Allergies</Typography>
          {chipDataAdded.length !== 0 ? (
            <Typography className={classes.secondaryHeading}>
              {chipDataAdded
                .map(data => {
                  return data.label;
                })
                .join(', ')}
            </Typography>
          ) : null}
        </AccordionSummary>
        <AccordionDetails>
          {/* <Paper className={classes.rootTag}> */}
          <Grid container>
            <Grid item md={12} xs={12}>
              {chipDataAdded.map(data => {
                let icon;
                return (
                  <span key={data.key}>
                    <Chip
                      icon={icon}
                      clickable
                      // onClick={handleClick1(data)}
                      label={data.label}
                      color="primary"
                      variant="outlined"
                      onDelete={
                        // data.label === 'React' ? undefined : handleDelete(data)
                        handleDelete(data)
                      }
                      className={classes.chip}
                    />
                  </span>
                );
              })}
            </Grid>
            <Grid item md={12} p={10} xs={12} className={classes.dividerMargin}>
              <Divider />
            </Grid>
            <Grid item md={12} xs={12}>
              {chipData.map(data => {
                let icon;
                return (
                  <span key={data.key}>
                    <Chip
                      icon={icon}
                      clickable
                      onClick={handleClick1(data)}
                      label={data.label}
                      variant="outlined"
                      //   onDelete={
                      //     // data.label === 'React' ? undefined : handleDelete(data)
                      //     handleDelete(data)
                      //   }
                      className={classes.chip}
                    />
                  </span>
                );
              })}
              <Chip
                label="+ Add More"
                clickable
                onClick={open_dialog_for_new_medical_problem}
              />
            </Grid>
          </Grid>
          {/* </Paper> */}
        </AccordionDetails>
      </Accordion>
      {/* End======================================================================= */}
      {/* Section for listStyle===================================================== */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="allergies"
          id="allergies"
        >
          <Typography className={classes.heading}>Life Style</Typography>
        </AccordionSummary>
      </Accordion>
      {/* End======================================================================== */}
      {/* Section for Family History===================================================== */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="family-history"
          id="family-history"
        >
          <Typography className={classes.heading}>Family History</Typography>
        </AccordionSummary>
      </Accordion>
      {/* End======================================================================== */}
      {/* Section for Procedure===================================================== */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="procedure"
          id="procedure"
        >
          <Typography className={classes.heading}>Procedure</Typography>
        </AccordionSummary>
      </Accordion>
      {/* End======================================================================== */}
      {/* Section for Risk Factor===================================================== */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="risk-factor"
          id="isk-factor"
        >
          <Typography className={classes.heading}>Risk Factor</Typography>
        </AccordionSummary>
      </Accordion>
      {/* End======================================================================== */}
      {/* Section for Other===================================================== */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="Other"
          id="Other"
        >
          <Typography className={classes.heading}>Other</Typography>
        </AccordionSummary>
      </Accordion>
      {/* End======================================================================== */}
    </div>
  );
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
];
