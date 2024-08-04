import React from 'react';
import { Box, Modal, Typography, Stack, TextField, Button } from '@mui/material';

const ModalComponent = ({ open, handleClose, itemName, setItemName, addItem }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box position="absolute" top="50%" left="50%" width={400} bgcolor="white" border="2px solid #000" boxShadow={24} p={4} display="flex" flexDirection="column" gap={3}
        sx={{ transform: "translate(-50%, -50%)", bgcolor: '#a5d6a7' }}>
        <Typography variant="h6" sx={{ fontFamily: 'Pacifico' }}>Add Item</Typography>
        <Stack width="100%" direction="row" spacing={2}>
          <TextField
            variant='outlined'
            fullWidth
            value={itemName}
            onChange={(e) => { setItemName(e.target.value) }}
            sx={{ bgcolor: 'white' }}
          />
          <Button variant="contained" color="success" onClick={() => {
            addItem(itemName);
            setItemName('');
            handleClose();
          }}
          >Add</Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalComponent;
