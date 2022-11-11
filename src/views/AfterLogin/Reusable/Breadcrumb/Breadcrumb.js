import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs, Typography } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";

const styless = makeStyles((theme) => ({
  breadCrum: {
    padding: "5px",
    position:"relative",
    top:"0px",
    '& ol':{
      marginLeft:"0px"
    }
  },
 
}));

const Breadcrumb = props => {
  const { data, className, ...rest } = props;
  const classes = styless();


  return (
    <div className={className} {...rest}>
      <Breadcrumbs className="breadcrumb_medefile">
        <Link href="/">Home</Link>
        <Link href="/account">Account</Link>
        <Typography color="textPrimary">{props.url}</Typography>
      
      </Breadcrumbs>
    </div>
  );
};

Breadcrumb.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Breadcrumb;


