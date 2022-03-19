import React, {useState,useEffect} from 'react'
import {Dialog,DialogContentText,DialogTitle,DialogActions,DialogContent,Button} from '@material-ui/core'
import {MdClose} from "react-icons/md";
import {FaTrash} from "react-icons/fa";
import useStyles from './style';
import { useParams} from 'react-router-dom';
import {SelectProduct} from '../../features/productSlice'
import { useSelector,useDispatch } from "react-redux";
import {remove} from "../../features/productSlice"



export default function AlertDialog({open,handleClose}) {
  const classes = useStyles();
  const prod = useSelector(SelectProduct);
  const dispatch = useDispatch();
  const { Id  } = useParams();
  const product =prod[Id -1];
  
  const Remove= () => {
    dispatch(remove(product))
    handleClose()
  }

  return (
    
     
    <Dialog
       open={open}
       onClose={handleClose}
       aria-labelledby="alert-dialog-title"
       aria-describedby="alert-dialog-description" 
     >
     <DialogTitle id="responsive-dialog-title">
       {"Remove from basket"}
     <MdClose onClick={handleClose}/>
     </DialogTitle>
     <DialogContent>
     <DialogContentText id="alert-dialog-description">
       Are you sure you want to remove this item from the cart?
      </DialogContentText>
     </DialogContent>
     <DialogActions>
      <Button variant="outlined"  startIcon={<FaTrash />} className={classes.btnRemove} onClick={Remove}  autoFocus>
        Remove Product 
      </Button>
     
     </DialogActions>
    </Dialog>
    
     );
   }