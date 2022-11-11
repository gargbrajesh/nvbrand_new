import React from 'react';
import MetaTitle from 'components/helper/MetaTitle';
import { Grid } from '@material-ui/core';
import WelcomeHeader from './components/WelcomeHeader';
import NavigationSection from './components/NavigationSection';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

const SigninCover = props => {

    const [rightImageCSS, setRightImageCSS] = React.useState({ opacity: 0 });
    const { className, ...rest } = props;
    const classes = useStyles();

    return (

        <>
            <WelcomeHeader />
            <NavigationSection />

        </>
    );
};

export default SigninCover;
