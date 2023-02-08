import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Link} from 'react-router-dom'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to='Home'><BottomNavigationAction label="Home"  /></Link>
        <Link to='About'><BottomNavigationAction label="About"  /></Link>
        <Link to='Register'><BottomNavigationAction label="Register"  /></Link>
      </BottomNavigation>
    </Box>
  );
}