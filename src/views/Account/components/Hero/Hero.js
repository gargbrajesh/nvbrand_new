import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { DescriptionCta, SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    background: '#2d3748',
    '& section': {
      padding: '46px 68px',
    },
  },

  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  progress: {
    color: 'white',
    width: '80px',
    height: '80px',
  },
  percentage: {
    width: '100px',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    position: 'relative',
    zIndex: 10,
    left: '92px',
    top: '-9px',
    color: '#fff',
    fontSize: 'large',
    fontWeight: 'bold',
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [completed, setCompleted] = React.useState('');

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (completed < 100) {
        setCompleted(completed + 90);
      }
    }, 1000);
  }, []);

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Section>
        {/* <SectionHeader
          title="Account Settings"
          subtitle="Change account information and settings"
          align="left"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        /> */}
        <DescriptionCta
          title="Account Settings"
          subtitle="Change account information and setting"
          primaryCta={
            <Box position="relative" display="inline-flex">
              {/* <CircularProgress
                color="secondary"
                variant="determinate"
                {...props}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="caption"
                  component="div"
                  className={classes.textWhite}
                >{`${Math.round(props.value)}%`}</Typography>
              </Box> */}
              <div className={classes.percentage}>
                {completed ? completed + '%' : null}
              </div>
              <CircularProgress
                className={classes.progress}
                variant="static"
                value={completed}
                size={80}
                thickness={5}
              />
            </Box>
          }
          align={'left'}
          titleProps={{
            className: classes.fontWeightBold,
            color: 'textPrimary',
          }}
          subtitleProps={{
            // color: 'textSecondary',
            className: classes.textWhite,
          }}
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
        />
      </Section>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;

// export default function CircularStatic() {
//   const [progress, setProgress] = React.useState(60);

//   React.useEffect(() => {
//     if (progress !== 60) {
//       const timer = setInterval(() => {
//         setProgress(prevProgress =>
//           prevProgress >= progress ? 0 : prevProgress + 10,
//         );
//       }, 400);
//     }
//   }, []);

//   return <Hero value={progress} />;
// }
