import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
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
       <Link to='Home'> <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /></Link>
       <Link to='About'> <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} /></Link>
        <Link to='Register'><BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /></Link>
      </BottomNavigation>
    </Box>
  );
}
