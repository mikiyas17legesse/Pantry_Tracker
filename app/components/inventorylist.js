import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import InventoryItemComponent from './inventoryitem';

const InventoryListComponent = ({ inventory, addItem, removeItem }) => {
  return (
    <Box border={1} sx={{ borderColor: 'text.secondary', bgcolor: '#a5d6a7', padding: 2, borderRadius: 2 }}>
      <Box width="800px" height="80px" bgcolor="#4caf50" alignItems="center" display="flex" justifyContent="center" borderRadius={2}>
        <Typography variant='h2' sx={{ fontFamily: 'Raleway' }} color="white">
          Current Pantry
        </Typography>
      </Box>
      <Stack width="800px" height="300px" spacing={2} overflow="auto" sx={{ marginTop: 2 }}>
        {inventory.map(({ name, quantity }) => (
          <InventoryItemComponent key={name} name={name} quantity={quantity} addItem={addItem} removeItem={removeItem} />
        ))}
      </Stack>
    </Box>
  );
}

export default InventoryListComponent;
