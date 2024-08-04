'use client'
import {useState, useEffect} from 'react'
import {firestore} from '@/firebase'
import {Box, Button} from '@mui/material'
import { collection, doc, getDoc, deleteDoc, getDocs, query, setDoc } from "firebase/firestore";
import HeaderComponent from './components/header';
import InventoryListComponent from './components/inventorylist';
import ModalComponent from './components/modal';



export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const [recipeSuggestions, setRecipeSuggestions] = useState('');
 

  // Functions
  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({ name: doc.id, ...doc.data() })
    })
    setInventory(inventoryList)
  }
  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      await setDoc(docRef, { quantity: quantity + 1 })
    } else {
      await setDoc(docRef, { quantity: 1 })
    }
    await updateInventory()
  }
  const removeItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      const { quantity } = docSnap.data()
      if (quantity === 1) {
        await deleteDoc(docRef)
      } else {
        await setDoc(docRef, { quantity: quantity - 1 })
      }
    }
    await updateInventory()
  }

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    updateInventory()
  }, [])

  return (
    <Box width="100vw" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={2} sx={{ bgcolor: '#e0f7fa' }}>
      <ModalComponent open={open} handleClose={handleClose} itemName={itemName} setItemName={setItemName} addItem={addItem} />
      <HeaderComponent/>
      <Button variant="contained" sx={{ mt: 1 }} color="success" onClick={handleOpen}>Add New Item</Button>
      <InventoryListComponent inventory={inventory} addItem={addItem} removeItem={removeItem} />
    </Box>
    
  );
}
