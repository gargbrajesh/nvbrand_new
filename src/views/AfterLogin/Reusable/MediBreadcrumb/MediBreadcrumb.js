import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs, Typography } from '@material-ui/core';
import Link from 'next/link';
import { makeStyles } from "@material-ui/core/styles";
const styless = makeStyles((theme) => ({
  breadCrum: {
    padding: " 0 10px 15px",
    position:"relative",
    top:"0px",
    '& ol':{
      marginLeft:"0px",
      '& a':{
        fontSize:"18px",
        fontWeight:"600",
        color: 'var(--heading-color)',
        
      },
      '& p':{
        fontSize:"18px",
        fontWeight:"600",
        color: 'var(--theme-color)',
        opacity: '.7',
        
      }
    }
  },
 
}));

const Breadcrumb = props => {
  const { data, className, ...rest } = props;
  const classes = styless();


  return (
    <div className={className} {...rest}>
      <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrum}>
        <Link href="/"> Home</Link>
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


