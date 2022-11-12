import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Section } from 'components/organisms';
import styles from './LoginCover.module.css';
const useStyles = makeStyles(theme => ({

  hero: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    maxWidth: theme.layout.contentWidth,
    margin: '70 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  heroLeftSide: {
    padding: '0 !important',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 0),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0),
    },
  },
  heroRightSide: {
    maxWidth: '70%',
    flex: '0 0 70%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '300px',
    },
  },
  heroCover: {
    position: 'relative',
    width: '50vw',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroImageContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    left: '0%',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      shapeOutside: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
      clipPath: 'polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)',
    },
  },
  heroLeftSideInner:{
    position:'relative',
    zIndex:'999',
  }
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const LoginCoverDesign = props => {
  const { leftSide, rightSide, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(styles.root, 'hero-shaped', className)} {...rest}>
      <div className={clsx('hero-shaped__wrapper', classes.hero)}>
        <Section
          className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
        >
          <div className={clsx('hero-shaped__innder',classes.heroLeftSideInner )}>
          {leftSide}
          </div>
        </Section>
        <div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
          <div className={clsx('hero-shaped__cover', classes.heroCover)}>
            <div
              className={clsx(
                'hero-shaped__image-container',
                classes.heroImageContainer,
              )}
            >
              <div className={clsx('hero-shaped__image', classes.heroImage)}>
                {rightSide}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Divider /> */}
    </div>
  );
};

LoginCoverDesign.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section right side
   */
  rightSide: PropTypes.node.isRequired,
  /**
   * Children to placed inside the section left side
   */
  leftSide: PropTypes.node.isRequired,
};

export default LoginCoverDesign;
