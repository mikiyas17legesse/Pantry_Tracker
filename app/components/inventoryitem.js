import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const InventoryItemComponent = ({ name, quantity, addItem, removeItem }) => {
  const logQuantity = (amount) => {return "x " + amount}

  return (
    <Box key={name} width="100%"
      minHeight="50px" display="flex" alignItems="center" justifyContent="space-between" bgcolor="#e8f5e9" padding={2} borderRadius={2}>
      <Typography variant="h6" color="#333" textAlign="center" flexGrow={1}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <Typography variant="h6" color="#333" textAlign="center" width="50px">
        {logQuantity(quantity)}
      </Typography>
      <Box display="flex" gap={1}>
        <Button variant="contained" sx={{ fontFamily: 'Pacifico' }} color="success" onClick={() => { addItem(name) }}>Add</Button>
        <Button variant="contained" sx={{ fontFamily: 'Pacifico' }} color="error" onClick={() => { removeItem(name) }}>Remove</Button>
      </Box>
    </Box>
  );
}

export default InventoryItemComponent;
