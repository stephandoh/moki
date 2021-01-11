import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DetailsIcon from '@material-ui/icons/Details';

const useStyles = makeStyles({
  root: {
    width: 1600,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
    <Link to = '/KalCal' >
    <BottomNavigationAction  icon={<HomeIcon />} />
    </Link>
      <Link to = '/About'>
      <BottomNavigationAction  icon={<InfoIcon />} />
      </Link> 
      <Link to = '/'>
      <BottomNavigationAction  icon={<DetailsIcon />} />
      </Link> 
    </BottomNavigation>
  );
}