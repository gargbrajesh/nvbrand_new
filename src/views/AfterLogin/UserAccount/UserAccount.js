import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Breadcrumb from "../Reusable/MediBreadcrumb";
import MetaTitle from "../../../components/helper/MetaTitle";
import UserForm from "./container/UserForm";
import Spinner from "components/organisms/Spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  portfolio: {
    padding: "0px 30px 80px 30px",
  },
}));
function UserAccount(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className="medifile_profie">
      <MetaTitle
        title={`Account | Beatnik`}
        metaKeyWord="Account | Beatnik"
        metaDescription="Account | Beatnik"
      />
      {loading ? (
        <>
          <div className="inner_container">
            <div className="medifiles_pannel">
              <div className="medifile_dashboard">
                <h3 className="medifile_head">Account </h3>
                {/* <Breadcrumb url="Account" /> */}
              </div>
            </div>
            <Grid container style={{ justifyContent: "space-between" }}>
              <Grid item lg={12}>
                <div className={classes.portfolio}>
                  <UserForm />
                </div>
              </Grid>
            </Grid>
          </div>
        </>
      ) : (
        <>
          <Spinner />
        </>
      )}
    </div>
  );
}
export default UserAccount;
