import React from 'react';
import { Box, Typography } from '@mui/material';

const HeaderComponent = () => {
  return (
    <Box variant="contained" display="flex" justifyContent="center" alignItems="center" marginBottom={10}>
      <Typography variant="h2" color="3a4c40" sx={{ fontFamily: 'Raleway' }}>Pantry Tracker</Typography>
    </Box>
  );
}

export default HeaderComponent;
